import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./contents/About";
import Experience from "./contents/Experience";
import Graduation from "./contents/Graduation";
import Heading from "./contents/Heading";
import Project from "./contents/Project";
import Skills from "./contents/Skills";
import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  },[])

  return (
    <div>
      {
        loading
          ?
          <div><Loading /></div>
          :
          <div className="overflow-x-hidden">
            <div className="fixed top-3 left-[15%] lg:left-[95%] lg:right-6 2xl:left-[97%] 2xl:right-3 lg:top-[35%] z-50">
              <Navigation />
            </div>
            <div data-section id="div_heading">
              <Heading />
            </div>
            <div className="space-y-32 sm:space-y-8 2xl:space-y-0">
              <div data-section id="div_about">
                <About />
              </div>
              <div className="!mt-[10%]" data-section id="div_skills">
                <Skills />
              </div>
              <div data-section id="div_graduation">
                <Graduation />
              </div>
              <div data-section id="div_experience">
                <Experience />
              </div>
              <div data-section id="div_project">
                <Project />
              </div>
            </div>
            <Footer />
          </div>
      }
    </div>
  );
}

export default App;
