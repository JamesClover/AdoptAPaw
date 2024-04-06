import React from 'react';

function Testimonials() {
  // Dummy data for testimonials (you can replace this with actual data from your users)
  const testimonials = [
    {
      id: 1,
      name: 'Jane Doe',
      message: 'I adopted my beloved cat from this website, and it was such a wonderful experience! The staff were friendly and helpful, and my cat has brought so much joy into my life.',
    },
    {
      id: 2,
      name: 'John Smith',
      message: 'I can\'t thank this website enough for helping me find the perfect cat for my family. The adoption process was smooth, and we couldn\'t be happier with our new furry friend!',
    },
    {
      id: 3,
      name: 'Random Nice Person',
      message: 'Adopting from this website was one of the best decisions I ever made. My cat is my constant companion, and I can\'t imagine life without her. Thank you for everything!',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Testimonials</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <blockquote>
                  <div className="text-lg">
                    <p className="text-gray-900">{testimonial.message}</p>
                  </div>
                  <footer className="mt-4">
                    <p className="text-base font-medium text-gray-500">{testimonial.name}</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
