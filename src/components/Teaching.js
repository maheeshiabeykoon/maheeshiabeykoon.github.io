import React from 'react';

const Teaching = ({ teaching }) => {
  if (!teaching || teaching.length === 0) return null;

  return (
    <section id="teaching" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Teaching Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teaching.map((course) => (
            <div key={course.id} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition duration-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{course.course}</h3>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                  {course.semester}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{course.institution}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>{course.role}</span>
                </div>
                
                {course.students && (
                  <div className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    <span>{course.students} students</span>
                  </div>
                )}
              </div>
              
              {course.description && (
                <p className="text-gray-700 text-sm leading-relaxed">{course.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teaching;