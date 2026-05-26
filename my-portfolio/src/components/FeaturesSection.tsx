import { motion } from 'framer-motion';
import { Code2, Zap, Rocket, Coffee } from 'lucide-react';
import { FEATURE_BLOCKS } from '../data/portfolioData';
import { JSX } from 'react/jsx-dev-runtime';

// Mapeo de iconos para mantener la lógica separada de los datos
const iconMap: Record<string, JSX.Element> = {
    code: <Code2 className="w-8 h-8 text-amber-400" />,
    zap: <Zap className="w-8 h-8 text-amber-400" />,
    rocket: <Rocket className="w-8 h-8 text-amber-400" />,
    coffee: <Coffee className="w-8 h-8 text-amber-400" />,
};

export const FeaturesSection = () => (
    <section className="py-20 px-6 max-w-6xl mx-auto">

        <div className="text-center mb-12 space-y-4">
            <motion.h2
                className=" mb-12 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl uppercase"
                initial={{ opacity: 0, y: 10 }}  
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
            >

                Razones para conectar

            </motion.h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mb-12" />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {FEATURE_BLOCKS.map((feature, idx) => (
                <div
                    key={idx}
                    /* 1. Añadimos relative, h-full y el degradado */
                    className="relative p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group flex flex-col min-h-[280px]"
                >
                    {/* 2. El icono ahora es absoluto en la esquina inferior derecha */}
                    <div className="absolute bottom-6 right-6 opacity-50 group-hover:opacity-100 transition-opacity">
                        {iconMap[feature.iconKey]}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                        {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed z-10">
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    </section>
);