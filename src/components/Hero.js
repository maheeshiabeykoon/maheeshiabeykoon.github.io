import React from 'react';

const Hero = ({ profile }) => {
  if (!profile) return null;

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-4xl font-bold text-gray-600 mb-6">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {profile.name}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            {profile.title}
          </p>
          
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {profile.bio}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {profile.cv_url && (
              <a
                href={profile.cv_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </a>
            )}
            
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition duration-200 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                LinkedIn
              </a>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {profile.research_interests?.map((interest, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;