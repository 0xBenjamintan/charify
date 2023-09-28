import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Model } from "./Scene";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const LandingPageContents = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-6xl place-content-center">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 h-[500px] pr-4 solanaToken">
          {/* Left Column (Image) */}
          <Canvas>
            <PerspectiveCamera position={[0, 0, 5]} makeDefault={true} />
            <Suspense fallback={null}>
              <ambientLight intensity={10} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.5}
                penumbra={1}
                intensity={10}
              />
              <pointLight position={[-10, -10, -10]} />
              <OrbitControls target={[0, 0, 0]} enableZoom={false} />
              <Model position={[0, 0, 0]} scale={[0.035, 0.035, 0.035]} />
            </Suspense>
          </Canvas>
        </div>
        <div className="md:w-3/5 mt-4 md:mt-0 flex flex-col justify-center">
          {/* Right Column (Title) */}
          <h1 className="text-5xl font-bold">
            Welcome to
            <span className="text-gradient">
              <Typewriter
                words={[" CHARIFY", " Donation Transparency"]}
                loop={false}
                cursor
                cursorStyle="|"
                cursorColor="white"
                typeSpeed={60}
                deleteSpeed={90}
                delaySpeed={1250}
              />
            </span>
          </h1>
          <p className="text-3xl mt-8 text-justify">
            Burning <span className="text-gradient">NFTs</span> for a Purpose,
            Fueling Charitable Acts Worldwide
          </p>
          <p className="text-2xl mt-8 text-justify">
            Establishing a groundbreaking protocol enabling users to
            effortlessly support public goods using their untapped resources.
          </p>
          <p className="text-xl mt-8 text-gradient font-bold">
            <WalletMultiButton />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPageContents;
