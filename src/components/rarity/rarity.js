import RarityItem from '../rarity-item/rarity-item'
import './rarity.css'

function Rarity() {
    return (
      <div id="rarity" className="rarity bg-light">
        <h1>Rarity</h1>
        <div className="rarity-wrapper">
          <RarityItem img="https://miro.medium.com/max/1200/1*5AyYzOlGlv501PlJlIdZZQ.jpeg" title="Hand drawn" text="All pain nfts are hand drawn"/>
          <RarityItem img="https://miro.medium.com/max/1200/1*5AyYzOlGlv501PlJlIdZZQ.jpeg" title="Hand drawn" text="All pain nfts are hand drawn"/>
          <RarityItem img="https://miro.medium.com/max/1200/1*5AyYzOlGlv501PlJlIdZZQ.jpeg" title="Hand drawn" text="All pain nfts are hand drawn"/>
          <RarityItem img="https://miro.medium.com/max/1200/1*5AyYzOlGlv501PlJlIdZZQ.jpeg" title="Hand drawn" text="All pain nfts are hand drawn"/>
        </div>
      </div>
    );
  }
  
  export default Rarity;
  