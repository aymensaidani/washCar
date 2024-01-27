import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const ServicePackage = ({ title, price, features }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: config.slow, // Use config.slow to slow down the animation
  });

  return (
    <animated.div
      ref={ref}
      style={animation}
      className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
    >
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">{price} TD</span>
      </div>
      <ul className="mb-8 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="/"
        className="text-primary-600 hover:text-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
        style={{ backgroundColor: '#FFA500' }}
      >
        Get started
      </a>
    </animated.div>
  );
};

const PlanTrip = () => {
  const servicePackages = [
    {
      title: 'Basic wash',
      price: 20,
      features: ['Exterior wash', 'Hand drying', 'Windows and mirrors', 'Tire and wheel cleaning'],
    },
    {
      title: 'Standard wash',
      price: 40,
      features: ['All basic wash services', 'Waxing', 'Interior detailing', 'Triple foam wash'],
    },
    {
      title: 'Premium wash',
      price: 85,
      features: [
        'All standard wash services',
        'Oil Changing',
        'Window Wiping',
        'Vacuum Cleaning',
      ],
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-20">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Service packages for everyone
          </h2>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {servicePackages.map((packageData, index) => (
            <ServicePackage key={index} {...packageData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
