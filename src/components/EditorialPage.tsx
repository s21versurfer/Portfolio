import { motion } from 'motion/react';

interface EditorialProject {
  id: number;
  title: string;
  type: string;
  description: string;
  image: string;
  year: string;
}

interface EditorialPageProps {
  projects: EditorialProject[];
}

export function EditorialPage({ projects }: EditorialPageProps) {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Editorial / Newspaper</h2>
          <p className="text-sm opacity-40 mb-16">Print & Publication</p>

          {/* Editorial Grid with Generous Margins */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
              >
                {/* Alternate Layout */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:col-span-7">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[600px] object-cover"
                      />
                    </div>
                    <div className="md:col-span-5 space-y-6 md:pl-8">
                      <div>
                        <p className="text-xs opacity-40 mb-3 tracking-widest uppercase">
                          {project.type}
                        </p>
                        <h3 className="mb-4">{project.title}</h3>
                        <p className="opacity-60 leading-relaxed text-lg">
                          {project.description}
                        </p>
                      </div>
                      <p className="text-sm opacity-40">{project.year}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:col-span-5 space-y-6 md:pr-8 order-2 md:order-1">
                      <div>
                        <p className="text-xs opacity-40 mb-3 tracking-widest uppercase">
                          {project.type}
                        </p>
                        <h3 className="mb-4">{project.title}</h3>
                        <p className="opacity-60 leading-relaxed text-lg">
                          {project.description}
                        </p>
                      </div>
                      <p className="text-sm opacity-40">{project.year}</p>
                    </div>
                    <div className="md:col-span-7 order-1 md:order-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[600px] object-cover"
                      />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
