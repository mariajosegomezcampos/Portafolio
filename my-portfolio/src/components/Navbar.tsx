import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface NavLink {
  labelKey: string
  defaultLabel: string
  href: string
}

const NAVIGATION_LINKS: NavLink[] = [
  { labelKey: 'nav.home', defaultLabel: 'Inicio', href: '/' },
  { labelKey: 'nav.projects', defaultLabel: 'Proyectos', href: '/projects' },
  { labelKey: 'nav.about', defaultLabel: 'Sobre mí', href: '/about' },
  { labelKey: 'nav.contact', defaultLabel: 'Contacto', href: '/contact' }
]

export default function Navbar(): React.JSX.Element {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const currentPath = window.location.pathname
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)

  const email = "mariajosegomezcampo@gmail.com" 
  const subject = encodeURIComponent("👋 Hola María José, me interesa tu perfil técnico")
  const mailtoUrl = `mailto:${email}?subject=${subject}`

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          
          {/* Identidad */}
          <div className="flex-shrink-0">
            <a href="/" className="text-lg font-bold tracking-wider text-slate-900 uppercase">
              María José <span className="text-amber-500 font-light">Gómez</span>
            </a>
          </div>

          {/* Menú Desktop */}
          <div className="hidden sm:flex h-full items-center justify-center flex-1 max-w-2xl mx-auto">
            <div className="flex h-full w-full justify-around border-x border-slate-100/60" onMouseLeave={() => setHoveredPath(null)}>
              {NAVIGATION_LINKS.map((link) => {
                const isActive = currentPath === link.href
                const isTargeted = hoveredPath === link.href || (hoveredPath === null && isActive)
                return (
                  <a key={link.href} href={link.href} onMouseEnter={() => setHoveredPath(link.href)} 
                     className={`inline-flex items-center justify-center h-full px-8 text-sm font-bold tracking-tight transition-colors relative flex-1 ${isActive ? 'bg-slate-50 text-slate-900' : 'text-slate-700 hover:text-slate-900'}`}>
                    <span className="relative z-10">{t(link.labelKey) || link.defaultLabel}</span>
                    {hoveredPath === link.href && (<motion.div className="absolute inset-0 bg-slate-50/70 -z-0" layoutId="hoverBackground" />)}
                    {isTargeted && (<motion.div className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber-500 z-20" layoutId="activeBorder" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />)}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Botón Hamburger Móvil */}
          <button onClick={() => setIsOpen(true)} className="sm:hidden text-slate-900 font-bold uppercase text-xs">
            Menú
          </button>

          {/* Botones Derecha */}
          <div className="hidden sm:flex items-center gap-4">
             <a href={mailtoUrl} className="inline-flex items-center gap-2 rounded-none border border-amber-500/40 bg-amber-50/50 hover:bg-amber-500 px-4 py-2.5 text-xs font-bold uppercase text-slate-900 hover:text-white transition-all">
                {t('nav.hireMe') || 'Contrátame'}
             </a>
             <a href="/ES_Maria_Gomez_Software_Engineer.pdf" download className="inline-flex items-center rounded-none bg-amber-500 hover:bg-amber-600 px-5 py-2.5 text-xs font-bold uppercase text-white transition-colors">
                {t('nav.downloadCV') || 'Descargar CV'}
             </a>
          </div>
        </div>
      </div>

      {/* Menú Lateral Móvil (Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black z-40" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25 }} className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 p-8">
              <div className="flex justify-between items-center mb-12">
                <button onClick={() => setIsOpen(false)} className="text-sm font-bold">← Volver</button>
                <button onClick={() => setIsOpen(false)} className="text-sm font-bold">✕ Cerrar</button>
              </div>
            
              <ul className="mt-10 space-y-6">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.href} className="group cursor-pointer flex items-center gap-4">
                    <span className="w-[3px] h-8 bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <a href={link.href} className="text-lg font-bold text-slate-800">{t(link.labelKey)}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}