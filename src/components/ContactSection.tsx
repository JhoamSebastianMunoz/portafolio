'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '@/lib/portfolio-data';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import { hoverLift, iconHover, iconTap, tapScale } from '@/lib/motion';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(`Contacto Portafolio - ${formState.name}`);
    const body = encodeURIComponent(
      `Nombre: ${formState.name}\nEmail: ${formState.email}\n\nMensaje:\n${formState.message}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-ink-950 relative overflow-hidden scroll-mt-16 border-y border-white/5">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent-500/5 to-transparent rounded-tr-full" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Contacto"
            subtitle="Estoy abierto a nuevas oportunidades y proyectos. Hablemos."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <ScrollReveal className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Conectemos</h3>
                <p className="text-slate-300 leading-relaxed">
                  Si tienes un proyecto en mente, una oportunidad laboral, o simplemente quieres
                  conectar, estaré encantado de escucharte. Respondo rápido.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: EnvelopeIcon, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: PhoneIcon, label: 'Teléfono', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: MapPinIcon, label: 'Ubicación', value: personalInfo.location },
                ].map((item) => (
                  <motion.div key={item.label} className="flex items-center gap-4" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <div className="w-11 h-11 bg-gradient-to-br from-accent-500 to-accent-300 rounded-xl flex items-center justify-center text-white shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-slate-400">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium text-white hover:text-accent-300 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">Redes</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 glass-panel border border-white/5 rounded-xl flex items-center justify-center text-slate-300 hover:bg-accent-500/10 hover:text-accent-300 hover:border-accent-500/30 transition-all duration-300"
                      whileHover={iconHover}
                      whileTap={iconTap}
                    >
                      {link.icon === 'github' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )}
                      {link.icon === 'linkedin' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      )}
                      {link.icon === 'envelope' && (
                        <EnvelopeIcon className="w-5 h-5" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-3" delay={0.15}>
              <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5">
                <h4 className="font-display font-bold text-white mb-6">Envíame un mensaje</h4>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-1.5">
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 bg-ink-800/50 border border-white/5 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-200 focus-ring"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 bg-ink-800/50 border border-white/5 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-200 focus-ring"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 bg-ink-800/50 border border-white/5 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-200 resize-none focus-ring"
                      placeholder="Cuéntame sobre tu proyecto o propuesta..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={sending}
                    className="w-full px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-300 text-white rounded-xl font-semibold text-gradient bg-[length:200%_auto] animate-gradient-x hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 disabled:opacity-60 focus-ring"
                    whileHover={hoverLift}
                    whileTap={tapScale}
                  >
                    {sending ? 'Enviando...' : sent ? '¡Mensaje listo!' : 'Enviar mensaje'}
                  </motion.button>
                  {sent && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-emerald-400 text-center font-medium font-mono"
                    >
                      Se abrirá tu cliente de correo para completar el envío
                    </motion.p>
                  )}
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}