import { motion } from "motion/react";

import img1 from "../assets/_MG_1903.jpg";
import img2 from "../assets/_MG_1959.jpg";
import img3 from "../assets/_MG_2027.jpg";
import img4 from "../assets/_MG_2039-2.jpg";
import img5 from "../assets/_MG_1903.jpg";

interface Photo {
  id: number;
  url: string;
  title: string;
  location?: string;
}

export function PhotographyPage() {
  const photos: Photo[] = [
    {
      id: 1,
      url: img1,
      title: "Urban Perspective I",
      location: "Seoul",
    },
    {
      id: 2,
      url: img2,
      title: "Urban Perspective II",
      location: "Seoul",
    },
    {
      id: 3,
      url: img3,
      title: "Street Geometry",
      location: "Tokyo",
    },
    {
      id: 4,
      url: img4,
      title: "Quiet Structure",
      location: "Paris",
    },
    {
      id: 5,
      url: img5,
      title: "Light and Shadow",
      location: "Seoul",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 mt-1">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <h2 className="mt-4 text-xl font-medium">Photography</h2>
          <p className="text-sm opacity-40 mb-16">
            Exhibition / Catalog
          </p>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-4">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-sm">{photo.title}</p>
                  {photo.location && (
                    <p className="text-xs opacity-40">
                      {photo.location}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
