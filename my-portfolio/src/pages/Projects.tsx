import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { FeaturesSection } from '../components/FeaturesSection';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../data/portfolioData';

export default function Projects(): React.JSX.Element {
  const { t } = useTranslation();
  
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 transition-colors duration-300">
      
      {/* Encabezado */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl uppercase font-mono transition-colors duration-300">
          {t('projectsSection.title') || 'Mis'}
          <span className="text-amber-500 font-light">{t('projectsSection.titleEnd') || ' Proyectos'}</span>
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400 font-medium max-w-xl mx-auto transition-colors duration-300">
          {t('projectsSection.subtitle') || 'Explora las aplicaciones y soluciones técnicas que he desarrollado.'}
        </p>
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.map((proj, i) => (
          <ProjectCard key={proj.id} project={proj} index={i} />
        ))}
      </div>

      {/* Sección de Características */}
      <FeaturesSection />
    </div>
  );
}