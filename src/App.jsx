import { BrowserRouter } from "react-router-dom"
import { Parallax } from "react-parallax"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Certification, StarsCanvas, Footer, FloatingMenu, Education } from './components'
import herobg from './assets/herobg.png'

const App = () => {
  return (
    <BrowserRouter>

      <div className="relative z-0 bg-primary">
        {/* Intro Section - Static */}
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1d1836] via-primary to-primary">
          <Navbar />
          <Hero />
        </div>

        {/* Core Content - Parallax Scrolling Background */}
        <Parallax bgImage={herobg} strength={400} blur={{ min: -5, max: 5 }}>
          <div className="bg-primary/90"> {/* Subtle overlay to ensure text readability */}
            <About />
            <Experience />
            <Tech />
            <Works />
            <Certification />
            <Education />
            <Feedbacks />
          </div>
        </Parallax>

        {/* Footer Section - Static */}
        <div className="relative z-0 bg-[#050816]">
          <Contact />
        </div>

        <div>
          <Footer />
        </div>

        {/* Global Floating Action Buttons */}
        <FloatingMenu />
      </div>

    </BrowserRouter>
  )
}

export default App
