import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Index = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
export default Index
