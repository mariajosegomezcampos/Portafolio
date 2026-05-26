import { motion } from 'framer-motion';
import { itemVariants } from '../lib/animations';

interface Pillar {
  id: string;
  title: string;
  description: string;
}

export const PhilosophyColumn = ({ pillars }: { pillars: Pillar[] }) => (
  <motion.div variants={itemVariants} className="bg-slate-50/70 p-8 rounded-none border border-slate-200/60 space-y-8">
    <h2 className="text-2xl font-bold tracking-tight text-slate-900">Filosofía de Trabajo</h2>
    <div className="space-y-6">
      {pillars.map((pillar) => (
        <motion.div 
          key={pillar.id}
          className="flex gap-4 p-3 transition-colors duration-200 hover:bg-white border-l-2 border-transparent hover:border-amber-500"
          whileHover={{ x: 4 }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-amber-500 text-white font-bold text-sm">
            {pillar.id}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 uppercase text-sm">{pillar.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{pillar.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);