import Navbar from "./components/Navbar";
import "./App.css";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Service from "./components/Services";
import Plans from "./components/Plans";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About/>
      <Service/>
    <Plans/>
    </>
  );
}

export default App;
