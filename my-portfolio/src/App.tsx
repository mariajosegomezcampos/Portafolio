import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {/* El Navbar se mantiene fijo en la parte superior */}
      <Navbar />
      
      {/* El contenedor principal crece para empujar el Footer abajo si hay poco contenido */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      {/* El Footer se mantiene fijo en la parte inferior */}
      <Footer />
    </div>
  )
}