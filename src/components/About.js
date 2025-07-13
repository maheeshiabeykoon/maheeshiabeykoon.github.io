import React from 'react';

const About = ({ profile }) => {
  if (!profile) return null;

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Biography */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4 leading-relaxed">{profile.bio}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Research Interests</h3>
              <ul className="list-disc list-inside space-y-2">
                {profile.research_interests?.map((interest, index) => (
                  <li key={index} className="text-gray-700">{interest}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education & Contact */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              {profile.education?.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.location} • {edu.year}</p>
                  {edu.details && (
                    <p className="text-gray-700 text-sm mt-2">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Contact Information</h3>
            <div className="space-y-3">
              {profile.email && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href={`mailto:${profile.email}`} className="text-blue-600 hover:text-blue-800">
                    {profile.email}
                  </a>
                </div>
              )}
              
              {profile.phone && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-700">{profile.phone}</span>
                </div>
              )}
              
              {profile.location && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{profile.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;