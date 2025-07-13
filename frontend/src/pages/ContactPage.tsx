import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon, 
  PhoneIcon,
  BuildingOfficeIcon 
} from '@heroicons/react/24/outline';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Maheeshi Abeykoon</title>
        <meta name="description" content="Get in touch with Maheeshi Abeykoon. Find contact information, office hours, and location details." />
      </Helmet>

      <div className="section-padding">
        <div className="container-width">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Contact Me
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
            I'm always open to discussing research collaborations, academic opportunities, 
            or answering questions about my work. Feel free to reach out through any of the channels below.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <EnvelopeIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Email</h3>
                    <a 
                      href="mailto:maheeshi.abeykoon@university.edu" 
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      maheeshi.abeykoon@university.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <BuildingOfficeIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Office</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Research Building, Room 301<br />
                      Department of Computer Science<br />
                      University of Excellence
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 University Drive<br />
                      Excellence City, ST 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ClockIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Office Hours</h3>
                    <div className="text-gray-600 dark:text-gray-400">
                      <p>Monday - Friday: 2:00 PM - 4:00 PM</p>
                      <p>Or by appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Connect Online
              </h2>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="https://scholar.google.com/citations?user=example" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Google Scholar</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">View my publications and citations</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/maheeshi-abeykoon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">LinkedIn</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Professional networking and updates</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/maheeshiabeykoon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">GitHub</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Code repositories and projects</p>
                  </div>
                </a>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Looking for collaboration?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I'm always interested in collaborating on research projects, 
                  speaking at conferences, or discussing potential opportunities. 
                  Please don't hesitate to reach out!
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                    Research Collaboration
                  </span>
                  <span className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                    Speaking Engagements
                  </span>
                  <span className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                    Mentorship
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;