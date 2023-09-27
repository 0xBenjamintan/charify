import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { clusterApiUrl } from "@solana/web3.js"; import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig, } from "@nfteyez/sol-rayz";
import Head from 'next/head'
import Modal from "@/components/Modal";

//check solana on window. This is useful to fetch address of your wallet.
const getProvider = () => {
  if ("solana" in window) {
    const provider = window.solana;
    if (provider.isPhantom) {
      return provider;
    }
  }
};

//Function to get all NFT information.
const getAllNftData = async () => {
  const connect = createConnectionConfig(clusterApiUrl("devnet"));
  const provider = getProvider();
  let ownerToken = provider.publicKey;
  const result = isValidSolanaAddress(ownerToken);
  console.log("result", result);
  const nfts = await getParsedNftAccountsByOwner({
    publicAddress: ownerToken,
    connection: connect,
    serialization: true,
  });
  return nfts;
};

//Function to get all nft data
const getNftTokenData = async () => {
  try {
    let nftData = await getAllNftData();
    var data = Object.keys(nftData).map((key) => nftData[key]); let arr = [];
    let n = data.length;
    for (let i = 0; i < n; i++) {
      console.log(data[i].data.uri);
      let val = await axios.get(data[i].data.uri);
      arr.push(val);
    }
    return arr;
  } catch (error) {
    console.log(error);
  }
};

const NftContainer = (props) => {
  const [nftData, setNftData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    async function data() {
      let res = await getNftTokenData();
      setNftData(res);
      setLoading(true);
    }
    data();
  }, []);
  return (
    <>
      <Head>
        <title>Main Page</title>
      </Head>
      <section className="nft">
        <div className="">
          <div className="text-center">
            <div className="">
              <h1 className="text-xl mb-4 font-bold">Welcome to Charify</h1>
              <h4 className="mb-6">Please Select the NFT that Wished to Burn</h4>
            </div>
          </div>
          <div className="nftContainer">
            {loading ? (
              <>
                {nftData &&
                  nftData.length > 0 &&
                  nftData.map((val, ind) => {
                    return (
                      <div className="nftCard" onClick={openModal} key={ind}>
                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                          <h2>Modal Content</h2>
                          <p>Testing</p>
                        </Modal>
                        <div className="cart text-left">
                          <div className="">
                            <img className="nftImg" src={val.data.image} alt="loading..." />
                            <div className="p-4">
                              <p className=" font-bold text-gradient">{val.data.name}</p>
                              <h6 className=" text-left">{val.data.description}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </>
            ) : (
              <>
                {/* <p className="text-center">loading...</p> */}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(NftContainer), { ssr: false });
