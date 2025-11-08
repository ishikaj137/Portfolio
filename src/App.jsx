import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MoonLoader from './components/MoonLoader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <MoonLoader key="loader" onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="min-h-screen"
          style={{ backgroundColor: '#0B0E1D' }}
        >
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Hobbies />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default App
