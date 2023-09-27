import { useEffect } from "react";
import { useRouter } from "next/router";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";
import LandingPageContents from "@/components/LandingPageContents";
import ProductDetails from "@/components/ProductDetails";
import Head from "next/head";
import { Inter } from "next/font/google";
import Fullpage, {
  FullPageSections,
  FullpageNavigation,
  FullpageSection,
} from "@ap.cx/react-fullpage";

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

  const SectionStyle = {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  };

  return (
    <>
      <Head>
        <title>Charify</title>
      </Head>
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection style={SectionStyle}>
            <LandingPageContents />
          </FullpageSection>
          <FullpageSection style={SectionStyle}>
            <ProductDetails />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
