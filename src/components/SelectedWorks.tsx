import { motion } from 'motion/react';

interface Work {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
}

interface SelectedWorksProps {
  works: Work[];
  onWorkClick: (category: string) => void;
}

export function SelectedWorks({ works, onWorkClick }: SelectedWorksProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-16">Selected Works</h2>
        
        <div className="space-y-12">
          {works.map((work, index) => (
            <motion.button
              key={work.id}
              onClick={() => onWorkClick(work.category)}
              className="w-full group block text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-[var(--color-border)] pb-12 hover:border-[var(--color-text)] transition-colors">
                {/* Image */}
                <div className="md:col-span-7 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="md:col-span-5 space-y-4">
                  <div className="space-y-2">
                    <h3>{work.title}</h3>
                    <p className="text-sm opacity-40 tracking-wider uppercase">{work.category}</p>
                  </div>
                  <p className="text-sm opacity-60">{work.year}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
