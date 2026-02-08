import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  '/Cow hi.jpg.jpeg',
  '/Goat 2 hi.jpg.jpeg',
  '/Sheep hi.jpg.jpeg',
  '/Horse 2 high.jpg.jpeg',
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt={`Hero ${i+1}`}
            fill
            className="object-cover"
            style={{ objectPosition: 'center' }}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}
      {/* Carousel round buttons */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <div className="flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full border-2 border-white bg-white/70 hover:bg-pink-400 transition-colors focus:outline-none ${index === i ? 'bg-pink-500 border-pink-500 scale-110' : ''}`}
              onClick={() => setIndex(i)}
              style={{ boxShadow: index === i ? '0 0 0 2px rgba(236,72,153,0.3)' : undefined }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
