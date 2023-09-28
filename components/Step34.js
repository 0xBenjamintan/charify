import React from "react";
import dynamic from "next/dynamic";

const Step34 = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-6xl place-content-center">
      <div className="flex justify-center items-center">
        {/* Right Column (Title) */}
        <h1 className="text-4xl font-bold w-1/3 justify-center text-center">
          <span className="text-gradient">Step 3</span>
        </h1>
        <p className="text-xl text-justify w-2/3">
          You earn 1 $CRY token for each token address you burn. These tokens
          hold real value and can be used for governance, giving you a say in
          charitable donations. You also receive 0.002 $SOL sent to CharifyDAO's
          wallet, supporting our mission.
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="flex justify-center items-center">
        {/* Right Column (Title) */}
        <p className="text-xl text-justify w-2/3">
          As a $CRY token holder, you can participate in our governance system.
          Vote for your preferred charity to ensure deserving causes receive
          donations. Your voice matters, and together, we can make a big impact.
        </p>
        <h1 className="text-4xl font-bold w-1/3 text-center">
          <span className="text-gradient">Step 4</span>
        </h1>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Step34), { ssr: false });
