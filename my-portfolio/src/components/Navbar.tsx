import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next' // 👈 Importación correcta para multi-idioma

interface NavLink {
  labelKey: string // Usamos la llave de i18n
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
  const currentPath: string = window.location.pathname

  // Estado para saber sobre qué pestaña está el mouse flotando en cada momento
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)

  // 📬 Configuración del truco mailto personalizado
  const email = "mariajosegomezcampo@gmail.com" 
  const subject = encodeURIComponent("👋 Hola María José, me interesa tu perfil técnico")
  const mailtoUrl = `mailto:${email}?subject=${subject}`

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">

          {/* Lado Izquierdo: Identidad (Exactamente igual) */}
          <div className="flex-shrink-0">
            <a href="/" className="text-lg font-bold tracking-wider text-slate-900 uppercase">
              María José <span className="text-amber-500 font-light">Gómez</span>
            </a>
          </div>

          {/* Centro: Menú interactivo con seguimiento de cursor (Tu animación favorita) */}
          <div className="hidden sm:flex h-full items-center justify-center flex-1 max-w-2xl mx-auto">
            <div
              className="flex h-full w-full justify-around border-x border-slate-100/60"
              onMouseLeave={() => setHoveredPath(null)}
            >
              {NAVIGATION_LINKS.map((link) => {
                const isActive = currentPath === link.href
                const isTargeted = hoveredPath === link.href || (hoveredPath === null && isActive)

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredPath(link.href)}
                    className={`inline-flex items-center justify-center h-full px-8 text-sm font-bold tracking-tight transition-colors relative flex-1 text-center ${isActive
                      ? 'bg-slate-50 text-slate-900'
                      : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    {/* Renderizado dinámico con soporte i18n */}
                    <span className="relative z-10">{t(link.labelKey) || link.defaultLabel}</span>

                    {/* Fondo gris tenue reactivo al pasar el mouse */}
                    {hoveredPath === link.href && (
                      <motion.div
                        className="absolute inset-0 bg-slate-50/70 -z-0"
                        layoutId="hoverBackground"
                        transition={{ duration: 0.15 }}
                      />
                    )}

                    {/* ANIMACIÓN DE LA BARRA: Deslizamiento magnético */}
                    {isTargeted && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber-500 z-20"
                        layoutId="activeBorder"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                  </a>
                )
              })}
            </div>
          </div>

       {/* Lado Derecho: Contáctame rápido + Tu descarga de CV original */}
<div className="hidden sm:flex items-center gap-4">
  
  {/* El botón Contrátame: Ahora con color mostaza sutil, bordes rectos y un icono interactivo */}
  <a
    href={mailtoUrl}
    className="inline-flex items-center gap-2 rounded-none border border-amber-500/40 bg-amber-50/50 hover:bg-amber-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-white transition-all duration-300 shadow-2xs cursor-pointer text-center group"
  >
    {/* Icono SVG: Un sobre minimalista que cambia de color al pasar el mouse (gracias a 'group-hover') */}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors duration-300"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>

    <span>{t('nav.hireMe') || 'Contrátame'}</span>
  </a>

  {/* Tu botón original de descarga de CV (Se mantiene idéntico y firme) */}
  <a
    href="/ES_Maria_Gomez_Software_Engineer.pdf"
    download="ES_Maria_Gomez_Software_Engineer.pdf"
    className="inline-flex items-center rounded-none bg-amber-500 hover:bg-amber-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-colors cursor-pointer text-center"
  >
    {t('nav.downloadCV') || 'Descargar CV'}
  </a>
</div>

        </div>
      </div>
    </nav>
  )
}