import React from 'react';

const Publications = ({ publications }) => {
  if (!publications || publications.length === 0) return null;

  return (
    <section id="publications" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Publications</h2>
        
        <div className="space-y-6">
          {publications.map((pub) => (
            <div key={pub.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition duration-200">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h3>
                  
                  <div className="text-gray-600 mb-3">
                    <span className="font-medium">{pub.authors.join(', ')}</span>
                  </div>
                  
                  <div className="text-gray-600 mb-3">
                    <span className="italic">{pub.journal}</span>
                    {pub.volume && (
                      <span>, {pub.year}, {pub.volume}({pub.issue}), {pub.pages}</span>
                    )}
                  </div>
                  
                  {pub.abstract && (
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{pub.abstract}</p>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {pub.type}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                      {pub.year}
                    </span>
                  </div>
                </div>
                
                <div className="lg:ml-6 mt-4 lg:mt-0 flex flex-col space-y-2">
                  {pub.pdf_url && (
                    <a
                      href={pub.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      PDF
                    </a>
                  )}
                  
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      DOI
                    </a>
                  )}
                  
                  {pub.external_url && (
                    <a
                      href={pub.external_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" />
                        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" />
                      </svg>
                      Link
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;