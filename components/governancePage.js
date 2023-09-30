import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import BlurCard from "./Card";
import Button from "./Button";

const Governance = ({ cards }) => {
  const { publicKey } = useWallet();
  const publicKeyString = publicKey?.toBase58() || "N/A"; // Convert publicKey to string or use "N/A" if it's not available
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    alert(`Votes: ${newCounter}`);
  };

  const incrementCounter1 = () => {
    const newCounter1 = counter1 + 1;
    setCounter1(newCounter1);
    alert(`Votes: ${newCounter1}`);
  };

  const incrementCounter2 = () => {
    const newCounter2 = counter2 + 1;
    setCounter2(newCounter2);
    alert(`Votes: ${newCounter2}`);
  };

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
      <div className="grid grid-cols-3 justify-between min-h-fit mx-auto max-w-7xl pt-32">
        <BlurCard>
          <h1 className="font-bold text-3xl text-gradient mb-6">
            Charity Name
          </h1>
          <p className="font-bold text-xl mb-4">Charity Description:</p>
          <p className="mb-4">
            This is the sample text to write in here regarding what the charity
            is doing
          </p>
          <p className="mb-6">Votes Counter: {counter}</p>
          <div className="flex justify-center">
            <Button onClick={incrementCounter}>Vote</Button>
          </div>
        </BlurCard>
        <BlurCard>
          <h1 className="font-bold text-3xl text-gradient mb-6">
            Charity Name
          </h1>
          <p className="font-bold text-xl mb-4">Charity Description:</p>
          <p className="mb-4">
            This is the sample text to write in here regarding what the charity
            is doing
          </p>
          <p className="mb-6">Votes Counter: {counter1}</p>
          <div className="flex justify-center">
            <Button onClick={incrementCounter1}>Vote</Button>
          </div>
        </BlurCard>
        <BlurCard>
          <h1 className="font-bold text-3xl text-gradient mb-6">
            Charity Name
          </h1>
          <p className="font-bold text-xl mb-4">Charity Description:</p>
          <p className="mb-4">
            This is the sample text to write in here regarding what the charity
            is doing
          </p>
          <p className="mb-6">Votes Counter: {counter2}</p>
          <div className="flex justify-center">
            <Button onClick={incrementCounter2}>Vote</Button>
          </div>
        </BlurCard>
      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(Governance), { ssr: false });
