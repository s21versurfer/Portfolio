import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface VideoProject {
  id: number;
  title: string;
  role: string;
  achievement?: string;
  thumbnail: string;
  year: string;
}

interface VideoPageProps {
  videos: VideoProject[];
}

export function VideoPage({ videos }: VideoPageProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Video</h2>
          <p className="text-sm opacity-40 mb-16">Motion & Film</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${
                    hoveredId === video.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-black ml-1" fill="black" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <h3 className="text-xl">{video.title}</h3>
                  <div className="space-y-1">
                    <p className="text-sm opacity-60">{video.role}</p>
                    {video.achievement && (
                      <p className="text-sm opacity-40">{video.achievement}</p>
                    )}
                    <p className="text-xs opacity-40">{video.year}</p>
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
