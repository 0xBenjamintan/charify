import React from "react";
import dynamic from "next/dynamic";

const HowItWork = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-6xl place-content-center">
      <div className="flex flex-col md:flex-row">
        <div className="mt-4 md:mt-0 flex flex-col justify-center">
          {/* Right Column (Title) */}
          <h1 className="text-4xl font-bold">
            <span className="text-gradient">How It Work?</span>
          </h1>
          <p className="text-xl mt-8 text-justify">
            At <spam className="text-gradient">Charify</spam>, we've made it
            incredibly simple for you to make a positive impact on the crypto
            community and support charitable causes. Our platform allows you to
            burn unwanted or low-value{" "}
            <span className="text-gradient">NFTs</span>, and in return, you'll
            receive rewards and contribute to a better ecosystem.
          </p>
          <p className="text-lg mt-8 text-gradient font-bold">
            Lets check it out
            <span>
              <i class="ml-8 arrow down "></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(HowItWork), { ssr: false });
