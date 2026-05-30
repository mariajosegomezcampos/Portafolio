import React from 'react'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import { PRINCIPLES_SUMMARY } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 18 } }
};

export default function Home(): React.JSX.Element {
  return (
    <motion.div 
      className="space-y-12 pb-20 min-h-screen flex flex-col mx-auto max-w-7xl px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Hero />
      </motion.div>

      <motion.section className="w-full" aria-labelledby="features-title" variants={itemVariants}>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2 
            id="features-title" 
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Ingeniería de Software Orientada a la <span className="text-amber-500 font-light">Excelencia</span>
          </motion.h2>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400 font-medium">
            Más de 6 años impulsando la madurez técnica en plataformas bancarias y de comercio electrónico masivo.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {PRINCIPLES_SUMMARY.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-start bg-slate-50/50 dark:bg-slate-800/50 p-8 rounded-none border border-slate-200/60 dark:border-slate-700 transition-colors duration-300 relative overflow-hidden group"
                variants={itemVariants}
              >
                <span className="absolute top-0 left-0 w-0 h-full bg-amber-500 transition-all duration-300 group-hover:w-[3px]" />

                <dt className="text-sm font-bold tracking-wide uppercase leading-7 text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <div className="h-2 w-2 bg-amber-500 transition-transform duration-300 group-hover:scale-125" />
                  {feature.title}
                </dt>
                <dd className="flex flex-auto flex-col text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="bg-slate-900 dark:bg-slate-800 text-white rounded-none p-10 md:p-14 text-center w-full shadow-xs relative overflow-hidden border border-slate-800 dark:border-slate-700"
        variants={itemVariants}
      >
        <div className="absolute -inset-40 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />

        <h3 className="text-xl font-bold uppercase tracking-wide mb-4 relative z-10">
          ¿Quieres ver la arquitectura en acción?
        </h3>
        <p className="text-slate-400 dark:text-slate-300 text-sm max-w-xl mx-auto mb-8 relative z-10">
          Explora soluciones técnicas simuladas basadas en desafíos reales de escalabilidad, microfrontends y testing automatizado.
        </p>
        
        <motion.a 
          href="/projects" 
          className="inline-flex items-center justify-center rounded-none bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-amber-600 transition-colors relative z-10 cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Explorar Casos de Estudio
        </motion.a>
      </motion.section>
    </motion.div>
  )
}