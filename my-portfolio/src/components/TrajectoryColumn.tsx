import { motion } from 'framer-motion';
import { itemVariants } from '../lib/animations';

export const TrajectoryColumn = () => (
  <motion.div 
    variants={itemVariants} 
    className="space-y-6 text-base leading-7 text-slate-700 dark:text-slate-300 transition-colors duration-300"
  >
    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white border-b-2 border-amber-500 pb-2 inline-block transition-colors duration-300">
      Mi Trayectoria
    </h2>
    <p>
      Soy Ingeniera de Software con más de 6 años de experiencia especializada en el desarrollo Frontend y en la construcción de arquitecturas escalables. Mi día a día se centra en liderar la implementación de <strong>Microfrontends (MFE)</strong> y asegurar la mantenibilidad del código.
    </p>
    <p>
      Tengo un trasfondo profesional único: mi Licenciatura en Enfermería me permitió desarrollar <strong>habilidades transferibles críticas</strong>: altísima tolerancia al estrés, resolución de problemas bajo presión y comunicación asertiva interfuncional.
    </p>
    <p>
      Hoy combino esa resiliencia con mi formación en la <strong>Universidad Andrés Bello (UNAB)</strong>, donde curso Ingeniería en Computación e Informática.
    </p>
  </motion.div>
);