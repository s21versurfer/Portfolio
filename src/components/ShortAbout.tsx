import { motion } from 'motion/react';

export function ShortAbout() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        className="space-y-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xl leading-relaxed">
          I design visuals and build them into functioning systems.
        </p>
        <p className="text-xl leading-relaxed opacity-60">
          My work spans web design, development, photography, and editorial design.
        </p>
      </motion.div>
    </section>
  );
}
