import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import { Moon, Sun } from 'lucide-react';

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
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  const currentPath = window.location.pathname
  const email = "mariajosegomezcampo@gmail.com"
  const subject = encodeURIComponent("👋 Hola María José, me interesa tu perfil técnico")
  const mailtoUrl = `mailto:${email}?subject=${subject}`

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">

          <a href="/" className="text-lg font-bold tracking-wider text-slate-900 dark:text-white uppercase">
            María José <span className="text-amber-500 font-light">Gómez</span>
          </a>

          <div className="hidden sm:flex h-full items-center justify-center flex-1 max-w-2xl mx-auto">
            <div className="flex h-full w-full justify-around border-x border-slate-100 dark:border-slate-800" onMouseLeave={() => setHoveredPath(null)}>
              {NAVIGATION_LINKS.map((link) => {
                const isActive = currentPath === link.href
                return (
                  <a key={link.href} href={link.href} onMouseEnter={() => setHoveredPath(link.href)}
                    className={`inline-flex items-center justify-center h-full px-8 text-sm font-bold transition-colors relative flex-1 ${isActive ? 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
                    <span className="relative z-10">{t(link.labelKey) || link.defaultLabel}</span>
                    {hoveredPath === link.href && (<motion.div className="absolute inset-0 bg-slate-50/70 dark:bg-slate-800/70 z-00" layoutId="hoverBackground" />)}
                  </a>
                )
              })}
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 transition-all duration-300 hover:scale-105"
              aria-label="Cambiar modo de tema"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <a href={mailtoUrl} className="px-4 py-2 text-xs font-bold uppercase border border-amber-500/40 text-slate-900 dark:text-white hover:bg-amber-500 transition-all">
              {t('nav.hireMe') || 'Contrátame'}
            </a>
            <a href="/ES_Maria_Gomez_Software_Engineer.pdf" download className="px-5 py-2 text-xs font-bold uppercase bg-amber-500 text-white hover:bg-amber-600 transition-colors">
              {t('nav.downloadCV') || 'Descargar CV'}
            </a>
          </div>

          <button onClick={() => setIsOpen(true)} className="sm:hidden text-slate-900 dark:text-white font-bold uppercase text-xs">☰ Menú</button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black z-40" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-slate-900 z-50 p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-12">
                  <button onClick={() => setIsOpen(false)} className="dark:text-white font-bold">✕ Cerrar</button>
                  <button onClick={toggleTheme} className="dark:text-white font-bold">{isDark ? '☀️ Claro' : '🌙 Oscuro'}</button>
                </div>

                <ul className="space-y-6">
                  {NAVIGATION_LINKS.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-bold text-slate-800 dark:text-white">{t(link.labelKey)}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <a href={mailtoUrl} onClick={() => setIsOpen(false)} className="w-full text-center px-4 py-4 border border-amber-500 text-amber-500 font-bold uppercase text-sm">
                  {t('nav.hireMe') || 'Contrátame'}
                </a>
                <a href="/ES_Maria_Gomez_Software_Engineer.pdf" download onClick={() => setIsOpen(false)} className="w-full text-center px-4 py-4 bg-amber-500 text-white font-bold uppercase text-sm">
                  {t('nav.downloadCV') || 'Descargar CV'}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}