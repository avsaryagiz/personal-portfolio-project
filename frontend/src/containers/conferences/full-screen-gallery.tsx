import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { IImage } from "@/types.d";
import { LuX } from "react-icons/lu";

interface FullScreenImageProps {
  images: IImage[];
  title: string;
  onClose: () => void;
}

export default function FullScreenImage({
  images,
  title,
  onClose,
}: FullScreenImageProps) {
  return (
    <div className="fixed inset-0 z-40 !mt-0 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 text-primary hover:text-foreground"
        aria-label="Close full screen image"
      >
        <LuX size={24} />
      </button>
      <Swiper
        modules={[Navigation]}
        navigation
        className="relative h-screen w-screen"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.url}
              alt={`${title} - Image ${index + 1}`}
              width={1920}
              height={1920}
              className="h-full w-full object-contain object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
