import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import BlurCard from "./Card";

const Governance = ({ cards }) => {
  const { publicKey } = useWallet();
  const publicKeyString = publicKey?.toBase58() || "N/A"; // Convert publicKey to string or use "N/A" if it's not available

  return (
    <main>
      <Head>
        <title>Voting Page</title>
      </Head>
      <div className="w-full">
        <div className="border-solid border-zinc-700 rounded-lg border-2 mb-6 mx-12 px-3 flex items-center text-center">
          <div className="flex-1">
            <h1 className="text-4xl mb-4 mt-8 font-bold">
              Your <span className="text-gradient">Information</span>
            </h1>
            <h4 className="mb-4 mt-6 font-bold">
              Wallet Address: {publicKeyString}
            </h4>
          </div>
          <div className="flex-1 flex items-center justify-center border-l-2 border-zinc-500">
            <p>
              Use your $CRY balance to delegate your voting power. You will not
              be sending any tokens, only the rights to vote for the charitable
              donation decision.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-h-screen mx-auto max-w-6xl border-solid border-2">
        <BlurCard>test</BlurCard>
      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(Governance), { ssr: false });
