import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from "next/link";
import dynamic from 'next/dynamic';


const Header = () => {
  return (
    <header className="flex flex-col gap-5 border-b border-gray-350" >
      <div className="py-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center">
              <Image
                width={36}
                height={36}
                src="/favicon.ico"
                className="w-8 md:w-9"
                alt="logo"
              />
              <p className="text-2xl font-bold ml-2">ATTESTME</p> 
          </div>
        </Link>
        <div className="flex flex-wrap justify-end">
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};

export default dynamic (() => Promise.resolve(Header), {ssr: false} )