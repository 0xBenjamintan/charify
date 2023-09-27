import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Model } from "./Scene";
import { Typewriter, useTypewriter } from "react-simple-typewriter";

const LandingPageContents = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-6xl mt-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 h-[500px] pr-4 z-30">
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
        <div className="md:w-1/2 mt-4 md:mt-0 flex flex-col justify-center">
          {/* Right Column (Title) */}
          <h1 className="text-4xl font-bold">
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
          <p className="text-xl mt-8">
            Charify: Burning NFTs for a Purpose, Fueling Charitable Acts
            Worldwide
          </p>
          <p className="text-lg mt-8 ">
            Establishing a groundbreaking protocol enabling users to
            effortlessly support public goods using their untapped resources.
          </p>
          <p className="text-lg mt-8 text-gradient font-bold">
            Connect your wallet and try it out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPageContents;
