import { useEffect } from "react";
import { useRouter } from "next/router";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";
import LandingPageContents from "@/components/LandingPageContents";
import ProductDetails from "@/components/ProductDetails";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const { publicKey } = useWallet();
  const router = useRouter();

  useEffect(() => {
    // Check if publicKey is present and redirect accordingly
    if (publicKey) {
      router.push("/mainPage"); // Replace with the actual path to mainpage.js
    }
  }, [publicKey, router]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Head>
        <title>Charify</title>
      </Head>
      <div className="relative flex flex-col justify-between place-items-center mt-10">
        <LandingPageContents />
        <ProductDetails />
      </div>
    </main>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
