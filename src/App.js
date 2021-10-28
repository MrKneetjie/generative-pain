import About from "./components/about/about";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Rarity from "./components/rarity/rarity";
import Roadmap from "./components/roadmap/roadmap";
import Team from "./components/team/team";
import Extra from "./components/extra/extra";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import "./App.css";

function App() {
  const getLibrary = (provider, connector) => {
    return new Web3Provider(provider);
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div>
        <Header />
        <div className="top-wrapper">
          <Hero />
        </div>
        <About />
        <Rarity />
        <Roadmap />
        <Team />
        <Extra />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
