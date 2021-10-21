import './hero.css'

function Hero() {
    return (
      <div id="home" className="hero-wrapper">
        <div className="hero">
            <h1>Welcome to<br></br><span id="genpain">Generative Pain</span></h1>
            <h4>6942 unique and tweaked out Pain Fists, generated from tons of individualized traits, inspired by modern pop culture and current trends!</h4>
            <button>MINT NOW</button>
        </div>
        <div className="hero-img-wrapper">
          <img src="/animation.gif" alt=""></img>
        </div>
      </div>
    );
  }
  
  export default Hero;
  