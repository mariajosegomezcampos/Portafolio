import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../lib/animations';

export const Header = () => (
  <motion.section variants={itemVariants} className="mx-auto max-w-3xl text-center">
    <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl uppercase transition-colors duration-300">
      Sobre <span className="text-amber-500 font-light">Mí</span>
    </h1>
    <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300">
      La intersección entre la rigurosidad metodológica, la arquitectura de software y la resolución de problemas de negocio.
    </p>
  </motion.section>
);