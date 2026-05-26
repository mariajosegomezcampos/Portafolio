import { motion } from 'framer-motion';

interface EducationItem {
  year: string;
  title: string;
  institution: string;
  active?: boolean;
}

interface AboutCardProps {
  item: EducationItem;
}

export const AboutCard = ({ item }: AboutCardProps) => {
  return (
    <motion.div
      className={`group relative bg-slate-50/50 p-6 rounded-none border ${
        item.active ? 'border-amber-500' : 'border-slate-200/80'
      } shadow-xs flex flex-col justify-between min-h-[180px] cursor-default`}
      whileHover={{
        y: -6,
        scale: 1.02,
        backgroundColor: '#ffffff',
        borderColor: item.active ? '#f59e0b' : '#f59e0b',
        boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.05)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div>
        <div className="flex justify-between items-start gap-2">
          {/* Badge del año */}
          <span
            className={`text-[10px] font-bold tracking-widest uppercase font-mono px-2 py-0.5 border transition-colors ${
              item.active
                ? 'text-amber-600 bg-amber-50 border-amber-200/50'
                : 'text-slate-500 bg-slate-100 group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-200/50 border-transparent'
            }`}
          >
            {item.year}
          </span>
          
          {/* Indicador visual */}
          <span className={`font-mono text-xs transition-all ${item.active ? 'text-amber-500' : 'text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-amber-500'}`}>
            →
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 mt-4 leading-snug tracking-tight group-hover:text-amber-600 transition-colors">
          {item.title}
        </h3>
      </div>

      <p className="text-xs font-medium text-slate-500 mt-4 border-t border-slate-200/60 pt-3 uppercase tracking-wider">
        {item.institution}
      </p>
    </motion.div>
  );
};