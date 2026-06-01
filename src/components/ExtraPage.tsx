import { motion } from "motion/react";
import { Instagram, Youtube, Github } from "lucide-react";

import view from "../assets/view.jpg";
import view1 from "../assets/view2.jpg";

export function ExtraPage() {
  const links = [
    {
      platform: "Instagram",
      username: "@sillaboratory / @silverconquertheearth",
      url: "https://www.instagram.com/sillaboratory/",
      icon: Instagram,
      description: "Visual diary, multicultural content, and behind-the-scenes",
    },
    {
      platform: "YouTube",
      username: "Earth Conquest",
      url: "https://www.youtube.com/@theearthconquest",
      icon: Youtube,
      description: "Video projects, vlogs, and tutorials",
    },
    {
      platform: "GitHub",
      username: "s21versurfer",
      url: "https://github.com/s21versurfer/HelloMyWorld",
      icon: Github,
      description: "Open source work and code",
    },
  ];

  return (
    <div className="min-h-screen pt-40 pb-28">
      <div className="max-w-5xl mx-auto px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Extra</h2>
          <p className="text-sm opacity-40 mb-20">Connect & Follow</p>

          <div className="space-y-10">
            {links.map((link, index) => {
              const Icon = link.icon;

              return (
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
                  <div className="border border-[var(--color-border)] p-10 hover:border-[var(--color-text)] transition-colors">
                    <div className="flex items-start justify-between gap-8">
                      <div className="space-y-3 w-full">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5" />
                          <h3 className="text-xl">{link.platform}</h3>
                        </div>

                        <p className="text-sm opacity-40">{link.username}</p>
                        <p className="opacity-60">{link.description}</p>

                        {link.platform === "Instagram" && (
                          <div className="pt-8 space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <img
                                src={view}
                                alt="Instagram content preview 1"
                                className="w-full aspect-[4/5] object-cover border border-[var(--color-border)]"
                              />
                              <img
                                src={view1}
                                alt="Instagram content preview 2"
                                className="w-full aspect-[4/5] object-cover border border-[var(--color-border)]"
                              />
                            </div>

                            <p className="text-sm opacity-60 leading-relaxed">
                              Created multicultural short-form content featuring
                              Korean culture, daily life, and international
                              friendship. One Korean food video reached over{" "}
                              <span className="font-medium opacity-100">
                                2.7M+ views
                              </span>
                              .
                            </p>
                          </div>
                        )}
                      </div>

                      <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}