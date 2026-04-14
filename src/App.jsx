import { useState, useEffect } from 'react'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Skills      from './components/Skills'
import Projects    from './components/Projects'
import Contact     from './components/Contact'
import Footer      from './components/Footer'
import AllProjects from './pages/AllProjects'

export default function App() {
  const [page, setPage] = useState('home') // 'home' | 'projects'

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  if (page === 'projects') {
    return <AllProjects onBack={() => setPage('home')} />
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects onViewAll={() => setPage('projects')} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
