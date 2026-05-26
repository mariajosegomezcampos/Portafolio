import React from 'react'
import { motion } from 'framer-motion'

// Variantes de animación para una entrada secuencial limpia
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

const heroItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 22 }
  }
}

export default function Hero(): React.JSX.Element {
  return (
    <motion.div
      className="relative overflow-hidden bg-slate-50/40 py-16 sm:py-20 rounded-none border border-slate-200/60"
      initial="hidden"
      animate="visible"
      variants={heroContainerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">

          {/* Badge sutil de estado - Sincronizado a Ámbar */}
          <motion.div variants={heroItemVariants} className="mb-8">
            <span className="inline-flex items-center rounded-none bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-700 ring-1 ring-inset ring-amber-700/20 animate-pulse font-mono">
              Disponible para proyectos de gran escala
            </span>
          </motion.div>

          {/* Título Principal de Impacto - Estilo Corporativo */}
          <motion.h1
            variants={heroItemVariants}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl uppercase leading-none"
          >
            Construyendo arquitecturas frontend <span className="text-amber-500 font-light">sólidas y escalables</span>
          </motion.h1>

          {/* Subtítulo Técnico */}
          <motion.p
            variants={heroItemVariants}
            className="mt-6 text-base leading-8 text-slate-600 font-medium max-w-xl mx-auto"
          >
            Software Engineer especializada en el desarrollo de aplicaciones web de alto rendimiento.
            Enfoque en Clean Architecture, Microfrontends y sistemas financieros altamente testeados.
          </motion.p>

          {/* Botones de Acción (Call to Action) */}
          <motion.div
            variants={heroItemVariants}
            className="mt-10 flex items-center justify-center gap-x-8"
          >
            {/* Botón Principal (Mismo estilo que el Descargar CV de tu Navbar) */}
            <a
              href="/projects"
              className="rounded-none bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-amber-600 transition-colors cursor-pointer"
            >
              Ver mis proyectos
            </a>

            {/* Botón Secundario Interactivo */}
            <a
              href="/contact"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-amber-500 transition-colors relative group py-1"
            >
              Hablemos <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
              {/* Micro-línea dorada decorativa en hover */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}