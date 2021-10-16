import './hero.css'

function Hero() {
    return (
      <div className="hero-wrapper">
        <div className="hero">
            <h1>Welcome to Generative Pain</h1>
            <h4>10,000 unique and tweaked out Pain Fists, generated from tons of individualized traits, rooting from modern pop culture and current trends!</h4>
            <button>MINT NOW</button>
        </div>
        <div className="hero-img-wrapper">
          <img src="/hero.jpeg" alt=""></img>
        </div>
      </div>
    );
  }
  
  export default Hero;
  