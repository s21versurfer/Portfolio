import { motion } from "motion/react";

interface Photo {
  id: number;
  url: string;
  title: string;
  location?: string;
}

// assets 폴더의 이미지들을 전부 자동 import
const imageModules = import.meta.glob("../assets/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// 이미지에서 확인된 파일명 전체
const photoFileNames = [
  "_MG_3860.jpg",
  "_MG_3862.jpg",
  "_MG_3881.jpg",
  "_MG_3890.jpg",
  "_MG_3907.jpg",
  "_MG_3908.jpg",
  "_MG_3913.jpg",
  "_MG_3916.jpg",
  "_MG_3922.jpg",
  "_MG_3925.jpg",
  "_MG_3928.jpg",
  "_MG_3932.jpg",
  "_MG_3933.jpg",
  "_MG_3946.jpg",
  "_MG_3949.jpg",
  "_MG_3951.jpg",
  "_MG_3961.jpg",
  "_MG_4007.jpg",
  "_MG_4068.jpg",
  "_MG_9484.jpg",
  "_MG_9525.jpg",
  "_MG_9533.jpg",
  "_MG_9535.jpg",
  "_MG_9536.jpg",
  "_MG_9558.jpg",
  "_MG_9584.jpg",
  "_MG_9683.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "31.jpg",
  "32.jpg",
  "33.jpg",
  "34.jpg",
  "35.jpg",
  "41.jpg",
  "42.jpg",
  "43.jpg",
  "44.jpg",
  "45.jpg",
  "46.jpg",
  "47.jpg",
  "52.png",
  "53.jpg",
  "54.png",
  "55.png",
  "61.jpg",
  "62.jpg",
  "63.jpg",
  "64.jpg",
  "65.jpg",
  "66.jpg",
  "67.jpg",
  "68.jpg",
  "69.jpg",
  "71.jpg",
  "72.jpg",
  "73.jpg",
  "74.jpg",
  "IMG_0801.jpg",
  "IMG_2039.jpg",
  "IMG_2067.jpg",
  "IMG_2596.jpg",
  "IMG_2614.jpg",
  "IMG_2645.jpg",
  "IMG_2672.jpg",
  "IMG_4278-2.jpg",
  "IMG_4303-2.jpg",
  "IMG_4423.jpg",
  "IMG_4543.jpg",
  "IMG_4547.jpg",
  "IMG_4574.jpg",
  "IMG_4575.jpg",
  "IMG_4657.jpg",
  "IMG_7150.jpg",
  "IMG_7300.jpg",
  "IMG_8041.jpg",
  "IMG_8043.jpg",
  "IMG_8232.jpg",
  "IMG_8238.jpg",
  "IMG_8242.jpg",
  "IMG_8358.jpg",
  "IMG_8377.jpg",
  "IMG_8477.jpg",
  "IMG_8492.jpg",
  "IMG_8498.jpg",
  "IMG_8506.jpg",
  "IMG_8514-2.jpg",
  "IMG_8514.jpg",
  "IMG_8516.jpg",
  "IMG_8571.jpg",
  "IMG_8574.jpg",
  "IMG_8648.jpg",
  "IMG_8695.jpg",
];

// 파일명 기반으로 사진 목록 생성
const photos: Photo[] = photoFileNames
  .map((fileName, index) => {
    const url = imageModules[`../assets/${fileName}`];

    if (!url) {
      console.warn(`이미지를 찾을 수 없습니다: ${fileName}`);
      return null;
    }

    return {
      id: index + 1,
      url,
      title: fileName.replace(/\.[^/.]+$/, ""), // 확장자 제거
    };
  })
  .filter((photo): photo is Photo => photo !== null);

export function PhotographyPage() {
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
          <p className="text-sm opacity-40 mb-16">Exhibition / Catalog</p>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.04,
                }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-4 bg-neutral-100">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-sm break-all">{photo.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}