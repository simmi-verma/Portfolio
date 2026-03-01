import { BrowserRouter } from "react-router-dom"
import { Parallax } from "react-parallax"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Certification, Footer, FloatingMenu, Education } from './components'
import herobg from './assets/herobg.png'

const App = () => {
  return (
    <BrowserRouter>

      <div className="relative z-0 light-mesh-gradient min-h-screen overflow-hidden">
        {/* Intro Section */}
        <div className="relative w-full z-0">
          <Navbar />
          <Hero />
        </div>

        {/* Core Content - Removed dark parallax to support global light theme */}
        <div className="relative z-0">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Certification />
          <Education />
          <Feedbacks />
        </div>

        {/* Footer Section */}
        <div className="relative z-0">
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
