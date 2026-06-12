import React from 'react';
import './ServiceList.css';

const ServiceList = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Build responsive and modern websites'
    },
    {
      id: 2,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications'
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services'
    },
    {
      id: 4,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for your business'
    },
    {
      id: 5,
      title: 'Database Design',
      description: 'Optimized database architecture'
    },
    {
      id: 6,
      title: '24/7 Support',
      description: 'Round-the-clock customer support'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-item">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
