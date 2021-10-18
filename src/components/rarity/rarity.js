import RarityItem from '../rarity-item/rarity-item'
import './rarity.css'

function Rarity() {
    return (
      <div id="rarity" className="rarity bg-light">
        <h1>Rarity</h1>
        <div className="rarity-wrapper">
          <RarityItem img="/TEASER 1.jpg" title="Hand drawn" text="All pain nfts are hand drawn"/>
          <RarityItem img="/TEASER 2.jpg" title="One of one" text="Find the rare 1/1 unique fists"/>
          <RarityItem img="/TEASER 3.jpg" title="Traits" text="Multiple backgrounds, holes, fists, wrists and objects"/>
          <RarityItem img="/TEASER 4.jpg" title="Floor price" text="With a high floor price of 0.03ETH"/>
        </div>
      </div>
    );
  }
  
  export default Rarity;
  