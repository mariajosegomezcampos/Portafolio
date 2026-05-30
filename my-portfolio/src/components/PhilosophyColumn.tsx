import { motion } from 'framer-motion';
import { itemVariants } from '../lib/animations';

interface Pillar {
  id: string;
  title: string;
  description: string;
}

export const PhilosophyColumn = ({ pillars }: { pillars: Pillar[] }) => (
  <motion.div 
    variants={itemVariants} 
    className="bg-slate-50/70 dark:bg-slate-900/50 p-8 rounded-none border border-slate-200/60 dark:border-slate-800 transition-colors duration-300 space-y-8"
  >
    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
      Filosofía de Trabajo
    </h2>
    <div className="space-y-6">
      {pillars.map((pillar) => (
        <motion.div 
          key={pillar.id}
          className="flex gap-4 p-3 transition-colors duration-300 hover:bg-white dark:hover:bg-slate-800 border-l-2 border-transparent hover:border-amber-500"
          whileHover={{ x: 4 }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-amber-500 text-white font-bold text-sm">
            {pillar.id}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white uppercase text-sm transition-colors duration-300">
              {pillar.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 transition-colors duration-300">
              {pillar.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);