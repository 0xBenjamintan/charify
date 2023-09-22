import '@/styles/globals.css'
import React from 'react';
import { WalletConnectProvider } from '@/components/WalletConnectProvider';
import '@solana/wallet-adapter-react-ui/styles.css'
import RootLayout from '@/components/Layout';


export default function App({ Component, pageProps }) {
  return ( 

    <WalletConnectProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </WalletConnectProvider>
  )
}
