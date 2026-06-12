import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What services do you offer?',
      answer: 'We offer web development, mobile apps, cloud solutions, API development, database design, and 24/7 support.'
    },
    {
      id: 2,
      question: 'How long does a typical project take?',
      answer: 'Project duration depends on complexity, but most projects take between 2-8 weeks from start to completion.'
    },
    {
      id: 3,
      question: 'Do you provide maintenance and support?',
      answer: 'Yes, we provide ongoing maintenance and 24/7 support for all our clients after project delivery.'
    },
    {
      id: 4,
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing based on project scope, including fixed-price, hourly, and retainer options.'
    },
    {
      id: 5,
      question: 'Can you work with existing code?',
      answer: 'Absolutely! We can integrate with, maintain, or enhance existing codebases.'
    },
    {
      id: 6,
      question: 'What technologies do you use?',
      answer: 'We work with modern stack including React, Node.js, Python, AWS, and other latest technologies.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span className={`icon ${openIndex === index ? 'open' : ''}`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;