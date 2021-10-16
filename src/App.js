import About from "./components/about/about";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Rarity from "./components/rarity/rarity";
import Roadmap from "./components/roadmap/roadmap";
import Team from "./components/team/team";
import Extra from "./components/extra/extra";

import "./App.css";

function App() {
  return (
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
  );
}

export default App;
