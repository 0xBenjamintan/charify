import * as multisig from "@sqds/multisig";
import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

const { Permission, Permissions } = multisig.types;
const connection = new Connection("http://localhost:8899", "confirmed");

describe("Interacting with the Squads V4 SDK", () => {
    const creator = Keypair.generate();
    const secondMember = Keypair.generate();
    before(async () => {
        const airdropSignature = await connection.requestAirdrop(
            creator.publicKey,
            1 * LAMPORTS_PER_SOL
        );
        await connection.confirmTransaction(airdropSignature);
    });

    const createKey = Keypair.generate().publicKey;

    // Derive the multisig account PDA
    const [multisigPda] = multisig.getMultisigPda({
        createKey,
    });

    it("Create a new multisig", async () => {
        // Create the multisig
        const signature = await multisig.rpc.multisigCreate({
            connection,
            // One time random Key
            createKey,
            // The creator & fee payer
            creator,
            multisigPda,
            configAuthority: null,
            timeLock: 0,
            members: [{
                    key: creator.publicKey,
                    permissions: Permissions.all(),
                },
                {
                    key: secondMember.publicKey,
                    // This permission means that the user will only be able to vote on transactions
                    permissions: Permissions.fromPermissions([Permission.Vote]),
                },
            ],
            // This means that there needs to be 2 votes for a transaction proposal to be approved
            threshold: 2,
        });
        console.log("Multisig created: ", signature);
    });
});


it("Create a transaction proposal", async () => {
    const [vaultPda, vaultBump] = multisig.getVaultPda({
        multisigPda,
        index: 0,
    });
    const instruction = SystemProgram.transfer(
    // The transfer is being signed from the Squads Vault, that is why we use the VaultPda
        vaultPda,
        creator.publicKey,
        1 * LAMPORTS_PER_SOL
    );
    // This message contains the instructions that the transaction is going to execute
    const transferMessage = new TransactionMessage({
        payerKey: vaultPda,
        recentBlockhash: (await connection.getLatestBlockhash()).blockhash,
        instructions: [instruction],
    });
    // This is the first transaction in the multisig
    const transactionIndex = 1n;
    const signature1 = await multisig.rpc.vaultTransactionCreate({
        connection,
        feePayer: creator,
        multisigPda,
        transactionIndex,
        creator: creator.publicKey,
        vaultIndex: 0,
        ephemeralSigners: 0,
        transactionMessage: transferMessage,
        memo: "Transfer 0.1 SOL to creator",
    });

    console.log("Transaction created: ", signature1);
    
    const signature2 = await multisig.rpc.proposalCreate({
        connection,
        feePayer: members.voter,
        multisigPda,
        transactionIndex,
        creator: feePayer,
    });
    
    console.log("Transaction proposal created: ", signature2);
    
});