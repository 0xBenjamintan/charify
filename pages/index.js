import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import LandingPageContents from "@/components/LandingPageContents";
import ProductDetails from "@/components/ProductDetails";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

function Home() {
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
