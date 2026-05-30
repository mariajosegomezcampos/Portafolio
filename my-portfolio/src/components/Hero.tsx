import React from 'react'
import { motion } from 'framer-motion'

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
      className="relative overflow-hidden bg-slate-50/40 dark:bg-slate-900/40 py-16 sm:py-20 rounded-none border border-slate-200/60 dark:border-slate-800 transition-colors duration-300"
      initial="hidden"
      animate="visible"
      variants={heroContainerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">

          {/* Badge sutil */}
          <motion.div variants={heroItemVariants} className="mb-8">
            <span className="inline-flex items-center rounded-none bg-amber-50 dark:bg-amber-950/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 ring-1 ring-inset ring-amber-700/20 dark:ring-amber-400/20 animate-pulse font-mono">
              Disponible para proyectos de gran escala
            </span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            variants={heroItemVariants}
            className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl uppercase leading-none"
          >
            Construyendo arquitecturas frontend <span className="text-amber-500 font-light">sólidas y escalables</span>
          </motion.h1>

          {/* Subtítulo Técnico */}
          <motion.p
            variants={heroItemVariants}
            className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400 font-medium max-w-xl mx-auto"
          >
            Software Engineer especializada en el desarrollo de aplicaciones web de alto rendimiento.
            Enfoque en Clean Architecture, Microfrontends y sistemas financieros altamente testeados.
          </motion.p>

          {/* Botones de Acción */}
          <motion.div
            variants={heroItemVariants}
            className="mt-10 flex items-center justify-center gap-x-8"
          >
            <a
              href="/projects"
              className="rounded-none bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-amber-600 transition-colors cursor-pointer"
            >
              Ver mis proyectos
            </a>

            <a
              href="/contact"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors relative group py-1"
            >
              Hablemos <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}