import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    src: "/slide banner.webp",
    alt: "York Centre French – Slide Banner",
  },
  {
    src: "/Slide Banner 1.webp",
    alt: "York Centre French – Slide Banner",

  },
  {
    src: "/Slide Banner 2.webp",
    alt: "York Centre French – Slide Banner",
  },
];

const INTERVAL = 4000; // ms
const TRANSITION_MS = 500;

const HeroSlider = () => {
  // For smooth infinite looping, duplicate slides: [last, ...slides, first]
  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];

  const [index, setIndex] = useState(1); // start at the first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);
  const showDots = slides.length > 1;
  const trackRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // Real index for dots (0-based within original slides)
  const realIndex = ((index - 1) % slides.length + slides.length) % slides.length;

  const goNext = useCallback(() => {
    if (isAnimatingRef.current || slides.length <= 1) return;
    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setIndex((prev) => Math.min(prev + 1, extendedSlides.length - 1));
  }, [extendedSlides.length]);

  const goPrev = useCallback(() => {
    if (isAnimatingRef.current || slides.length <= 1) return;
    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // After transition ends, silently jump if we're on a clone
  const handleTransitionEnd = useCallback((event) => {
    if (event.target !== trackRef.current || event.propertyName !== "transform") {
      return;
    }

    isAnimatingRef.current = false;

    if (index === 0) {
      // We've slid to the cloned last slide (before real first)
      setIsTransitioning(false);
      setIndex(slides.length);
    } else if (index === extendedSlides.length - 1) {
      // We've slid to the cloned first slide (after real last)
      setIsTransitioning(false);
      setIndex(1);
    }
  }, [index, extendedSlides.length]);

  // If the browser misses transitionend, reset from cloned slides before the
  // next auto-play tick can move the track into an empty white panel.
  useEffect(() => {
    if (!isAnimatingRef.current) return;

    const id = window.setTimeout(() => {
      isAnimatingRef.current = false;

      if (index === 0) {
        setIsTransitioning(false);
        setIndex(slides.length);
      } else if (index === extendedSlides.length - 1) {
        setIsTransitioning(false);
        setIndex(1);
      }
    }, TRANSITION_MS + 100);

    return () => window.clearTimeout(id);
  }, [index, extendedSlides.length]);

  // Auto-play
  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = setInterval(goNext, INTERVAL);
    return () => clearInterval(id);
  }, [paused, goNext]);

  return (
    <div className="w-full px-4 md:px-8 py-3">
      <div
        className="relative w-full overflow-hidden rounded-xl group"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Slide Track */}
        <div
          ref={trackRef}
          className="flex"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: isTransitioning
              ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, i) => (
            <img
              key={i}
              src={slide.src}
              alt={slide.alt}
              className="w-full flex-shrink-0 object-contain"
              draggable={false}
            />
          ))}
        </div>

        {/* Prev button */}
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30
            w-10 h-10 flex items-center justify-center
            bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg
            transition-all duration-300 cursor-pointer hover:scale-110"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        {/* Next button */}
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30
            w-10 h-10 flex items-center justify-center
            bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg
            transition-all duration-300 cursor-pointer hover:scale-110"
        >
          <FaChevronRight className="text-sm" />
        </button>

        {/* Dots – only when multiple slides */}
        {showDots && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (isAnimatingRef.current || index === i + 1) return;
                  isAnimatingRef.current = true;
                  setIsTransitioning(true);
                  setIndex(i + 1);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${i === realIndex
                  ? "bg-white scale-110 shadow"
                  : "bg-white/50 hover:bg-white/80"
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSlider;
