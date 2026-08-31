'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Ryan Postell',
      role: 'Owner, Lead Developer',
      image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/7c52c497-ed1a-4311-bfae-bee3726a9013/f10ee62fc9885c02cae5a1d4418d4cb9.jpg',
    },
    {
      name: 'Alyse Garcia',
      role: 'Front End Developer, Support',
      image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/7c52c497-ed1a-4311-bfae-bee3726a9013/3c46cc7f40466e873135ccae205a4b1d.jpg',
    },
    {
      name: 'Ethan Hawes',
      role: 'Developer, Support, Shopify',
      image: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/7c52c497-ed1a-4311-bfae-bee3726a9013/74405c8c8f4f98a9ab10f28323d200ee.jpg',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg">OUR TEAM</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Meet the Team Behind{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Takiso Web Designs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Every team member has extensive experience, knowledge, and skills in their respective fields that have been honed and perfected over many years.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;