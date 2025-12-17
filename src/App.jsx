import Footer from "./components/Footer.jsx";
import Landing from "./components/Landing.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Lenis from "lenis";
import Social from "./components/Social.jsx";
import Projects from "./components/Projects.jsx"

function App() {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div>
      <Navbar />
      <Landing />
      <AboutUs />
      <Projects />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
