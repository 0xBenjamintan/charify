import React from "react";
import dynamic from "next/dynamic";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Typewriter, useTypewriter } from "react-simple-typewriter";

const ProductDetails = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-6xl place-content-center">
      <div className="flex flex-col md:flex-row">
        <div className="mt-4 md:mt-0 flex flex-col justify-center">
          {/* Right Column (Title) */}
          <h1 className="text-4xl font-bold">
            <span className="">
              Championing Solana&rsquo;s{" "}
              <span className="text-gradient">
                <Typewriter
                  words={[" Integrity & Generosity"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  cursorColor="white"
                  typeSpeed={60}
                  deleteSpeed={90}
                  delaySpeed={1250}
                />
              </span>
            </span>
          </h1>
          <p className="text-xl mt-8">
            Scam NFTs and tokens have infiltrated{" "}
            <span className="text-gradient">Solana</span>, muddying its waters.
            Cleansing this impurity revitalizes our ecosystem. Simultaneously,
            we empower giving through $CRY token-based voting.
          </p>
          <p className="text-lg mt-8 ">
            Establishing a groundbreaking protocol enabling users to
            effortlessly support public goods using their untapped resources.
          </p>
          <p className="text-lg mt-8 text-gradient font-bold">
            Embark on the journey of impact – connect your wallet and dive in!
          </p>
          <p className="text-lg mt-8 text-gradient font-bold">
            <WalletMultiButton />
          </p>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProductDetails), { ssr: false });
