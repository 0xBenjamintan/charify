import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import LandingPageContents from '@/components/LandingPageContents';

const inter = Inter({ subsets: ['latin'] })

function Home() {

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>

      <div className="relative flex flex-col justify-between place-items-center p-12">
        <LandingPageContents />
      </div>
      
    </main>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false} )
