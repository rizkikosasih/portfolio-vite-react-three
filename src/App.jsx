import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, About, Skills, Contact } from "./pages/index"
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    const handlePropagation = (e) => e.stopPropagation()
    window.addEventListener('scroll', handlePropagation)
    window.addEventListener('pointermove', handlePropagation)
    return () => {
      window.removeEventListener('scroll', handlePropagation)
      window.removeEventListener('pointermove', handlePropagation)
    }
  }, [])

  return (
    <main className="bg-slate-300/20">
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
