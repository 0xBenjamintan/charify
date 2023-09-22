import Header from './Header';
import dynamic from 'next/dynamic';

const RootLayout = ({ children }) => {
  return (
      
        <div className="flex flex-col min-h-screen mx-auto max-w-7xl px-4 pt-8 pb-16">
          <Header />
          <div className="flex flex-col min-h-screen mx-auto max-w-5xl px-4">
            <main className="my-0">{children}</main>
          </div>
        </div>

    );
  };

  export default dynamic (() => Promise.resolve(RootLayout), {ssr: false} )