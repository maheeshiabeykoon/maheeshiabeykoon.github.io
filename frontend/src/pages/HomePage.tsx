import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowDownIcon, DocumentArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Maheeshi Abeykoon - Academic Researcher</title>
        <meta name="description" content="PhD researcher specializing in computer science and artificial intelligence. Explore my research, publications, and academic work." />
        <meta name="keywords" content="academic, researcher, PhD, computer science, artificial intelligence, publications" />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Maheeshi 
                <span className="text-primary-600 dark:text-primary-400"> Abeykoon</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                <p className="mb-2">PhD Researcher</p>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Department of Computer Science<br />
                  University of Excellence
                </p>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Passionate researcher exploring the frontiers of artificial intelligence, machine learning, 
                and their applications in solving real-world problems. Currently focused on developing 
                innovative algorithms for data analysis and computational intelligence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/research" 
                  className="btn-primary text-center"
                >
                  Explore My Research
                </Link>
                <a 
                  href="/docs/cv.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary text-center flex items-center justify-center"
                >
                  <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                  Download CV
                </a>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-4 py-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  Contact Me
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">8</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Awards</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NTIzOTE1NjR8MA&ixlib=rb-4.1.0&q=85"
                    alt="Maheeshi Abeykoon"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 dark:bg-primary-900 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16">
            <div className="animate-bounce">
              <ArrowDownIcon className="h-6 w-6 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research Areas */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Research Focus Areas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My research spans multiple domains within computer science and artificial intelligence, 
              with a focus on practical applications and theoretical foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Research Area 1 */}
            <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Machine Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Developing novel algorithms for supervised and unsupervised learning, 
                with applications in pattern recognition and predictive modeling.
              </p>
            </div>

            {/* Research Area 2 */}
            <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Data Science
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Exploring big data analytics, statistical modeling, and visualization techniques 
                to extract meaningful insights from complex datasets.
              </p>
            </div>

            {/* Research Area 3 */}
            <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Deep Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Investigating neural network architectures, optimization techniques, 
                and their applications in computer vision and natural language processing.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/research" className="btn-primary">
              Learn More About My Research
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Publications Preview */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Publications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Latest contributions to the academic community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Publication 1 */}
            <div className="card p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                  Journal Article
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Advanced Neural Networks for Pattern Recognition in Complex Data
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <strong>Abeykoon, M.</strong>, Smith, J., & Davis, K. (2024). 
                <em> IEEE Transactions on Neural Networks and Learning Systems</em>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                This paper presents novel approaches to pattern recognition using deep learning 
                architectures optimized for complex, high-dimensional datasets...
              </p>
            </div>

            {/* Publication 2 */}
            <div className="card p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">
                  Conference Paper
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Efficient Algorithms for Large-Scale Data Processing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <strong>Abeykoon, M.</strong> & Wilson, R. (2024). 
                <em> Proceedings of the International Conference on Machine Learning</em>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                We propose efficient algorithms that significantly reduce computational complexity 
                while maintaining accuracy in large-scale data processing tasks...
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/publications" className="btn-primary">
              View All Publications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;