import HeroSection from "./HeroSection";
import Avatar from './assets/Avatar.jpg';

function App() {
  return (
    <div>
      <HeroSection />
      <img src={Avatar} alt="Avatar" />
    </div>
  );
}

export default App;
