import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Governance from "@/components/governancePage";

function governance() {
  return (
    <main>
      <Head>
        <title>Voting Page</title>
      </Head>
      <div>
        <Governance />
      </div>
    </main>
  );
}

export default dynamic(() => Promise.resolve(governance), { ssr: false });
