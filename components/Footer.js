import React from "react";
import dynamic from "next/dynamic";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Footer = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-6xl place-content-center">
      <div className="flex flex-col md:flex-row">
        <div className="mt-4 md:mt-0 flex flex-col justify-center">
          {/* Right Column (Title) */}
          <h1 className="text-4xl font-bold">
            <span className="text-gradient text-center">
              Ready to make a difference?
            </span>
          </h1>
          <p className="text-xl mt-8 text-center">
            Start burning your NFTs and join Charify's mission today.
          </p>
          <p className="text-lg mt-8 text-gradient font-bold">
            <WalletMultiButton />
          </p>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
