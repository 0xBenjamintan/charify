import * as multisig from "@sqds/multisig";
import { Connection, Keypair } from "@solana/web3.js";

// Cluster Connection
const connection = new Connection("https://api.devnet.solana.com"); // Solana Devnet RPC URL

// Fee payer is the signer that pays the transaction fees
const feePayer = Keypair.generate();

// Replace createKey with the actual public key you want to use
const createKey = Keypair.generate().publicKey;

// Derive the multisig PDA
const multisigPda = multisig.getMultisigPda({
  createKey,
})[0];

const transactionIndex = BigInt(1);

async function createVotingProposal() {
  try {
    // You can modify the proposal parameters as needed
    const result = await multisig.rpc.proposalCreate({
      connection,
      feePayer: feePayer,
      multisigPda,
      transactionIndex,
      creator: feePayer,
    });

    console.log("Voting proposal created successfully:", result);

    // Handle the result and display a success message
  } catch (error) {
    console.error("Error creating voting proposal:", error);

    // Handle errors and display an error message
  }
}

createVotingProposal();
