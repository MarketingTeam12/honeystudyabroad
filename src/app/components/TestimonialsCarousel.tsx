import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    country: 'USA',
    university: 'Stanford University',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    quote: 'Honey Translations helped me secure admission to my dream university with a full scholarship. Their guidance was invaluable throughout the entire process.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    country: 'Canada',
    university: 'University of Toronto',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    quote: 'From visa assistance to finding accommodation, they supported me every step of the way. Now I\'m pursuing my MBA at one of Canada\'s top universities.',
    rating: 5,
  },
  {
    name: 'Ananya Patel',
    country: 'UK',
    university: 'University of Oxford',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    quote: 'Their IELTS coaching helped me achieve a band score of 8.0. The counselors were patient, knowledgeable, and genuinely cared about my success.',
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-[#1A3A8F]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-white font-extrabold">
            Student Success Stories
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Hear from students who achieved their dreams with our guidance
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0px_8px_24px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Photo */}
              <div className="flex-shrink-0">
                <img
                  src={current.photo}
                  alt={current.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#F4C430] shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex gap-1 justify-center md:justify-start mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F4C430] text-[#F4C430]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-[#6B7280] mb-6 italic leading-relaxed">
                  "{current.quote}"
                </p>

                {/* Student Info */}
                <div>
                  <div className="text-xl font-semibold text-[#1C1C1C]">{current.name}</div>
                  <div className="text-[#1A73E8] font-medium">{current.university}</div>
                  <div className="text-[#6B7280]">{current.country}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-xl hover:bg-[#F4C430] transition-all flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-[#1A73E8]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-xl hover:bg-[#F4C430] transition-all flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-[#1A73E8]" />
          </button>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#F4C430] w-8' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
