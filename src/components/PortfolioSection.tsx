'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: 'Aroma Coffee',
      description: 'Aroma Coffee is a fictional specialty coffee brand, The website was fully designed and built by me, showcasing a modern aesthetic, warm visuals, and a seamless user experience',
      image: '/images/laptopscreen3.webp',
      link: 'https://steady-gnome-0da5b4.netlify.app/',
    },
    {
      title: 'Beach 2 Bush Carpentry',
      description: 'A real carpentry business specializing in outdoor projects. I designed their website to showcase their services, including custom decks and renovations, with a modern, user-friendly layout.',
      image: '/images/portfolio2.webp',
      link: 'https://comforting-gumption-af5f03.netlify.app/',
    },
    {
      title: 'CMS Bribie Island Inc',
      description: 'A Men\'s Shed community promoting health, skills, and connection. I designed their site to showcase their mission, projects, and team while making it easy for new members and sponsors to get involved.',
      image: '/images/portfolio3.webp',
      link: 'https://guileless-fenglisu-cda84a.netlify.app/',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto px-0 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left column: Titles with vertical line */}
            <div className="md:pr-8 md:border-r md:border-gray-300">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 block mb-2 text-left">
                Portfolio
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-0 text-left">
                SOME OF THE WORK WE&apos;VE DONE OVER THE YEARS
              </h2>
            </div>
          </div>
        </div>

        {/* Portfolio Item Cards */}
        <ul className="grid lg:grid-cols-3 gap-8 mb-16 list-none p-0">
          {portfolioItems.map((item) => (
            <li className="flex flex-col h-full" key={item.title}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 group h-full"
              >
                <div className="block">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full p-4 h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{item.description}</p>
                  <div className="mt-auto">
                    <span
                      className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold text-sm text-center transition-all duration-300
                        hover:from-blue-700 hover:to-purple-700 hover:scale-105
                        shadow w-max cursor-pointer select-none"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PortfolioSection;