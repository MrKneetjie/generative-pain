import './header.css'

function Header() {
    return (
      <header>
          <h1>Generative Pain</h1>
          <nav>
              <a href="#home" className="active">Home</a>
              <a href="#about">About</a>
              <a href="#rarity">Rarity</a>
              <a href="#roadmap">Roadmap</a>
              <a href="#team">Team</a>
              <a href="https://discord.gg/qQ2RKnFCKP" title="Join Discord" target="_blank">
                <div className="icon">
                  <img src="https://toppng.com/uploads/preview/discord-black-logo-11593869050tvdn0uaewo.png" alt=""></img>
                </div>
              </a>
              <a href="https://mobile.twitter.com/galacticempnft" title="Follow on Twitter" target="_blank">
                <div className="icon">
                  <img src="https://toppng.com/uploads/preview/twitter-logo-png-transparent-background-graphic-freeuse-twitter-logo-black-11562911265gfzrhbl86r.png" alt=""></img>
                </div>
              </a>
          </nav>
      </header>
    );
  }
  
  export default Header;
  