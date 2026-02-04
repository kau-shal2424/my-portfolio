import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import SEO from './components/SEO'

import CommandPalette from './components/CommandPalette'
import CursorTrail from './components/CursorTrail'
import UniverseBackground from './components/UniverseBackground'

function App() {
  return (
    <HelmetProvider>
      <SEO />

      <CommandPalette />
      <CursorTrail />
      <UniverseBackground />

      <div className="bg-transparent min-h-screen text-white relative z-10 overflow-x-hidden max-w-[100vw]">
        <Navbar />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>

      {/* Toast Notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #38bdf8',
          },
        }}
      />
    </HelmetProvider>
  )
}

export default App

