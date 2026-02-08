import { motion } from 'motion/react';

interface HeroProps {
  backgroundImage: string;
}

export function Hero({ backgroundImage }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-[var(--color-bg)]/70 backdrop-blur-sm" />
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="mb-6">Eungyeol Kim</h1>
        <motion.p 
          className="text-lg tracking-wide opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Design & Development
        </motion.p>
        <motion.p 
          className="text-sm tracking-widest mt-2 opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          WEB · VISUAL · EDITORIAL · MOTION
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-px h-12 bg-[var(--color-text)]" />
      </motion.div>
    </section>
  );
}
