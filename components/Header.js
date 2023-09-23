import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import dynamic from "next/dynamic";

const Header = () => {
  return (
    <header className="fixed w-full id='site-header'">
      <div className="py-4 px-4 flex justify-between">
        <Link href="/">
          <div className="flex items-center">
            <Image
              width={36}
              height={36}
              src="/favicon.ico"
              className="w-8 md:w-9"
              alt="logo"
            />
            <p className="text-2xl font-bold ml-2 text-gradient">CHARIFY</p>
          </div>
        </Link>
        <div className="flex flex-wrap justify-end">
          <WalletMultiButton className="btn-gradient" />
        </div>
      </div>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
