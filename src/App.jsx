import {Hero} from "./sections/Hero";
import {Navbar} from "./layout/Navbar";
import {Experience} from "./sections/Experience";
import {Projects} from "./sections/Projects";
import {Contact} from "./sections/Contact";
import {Testimonials} from "./sections/Testimonials";
import {About} from "./sections/About";



function App() {


  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          
          <Hero />
          <Experience />
          <Projects />
          <Contact />
          <Testimonials />
          <About />

        </main>
      </div>
    </>
  )
}

export default App
