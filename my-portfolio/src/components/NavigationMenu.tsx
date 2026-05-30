import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    'Einstieg im Nebenberuf',
    'Einstieg als Branchenkenner',
    'Für Quereinsteiger',
    'Für Berufseinsteiger'
  ];

  return (
    <>
      {/* Botón "Menú" (puedes ponerlo en tu Navbar actual) */}
      <button onClick={() => setIsOpen(true)} className="flex items-center gap-2 text-slate-700">
        <span className="text-xl">☰</span> <span>Menú</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* 1. Fondo Oscuro (Overlay) */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            
            {/* 2. Panel Lateral */}
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 p-8"
            >
              {/* Header del Menú */}
              <div className="flex justify-between items-center mb-12">
                <button onClick={() => setIsOpen(false)} className="text-sm font-bold">← Zurück</button>
                <button onClick={() => setIsOpen(false)} className="text-sm font-bold">✕ Schließen</button>
              </div>

              {/* Título */}
              <h2 className="text-3xl font-bold text-slate-900">Einstiegsmöglichkeiten</h2>
              <p className="text-slate-500 mt-2">Finde den Weg, der zu dir passt</p>

              {/* Lista de ítems */}
              <ul className="mt-10 space-y-6">
                {menuItems.map((item, i) => (
                  <li key={i} className="group cursor-pointer flex items-center gap-4">
                    {/* Línea dorada (solo aparece al hacer hover) */}
                    <span className="w-[3px] h-8 bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-lg font-bold text-slate-800 hover:text-amber-500 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};