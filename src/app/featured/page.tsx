'use client';

import { useRef, useState, useEffect } from 'react';

export default function Featured() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredYouths = [
    {
      name: 'Evans Kirigha',
      image: '/images/evans.jpg',
      testimonial: "I&rsquo;m passionate about sustainable agriculture in my community.",
    },
    {
      name: 'John Linus',
      image: '/images/linus.jpg',
      testimonial: 'I lead tree-planting drives every month in my hometown.',
    },
    {
      name: 'Fredrick Okwomboli',
      image: '/images/fred.jpg',
      testimonial: 'I educate students on eco-friendly practices in schools.',
    },
    {
      name: 'Carlos Vega',
      image: '/images/globe.svg',
      testimonial: 'My project upcycles plastic into useful products.',
    },
  ];

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scroll = scrollRef.current;
    if (scroll) {
      const cardWidth = window.innerWidth < 768 ? window.innerWidth : 280;
      const index = Math.round(scroll.scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (ref) {
        ref.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="container mx-auto relative min-h-screen bg-white px-4 py-10 pb-20 pt-[80px]">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-400 text-center mb-6">
        Featured Youths in Climate Action
      </h1>

      {/* 🌍 Statement Above the Carousel */}
      <div className="max-w-3xl mx-auto text-center mb-10 px-2 text-gray-700">
        <p className="text-base md:text-lg leading-relaxed">
          <strong>&ldquo;We are young, but not powerless.</strong> Every action we take today—be it
          planting a tree, educating others, or reducing waste—shapes the world we&rsquo;ll inherit tomorrow.
          Climate change is not someone else&rsquo;s problem; it&rsquo;s our collective responsibility.
          <br />
          Join us in protecting the planet, inspiring change in our communities, and building a future
          we can all be proud of.&rdquo;
        </p>
      </div>

      {/* Arrow buttons */}
      <div className="flex justify-between items-center mb-4 px-6 md:px-16">
        <button onClick={scrollLeft} className="text-2xl">←</button>
        <button onClick={scrollRight} className="text-2xl">→</button>
      </div>

      {/* Scrollable carousel */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        <div className="flex pb-4">
          {featuredYouths.map((youth, idx) => (
            <div
              key={idx}
              className="snap-start flex-shrink-0 w-full md:w-[280px] max-w-full md:mx-2 bg-green-100 p-6 rounded-xl shadow-md"
            >
              <img
                src={youth.image}
                alt={youth.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
              />
              <h2 className="text-xl font-semibold text-center text-black">{youth.name}</h2>
              <p className="text-sm text-gray-700 mt-1 text-center">{youth.testimonial}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {featuredYouths.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border border-gray-400 transition ${index === activeIndex ? 'bg-green-600' : 'bg-transparent'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}


