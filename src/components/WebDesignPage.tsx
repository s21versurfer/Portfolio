import { motion } from 'motion/react';

interface WebProject {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
  year: string;
}

interface WebDesignPageProps {
  projects: WebProject[];
}

export function WebDesignPage({ projects }: WebDesignPageProps) {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Web Design</h2>
          <p className="text-sm opacity-40 mb-16">Interface & Experience</p>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group"
              >
                {/* Large Mockup */}
                <div className="overflow-hidden mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[700px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-7">
                    <h3 className="mb-3">{project.title}</h3>
                    <p className="opacity-60 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="md:col-span-5 space-y-4">
                    <div>
                      <p className="text-xs opacity-40 mb-2 tracking-wider uppercase">Tools</p>
                      <p className="text-sm">{project.tools.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-xs opacity-40 mb-2 tracking-wider uppercase">Year</p>
                      <p className="text-sm">{project.year}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
