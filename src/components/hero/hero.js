import "./hero.css";
import abi from "../../abi/abi.json";
import useProvider from "../../hooks/useProvider";
import useMetamask from "../../hooks/useMetamask";
import useContract from "../../hooks/useContract";
import useCounter from "../../hooks/useCounter";
import useMint from "../../hooks/useMint";

import toast, { Toaster } from "react-hot-toast";

function Hero() {
  const requiredChainID = 4;
  const price = 0.035;

  const provider = useProvider();
  const { account, active, library, chainId, connect } = useMetamask([
    requiredChainID,
  ]);
  const contract = useContract({
    address: "0x0AC80C67574bA4d0b72E0aCc94c39f8DBAF3a02d",
    abi: abi,
    provider: provider,
  });
  const mint = useMint({ library, contract, account });
  const counter = useCounter({ min: 1, max: 20 });

  const onConnectClick = async () => {
    if (!active) {
      await connect();
    }
  };

  const onMintNowClick = async () => {
    if (chainId != requiredChainID) {
      return;
    }

    mint(counter.current, price)
      .then(() => {
        toast.success("Successfully minted!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("An error occurred. You may be out of ETH");
      });
  };

  const onMintCountChange = (event) => {
    let newCount = Number(event.target.value);
    counter.set(newCount);
  };

  return (
    <div id="home" className="hero-wrapper">
      <Toaster />
      <div className="hero">
        <h1>
          Welcome to<br></br>
          <span id="genpain">Generative Pain</span>
        </h1>
        <h4>
          6942 unique and tweaked out Pain Fists, generated from tons of
          individualized traits, inspired by modern pop culture and current
          trends!
        </h4>
        <div className="flex-col">
          <button className="big-button" onClick={onConnectClick}>
            CONNECT
          </button>
          <div className="flex-row">
            <button className="count-button" onClick={counter.decrement}>
              -
            </button>
            <input
              className="count-input"
              value={counter.current}
              onChange={onMintCountChange}
            />
            <button className="count-button" onClick={counter.increment}>
              +
            </button>
          </div>
          <button className="big-button" onClick={onMintNowClick}>
            MINT NOW
          </button>
        </div>
      </div>
      <div className="hero-img-wrapper">
        <img src="/animation.gif" alt=""></img>
      </div>
    </div>
  );
}

export default Hero;
