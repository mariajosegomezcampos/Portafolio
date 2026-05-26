import { motion } from 'framer-motion';

interface PrincipleCardProps {
  title: string;
  description: string;
  variants: any;
}

export const PrincipleCard = ({ title, description, variants }: PrincipleCardProps) => (
  <motion.div 
    className="flex flex-col items-start bg-slate-50/50 p-8 rounded-none border border-slate-200/60 transition-colors duration-300 relative overflow-hidden group"
    variants={variants}
    whileHover={{ 
      y: -6, 
      scale: 1.01,
      backgroundColor: '#ffffff',
      borderColor: '#f59e0b',
      boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.05)'
    }}
  >
    <span className="absolute top-0 left-0 w-0 h-full bg-amber-500 transition-all duration-300 group-hover:w-[3px]" />

    <dt className="text-sm font-bold tracking-wide uppercase leading-7 text-slate-900 mb-4 flex items-center gap-3">
      <div className="h-2 w-2 bg-amber-500 transition-transform duration-300 group-hover:scale-125" />
      {title}
    </dt>
    <dd className="flex flex-auto flex-col text-sm leading-6 text-slate-600">
      <p className="flex-auto">{description}</p>
    </dd>
  </motion.div>
);