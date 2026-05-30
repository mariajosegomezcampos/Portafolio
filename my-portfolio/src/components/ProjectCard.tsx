import React from 'react'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    metrics?: string
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps): React.JSX.Element {
  return (
    <motion.div
      className="relative flex flex-col justify-end overflow-hidden px-6 pb-8 pt-40 min-h-[440px] rounded-md border-slate-800 shadow-xl group cursor-pointer bg-slate-950"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* 1. IMAGEN: z-0 para que esté detrás de todo, pero dentro del contenedor */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 z-0  object-cover transition-all duration-500 group-hover:scale-105 w-auto h-auto mx-auto "
      />

      {/* 2. OVERLAY: z-10 para oscurecer la imagen y que el texto se lea bien */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

      {/* 3. NÚMERO: z-10 (mismo nivel que el overlay o un poco más) */}
      <span
        className="absolute bottom-[-24px] left-[-8px] text-[165px] font-black font-mono leading-none select-none pointer-events-none z-10 opacity-30 transition-all duration-300 group-hover:opacity-50 group-hover:scale-105"
        style={{
          WebkitTextStroke: '2px #f59e0b',
          color: 'transparent'
        }}
      >
        {index + 1}
      </span>

      {/* 4. CONTENIDO: z-20 para que siempre esté al frente */}
      <div className="relative z-20 space-y-3 pl-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center bg-slate-900/90 border border-slate-700 px-2 py-0.5 text-[10px] font-mono tracking-wider text-slate-300 uppercase rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-base font-bold text-white tracking-tight uppercase group-hover:text-amber-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 font-medium leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}