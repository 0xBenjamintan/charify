import React from "react";
import dynamic from "next/dynamic";

const Step12 = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-6xl place-content-center">
      <div className="flex justify-center items-center">
        {/* Right Column (Title) */}
        <h1 className="text-4xl font-bold w-1/3 justify-center text-center">
          <span className="text-gradient">Step 1</span>
        </h1>
        <p className="text-xl text-justify w-2/3">
          Pick the <span className="text-gradient">NFTs</span> you want to get
          rid of from your collection. These could be duplicates or ones you no
          longer want. We help you declutter while making a positive impact.
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="flex justify-center items-center">
        {/* Right Column (Title) */}
        <p className="text-xl text-justify w-2/3">
          Start the <span className="burnText">BURNING</span> process to
          permanently remove these <span className="text-gradient">NFTs</span>{" "}
          from circulation. This helps clean up the Solana ecosystem by
          eliminating scams and low-value{" "}
          <span className="text-gradient">NFTs</span>, making it safer for
          everyone.
        </p>
        <h1 className="text-4xl font-bold w-1/3 text-center">
          <span className="text-gradient">Step 2</span>
        </h1>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Step12), { ssr: false });
