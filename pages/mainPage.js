import React from "react";
import dynamic from "next/dynamic";
import NftContainer from "@/components/NftContainer";

function mainPage() {
  return (
    <main className={`min-h-screen items-center justify-between`}>
      <div className="relative justify-between place-items-center mt-10">
        <NftContainer />
      </div>
    </main>
  );
}

export default dynamic(() => Promise.resolve(mainPage), { ssr: false });
