import * as multisig from "@sqds/multisig";
import { Connection, Keypair, SystemProgram } from "@solana/web3.js";

// Cluster Connection
const connection = new Connection("https://api.devnet.solana.com"); // Solana Devnet RPC URL

const { fromSecretKey } = require('@solana/web3.js');

// Replace these with the provided public and private keys
// can remove publicKeyString if not needed since it's nto read
const publicKeyString = "F6cKBSGsm1C9YXNfBiMrc5VjywNiHA6cNQy64b7UEYC4";
const privateKeyString = "2HuXfWfLbjikZRCRBhgn7xgK23MUC1u8SrsfTHbRDeJPkCPymrqVFZtyk7RHuo5ffSpGudPDNjUgbBsHdXLqZ5LQ";

const privateKeyArray = new TextEncoder().encode(privateKeyString);
const creator = fromSecretKey(privateKeyArray);

// Derive the multisig PDA
const createKey = creator.publicKey;
const multisigPda = multisig.getMultisigPda({
  createKey,
})[0];

async function createMultisigWallet() {
  try {
    await multisig.rpc.multisigCreate({
      connection,
      createKey,
      creator,
      multisigPda,
      configAuthority: null,
      timeLock: 0,
      members: [
        {
          key: creator.publicKey,
          permissions: multisig.Permissions.all(),
        },
        // Add other members and their permissions as needed
      ],
      threshold: 10, // Adjust the threshold as needed
    });

    console.log("Multisig wallet created successfully.");
  } catch (error) {
    console.error("Error creating multisig wallet:", error);
  }
}

createMultisigWallet();
