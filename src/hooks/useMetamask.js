import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useEffect } from "react";

export default function (supportedChainIDs) {
  const injected = new InjectedConnector({
    supportedChainIds: supportedChainIDs,
  });
  const web3React = useWeb3React();

  async function connect() {
    return web3React.activate(injected);
  }

  return { ...web3React, connect };
}
