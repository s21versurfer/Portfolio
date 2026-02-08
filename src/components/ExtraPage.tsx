import { motion } from 'motion/react';
import { Instagram, Youtube, Github } from 'lucide-react';

export function ExtraPage() {
  const links = [
    {
      platform: 'Instagram',
      username: '@eungyeolkim',
      url: 'https://instagram.com',
      icon: Instagram,
      description: 'Visual diary and behind-the-scenes'
    },
    {
      platform: 'YouTube',
      username: 'Eungyeol Kim',
      url: 'https://youtube.com',
      icon: Youtube,
      description: 'Video projects and tutorials'
    },
    {
      platform: 'GitHub',
      username: 'eungyeolkim',
      url: 'https://github.com',
      icon: Github,
      description: 'Open source work and code'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Extra</h2>
          <p className="text-sm opacity-40 mb-16">Connect & Follow</p>

          <div className="space-y-8">
            {links.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block group"
              >
                <div className="border border-[var(--color-border)] p-8 hover:border-[var(--color-text)] transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <link.icon className="w-5 h-5" />
                        <h3 className="text-xl">{link.platform}</h3>
                      </div>
                      <p className="text-sm opacity-40">{link.username}</p>
                      <p className="opacity-60">{link.description}</p>
                    </div>
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
