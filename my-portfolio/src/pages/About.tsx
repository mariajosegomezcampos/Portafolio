import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '../lib/animations';

import { AboutCard } from '../components/AboutCard';
import { EDUCATION_ITEMS, PHILOSOPHY_PILLARS } from '../data/portfolioData';
import { Header } from '../components/Header';
import { TrajectoryColumn } from '../components/TrajectoryColumn';
import { PhilosophyColumn } from '../components/PhilosophyColumn';

export default function About(): React.JSX.Element {
  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible" 
      // Restaurado tu espaciado original
      className="space-y-20 py-16 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen"
    >
      
      {/* 1. Header */}
      <Header /> 

      {/* 2. Sección de Trayectoria y Filosofía */}
      <section className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 items-start">
        <TrajectoryColumn />
        <PhilosophyColumn pillars={PHILOSOPHY_PILLARS} />
      </section>

      {/* 3. Educación */}
      <section className="pt-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-12">
           <h2 className="text-2xl font-bold tracking-tight text-slate-900 uppercase">
             Educación & <span className="text-amber-500 font-light">Formación</span>
           </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_ITEMS.map((edu, i) => (
            <AboutCard key={i} item={edu} />
          ))}
        </div>
      </section>
      
    </motion.div>
  );
}