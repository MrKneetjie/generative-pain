import { useState } from "react";
import { ethers } from "ethers";

export default function (url) {
  const [provider, setProvider] = useState(ethers.getDefaultProvider(url));
  return provider;
}
