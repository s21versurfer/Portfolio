import { motion } from 'motion/react';
import profileImg from "../assets/profile.jpg";

interface DevProject {
  id: number;
  title: string;
  purpose: string;
  stack: string[];
  image: string;
  year: string;
  link?: string;
}

interface WebDevelopmentPageProps {
  projects: DevProject[];
}

export function WebDevelopmentPage({ projects }: WebDevelopmentPageProps) {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Web Development</h2>
          <p className="text-sm opacity-40 mb-16">Building Systems</p>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Info First */}
                  <div className="md:col-span-5 space-y-6">
                    <div>
                      <h3 className="mb-3">{project.title}</h3>
                      <p className="opacity-60 leading-relaxed">{project.purpose}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs opacity-40 mb-2 tracking-wider uppercase">Stack</p>
                        <p className="text-sm">{project.stack.join(', ')}</p>
                      </div>
                      <div>
                        <p className="text-xs opacity-40 mb-2 tracking-wider uppercase">Year</p>
                        <p className="text-sm">{project.year}</p>
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-sm border-b border-[var(--color-text)] hover:opacity-60 transition-opacity"
                        >
                          View Project →
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Result Image */}
                  <div className="md:col-span-7 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[500px] object-cover"
                    />
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
