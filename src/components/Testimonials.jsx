import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, TechCorp',
      text: 'Amazing service! The team delivered exactly what we needed on time.',
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Sarah Smith',
      role: 'Founder, StartupXYZ',
      text: 'Professional and responsive. Highly recommended for any project.',
      avatar: '👩‍💼'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Manager, GlobalCo',
      text: 'Best experience we had with a development team. Will work together again!',
      avatar: '👨‍💻'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-carousel">
          <button className="carousel-button prev" onClick={prevTestimonial}>
            ❮
          </button>
          <div className="testimonial-card">
            <div className="avatar">{current.avatar}</div>
            <p className="testimonial-text">"{current.text}"</p>
            <h4>{current.name}</h4>
            <p className="role">{current.role}</p>
          </div>
          <button className="carousel-button next" onClick={nextTestimonial}>
            ❯
          </button>
        </div>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;