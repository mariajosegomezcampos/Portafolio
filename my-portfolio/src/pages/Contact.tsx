import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

type ContactFormData = {
  name: string
  email: string
  message: string
}

export default function Contact(): React.JSX.Element {
  const { t } = useTranslation()
  const [isSubmittingForm, setIsSubmittingForm] = useState<boolean>(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({ mode: 'onTouched' })

  // Tu configuración de enlaces reales y profesionales
  const emailReal = "mariajosegomezcampo@gmail.com"
  const linkedInUrl = "https://www.linkedin.com/in/mariajosegomezcampos/" 
  const subjectText = encodeURIComponent("👋 Interés en tu perfil técnico - Software Engineer")

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmittingForm(true)
    setSubmitSuccess(null)
    try {
      const FORM_ENDPOINT = "https://formspree.io/f/xjgzoynp"
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.ok) {
        setSubmitSuccess(true)
        reset() // Limpia el formulario solo si el envío fue exitoso
      } else {
        throw new Error('Error en la respuesta de Formspree')
      }
    } catch (error) {
      console.error(error)
      setSubmitSuccess(false)
    } finally {
      setIsSubmittingForm(false)
    }
  }

  return (
    <motion.div 
      className="mx-auto max-w-7xl px-6 py-16 lg:px-8 min-h-screen"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      {/* Encabezado dinámico */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl uppercase">
          {t('contactSection.title') || 'Contac'}<span className="text-amber-500 font-light">{t('contactSection.titleEnd') || 'to'}</span>
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 font-medium max-w-xl mx-auto">
          {t('contactSection.subtitle') || '¿Buscas integrar ingeniería sólida y Clean Architecture en tu equipo? Elige el canal que te resulte más cómodo.'}
        </p>
      </div>

      {/* Grid de Diseño Conversacional */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* COLUMNA IZQUIERDA: Hub de Canales Directos CON TU FOTO */}
        <div className="lg:col-span-5 bg-slate-950 text-white p-8 rounded-none border border-slate-900 flex flex-col justify-between h-full min-h-[500px]">
          
          <div className="space-y-8">
            
            {/* 📸 NUEVO BLOQUE DE FOTO PROFESIONAL INTEGRADA */}
            <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
              <div className="flex-shrink-0 relative">
                {/* Asegúrate de poner tu foto real en la carpeta public/images/ */}
                <img 
                  src="/images/maria_gomez.jpeg" 
                  alt="María José Gómez" 
                  className="w-16 h-16 rounded-full border-2 border-amber-500 object-cover shadow-xl"
                />
                <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full ring-2 ring-slate-950 bg-emerald-500" title="Online / Disponible"></span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold uppercase tracking-widest text-white">María José Gómez</p>
                <p className="text-[11px] font-medium text-slate-400">Software Engineer / Frontend Specialist</p>
                <p className="text-[10px] font-mono text-amber-400">Santiago, Chile 🇨🇱</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-amber-400">
                ⚡ Respuesta Inmediata
              </div>
              <h3 className="text-xl font-bold font-mono tracking-tight uppercase">Canales Directos</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Salta el formulario y comunícate directamente conmigo a través de mis plataformas profesionales.
              </p>
            </div>

            {/* Grupo de Botones Interactivos */}
            <div className="space-y-3 flex-1 my-6 justify-center flex flex-col pt-4">
              
              {/* 1. Correo Electrónico Directo */}
              <a 
                href={`mailto:${emailReal}?subject=${subjectText}`}
                className="w-full flex items-center justify-between rounded-none bg-amber-500 hover:bg-amber-600 px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer font-mono group"
              >
                <span>Enviar Correo Directo</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>

              {/* 2. LinkedIn */}
              <a 
                href={linkedInUrl} 
                target="_blank" 
                rel="noreferrer"
                className="w-full flex items-center gap-3 rounded-none border border-slate-800 bg-slate-900/40 hover:bg-slate-900 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 transition-colors cursor-pointer"
              >
                <span className="text-amber-500 font-mono text-sm">in</span>
                <span>Mi Perfil de LinkedIn</span>
              </a>

              {/* 3. Descarga Física de VCard */}
              <a 
                href="/maria_gomez.vcf" 
                download="Contacto_Maria_Jose_Gomez.vcf"
                className="w-full flex items-center gap-3 rounded-none border border-slate-800 bg-slate-900/40 hover:bg-slate-900 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 transition-colors cursor-pointer group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Descargar VCard Profesional</span>
              </a>

            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 border-t border-slate-900 pt-6">
            Disponibilidad: Región Metropolitana / Remoto
          </div>
        </div>

        {/* COLUMNA DERECHA: Formulario Incrustado Tradicional */}
        <div className="lg:col-span-7 bg-white p-8 rounded-none border border-slate-200/60 shadow-2xs h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-900">
                Nombre Completo
              </label>
              <div className="mt-1.5">
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'El nombre es obligatorio.' })}
                  className={`block w-full rounded-none border bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-slate-900 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-slate-200 focus:border-amber-500'
                  }`}
                  placeholder="Ej. María José Gómez"
                />
              </div>
              {errors.name && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-900">
                Correo Electrónico
              </label>
              <div className="mt-1.5">
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'El correo es obligatorio.',
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Formato no válido.' }
                  })}
                  className={`block w-full rounded-none border bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-slate-900 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-slate-200 focus:border-amber-500'
                  }`}
                  placeholder="nombre@empresa.com"
                />
              </div>
              {errors.email && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-900">
                Mensaje
              </label>
              <div className="mt-1.5">
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: 'El mensaje no puede estar vacío.' })}
                  className={`block w-full rounded-none border bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-slate-900 transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-slate-200 focus:border-amber-500'
                  }`}
                  placeholder="Detalla tu propuesta o requerimiento técnico..."
                />
              </div>
              {errors.message && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message.message}</p>}
            </div>

            {/* Feedback de Envío */}
            <AnimatePresence mode="wait">
              {submitSuccess === true && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800">
                  ¡Mensaje enviado con éxito! Te responderé pronto.
                </motion.div>
              )}
              {submitSuccess === false && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-red-50 border border-red-200 text-xs font-medium text-red-800">
                  Error al enviar. Por favor reinténtalo.
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <button
                type="submit"
                disabled={isSubmittingForm}
                className={`w-full rounded-none bg-slate-950 px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition-all ${
                  isSubmittingForm ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-500 hover:text-slate-950 cursor-pointer'
                }`}
              >
                {isSubmittingForm ? 'Enviando...' : 'Enviar mediante Formulario'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </motion.div>
  )
}