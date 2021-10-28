import { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function ({ address, abi, provider }) {
  const [signedContract, setSignedContract] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (!address || !abi || !provider) {
      return;
    }

    setContract(new ethers.Contract(address, abi, provider));
  }, [address, abi, provider]);

  return contract;
}
