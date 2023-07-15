import Footer from './components/Footer'
import Navigation from './components/Navigation'
import About from './contents/About'
import Experience from './contents/Experience'
import Graduation from './contents/Graduation'
import Heading from './contents/Heading'
import Project from './contents/Project'
import Skills from './contents/Skills'

function App() {

  return (
    <>
      <div className='fixed right-0 top-[50%]'>
        <Navigation />
      </div>
      <Heading />
      <About />
      <Skills />
      <Experience />
      <Graduation />
      <Project />
      <Footer />
    </>
  )
}

export default App
