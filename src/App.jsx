import { useEffect } from "react";
import Footer from "./components/Footer.jsx";
import Landing from "./components/Landing.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Lenis from "lenis";
// import Social from "./components/Social.jsx";
import Projects from "./components/Projects.jsx"
import Blogs from "./components/Blogs.jsx"
import Faq from "./components/Faq.jsx";
import Causes from "./components/Causes.jsx";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Landing />
      <AboutUs />
      <Causes/>
      <Blogs />
      <Projects />
      <Faq/>
      {/* <Social /> */}
      <Footer />
    </div>
  );
}

export default App;
