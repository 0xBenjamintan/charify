import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const Header = () => {
  const { publicKey } = useWallet();

  return (
    <header className="sticky top-0 z-50">
      <div className="py-4 flex items-center justify-between mx-12">
        <Link href="/">
          <div className="flex items-center">
            <Image
              width={36}
              height={36}
              src="/favicon.ico"
              className="w-8 md:w-9"
              alt="logo"
            />
            <p className="text-2xl font-bold ml-2 text-gradient z-10">
              CHARIFY
            </p>
          </div>
        </Link>
        {publicKey ? (
          <div className="flex">
            <Link href="/mainPage">
              <div className="items-center">
                <p className="text-xl font-bold ml-2 nav-text pr-2 z-10">
                  Main Page
                </p>
              </div>
            </Link>
            <Link href="/mainPage">
              <div className="items-center">
                <p className="text-xl font-bold ml-2 nav-text pl-2 z-10">
                  Governance
                </p>
              </div>
            </Link>
          </div>
        ) : null}

        <div className="flex flex-wrap justify-end">
          <WalletMultiButton />
        </div>
      </div>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
