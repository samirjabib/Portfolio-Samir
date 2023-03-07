//Import components
import { Contact, Hero, Hireme, Projects, Skils, Service } from "./components";

//Import components UI
import { Footer, Navbar } from "./ui";

//Import animation package
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Skils />
      <Projects />
      <Hireme />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
