import React from "react";
import dynamic from "next/dynamic";
import NftContainer from "@/components/NftContainer";

function mainPage() {
  return (
    <div>
      <main
        className={`flex min-h-screen flex-col items-center justify-between`}
      >
        <div className="relative flex flex-col justify-between place-items-center mt-10">
          <NftContainer />
        </div>
      </main>
    </div>
  );
}

export default dynamic(() => Promise.resolve(mainPage), { ssr: false });
