'use client';

import { useEffect, useState, useRef } from 'react';

const testimonials = [
  {
    quote: "Sela Trade helped us secure reliable suppliers and cut our lead times significantly. Their team manages the details so we can stay focused on sales.",
    name: "Leroy Jones",
    title: "Director of Procurement, Retail Distributor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Working with Sela Trade transformed our supply chain operations. Their attention to detail and proactive communication made all the difference.",
    name: "Daisy Morgan",
    title: "Digital Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "The quality control and documentation support we received exceeded our expectations. A truly professional team that delivers results.",
    name: "Betty Hill",
    title: "Social Media Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Sela Trade has been instrumental in our international expansion. Their expertise in logistics and compliance is unmatched in the industry.",
    name: "Robert Junior",
    title: "CEO and Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#1a365d]/5 text-[#1a365d] text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] mb-6">
            What Our <span className="text-[#c9a962]">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We grow by helping our clients grow. Here is what some of them say about working with Sela Trade.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#c9a962]/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#c9a962]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#c9a962]/20 group-hover:ring-[#c9a962]/50 transition-all duration-300">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a365d] text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

