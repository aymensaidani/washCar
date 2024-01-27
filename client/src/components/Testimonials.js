import React from 'react';


const Testimonials = () => {

  const testimonials = [
    {
      quote:
        "I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.",
      author: 'Bonnie Green',
      role: 'Developer at Open AI',
      avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
    },
    {
      quote:
        'FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.',
      author: 'Roberta Casas',
      role: 'Lead designer at Dropbox',
      avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png',
    },
    {
      quote:
        "As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯. Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit). Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
      author: 'Jese Leos',
      role: 'Software Engineer at Facebook',
      avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
    },
    {
      quote:
        'This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind. You have many examples that can be used to create a fast prototype for your team.',
      author: 'Joseph McFall',
      role: 'CTO at Google',
      avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png',
    },
  ];


  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="bg-gray py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p>
        </div> 
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          {testimonials.map((item)=>(

            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Speechless with how easy this was to integrate</h3>
                    <p className="my-4">{item.quote}</p>
               
                </blockquote>

                <figcaption className="flex justify-center items-center space-x-3">
                    <img className="w-9 h-9 rounded-full" src={item.avatar} alt="profile "/>
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>{item.author}</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">{item.role}</div>
                    </div>
                </figcaption>    
            </figure>
          ))}
            
        </div>
        <div className="text-center">
            <a href="/" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-orange rounded-lg hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</a> 
        </div>
        </div>
  </section>
  );
};

export default Testimonials;
