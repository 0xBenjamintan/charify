import React from "react";
import dynamic from "next/dynamic";

function NftContainer() {
  return <div>hi ser</div>;
}

export default dynamic(() => Promise.resolve(NftContainer), { ssr: false });
