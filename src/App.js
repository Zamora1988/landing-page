import "./App.css";
import realState01 from "./assets/realstate-01.jpg";
import realState02 from "./assets/realstate-02.jpg";
import realState03 from "./assets/realstate-03.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Offers" },
    { url: "#", title: "Search Broker" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={realState01} />
      <Slider
        imageSrc={realState02}
        title={"Because Interior Design Matters."}
        subtitle={
          "Our platform offers a wide variety of unique pre-design interior design!"
        }
      />
      <Slider
        imageSrc={realState03}
        title={"Memories for a lifetime."}
        subtitle={"Your dream neighborhood maybe is near than you think!"}
        flipped={true}
      />
      <Footer />
    </div>
  );
}

export default App;
