import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AcademicCapIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const teachingExperience = [
  {
    id: 1,
    role: "Teaching Assistant",
    course: "CS 584: Machine Learning",
    institution: "University of Excellence",
    period: "Fall 2023 - Spring 2024",
    description: "Assisted in teaching graduate-level machine learning course, conducted lab sessions, graded assignments, and provided student mentorship.",
    responsibilities: [
      "Led weekly discussion sections for 30+ graduate students",
      "Designed and graded programming assignments in Python",
      "Held office hours and provided one-on-one student support",
      "Assisted in curriculum development and exam preparation"
    ]
  },
  {
    id: 2,
    role: "Guest Lecturer",
    course: "CS 425: Data Structures and Algorithms",
    institution: "University of Excellence",
    period: "Spring 2023",
    description: "Delivered guest lectures on advanced algorithmic techniques and their applications in machine learning.",
    responsibilities: [
      "Prepared and delivered 4 guest lectures",
      "Created interactive coding demonstrations",
      "Developed supplementary learning materials",
      "Mentored students on final projects"
    ]
  },
  {
    id: 3,
    role: "Research Mentor",
    course: "Undergraduate Research Program",
    institution: "University of Excellence",
    period: "2022 - Present",
    description: "Mentoring undergraduate students in research projects related to artificial intelligence and data science.",
    responsibilities: [
      "Supervised 8 undergraduate research projects",
      "Guided students through research methodology",
      "Co-authored papers with undergraduate researchers",
      "Organized weekly research group meetings"
    ]
  }
];

const awards = [
  {
    id: 1,
    title: "Outstanding Teaching Assistant Award",
    organization: "Department of Computer Science, University of Excellence",
    year: 2024,
    description: "Recognized for exceptional dedication to student learning and innovative teaching methods."
  },
  {
    id: 2,
    title: "Graduate Research Fellowship",
    organization: "National Science Foundation",
    year: 2023,
    description: "Competitive fellowship awarded for excellence in research and potential for continued contributions to the field."
  },
  {
    id: 3,
    title: "Best Student Paper Award",
    organization: "International Conference on Machine Learning",
    year: 2023,
    description: "Awarded for outstanding research contribution and presentation at ICML 2023."
  }
];

const TeachingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Teaching & Awards - Maheeshi Abeykoon</title>
        <meta name="description" content="Explore Maheeshi Abeykoon's teaching experience, mentorship activities, and academic awards and honors." />
      </Helmet>

      <div className="section-padding">
        <div className="container-width">
          {/* Teaching Experience Section */}
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Teaching Experience
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
              I am passionate about education and have been actively involved in teaching and mentoring 
              students at various levels. My teaching philosophy emphasizes hands-on learning, 
              critical thinking, and practical application of theoretical concepts.
            </p>

            <div className="space-y-8">
              {teachingExperience.map((experience) => (
                <div key={experience.id} className="card p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {experience.role}
                      </h2>
                      <h3 className="text-lg text-primary-600 dark:text-primary-400 mb-2">
                        {experience.course}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {experience.institution}
                        </div>
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {experience.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Key Responsibilities:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {experience.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards & Honors Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Awards & Honors
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Recognition for academic excellence, research contributions, and teaching effectiveness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award) => (
                <div key={award.id} className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AcademicCapIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {award.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {award.organization}
                  </p>
                  
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">
                    {award.year}
                  </p>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TeachingPage;