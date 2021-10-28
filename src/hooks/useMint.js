import { ethers, utils } from "ethers";

export default function ({ library, contract, account }) {
  async function mint(count, price) {
    let signer = library.getSigner(account);
    let signedContract = contract.connect(signer);

    let ethValue = (price * count).toFixed(3);
    let value = utils.parseEther(ethValue.toString());

    let estimatedGas = await signedContract.estimateGas.mint(count, {
      value: value,
    });

    let gasLimit = estimatedGas
      .mul(ethers.BigNumber.from(10000 + 2000))
      .div(ethers.BigNumber.from(10000));

    let gasPrice = await library.getGasPrice();
    let tx = await signedContract.mint(count, {
      gasLimit: gasLimit,
      gasPrice: gasPrice,
      value: value,
    });

    if (!tx) {
      return;
    }

    return tx.wait();
  }

  return mint;
  // const [provider, setProvider] = useState(null);

  // useEffect(() => {
  //   setProvider(ethers.getDefaultProvider(url));
  // });

  // return provider;
}
