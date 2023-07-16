import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./contents/About";
import Experience from "./contents/Experience";
import Graduation from "./contents/Graduation";
import Heading from "./contents/Heading";
import Project from "./contents/Project";
import Skills from "./contents/Skills";
import "./App.css";

function App() {
  return (
    <div>
      <div className="fixed top-3 left-[15%] lg:left-[95%] lg:right-6 2xl:left-[97%] 2xl:right-3 lg:top-[35%] z-50">
        <Navigation />
      </div>
      <Heading />
      <div className="space-y-32 sm:space-y-8 2xl:space-y-0">
        <About />
        <Skills />
      </div>
      <Graduation />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
