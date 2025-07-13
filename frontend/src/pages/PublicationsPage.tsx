import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowTopRightOnSquareIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const publications = [
  {
    id: 1,
    title: "Advanced Neural Networks for Pattern Recognition in Complex Data",
    authors: "Abeykoon, M., Smith, J., & Davis, K.",
    journal: "IEEE Transactions on Neural Networks and Learning Systems",
    year: 2024,
    type: "Journal Article",
    doi: "10.1109/TNNLS.2024.123456",
    pdfUrl: "/docs/publications/neural-networks-2024.pdf",
    abstract: "This paper presents novel approaches to pattern recognition using deep learning architectures optimized for complex, high-dimensional datasets. We introduce innovative techniques that significantly improve accuracy while reducing computational complexity."
  },
  {
    id: 2,
    title: "Efficient Algorithms for Large-Scale Data Processing",
    authors: "Abeykoon, M. & Wilson, R.",
    journal: "Proceedings of the International Conference on Machine Learning (ICML)",
    year: 2024,
    type: "Conference Paper",
    doi: "10.5555/icml.2024.789",
    pdfUrl: "/docs/publications/data-processing-2024.pdf",
    abstract: "We propose efficient algorithms that significantly reduce computational complexity while maintaining accuracy in large-scale data processing tasks. Our approach demonstrates up to 40% improvement in processing speed."
  },
  {
    id: 3,
    title: "Deep Learning Applications in Medical Image Analysis",
    authors: "Johnson, A., Abeykoon, M., Thompson, L., & Brown, S.",
    journal: "Nature Machine Intelligence",
    year: 2023,
    type: "Journal Article",
    doi: "10.1038/s42256-023-00123",
    pdfUrl: "/docs/publications/medical-imaging-2023.pdf",
    abstract: "This study explores the application of deep learning techniques to medical image analysis, showing promising results in automated diagnosis and treatment planning across multiple medical domains."
  },
  {
    id: 4,
    title: "Interpretable Machine Learning for Healthcare Applications",
    authors: "Abeykoon, M., Garcia, P., & Lee, H.",
    journal: "ACM Transactions on Computing for Healthcare",
    year: 2023,
    type: "Journal Article",
    doi: "10.1145/3567890.123",
    pdfUrl: "/docs/publications/interpretable-ml-2023.pdf",
    abstract: "We present methodologies for developing interpretable machine learning models specifically designed for healthcare applications, ensuring both accuracy and explainability for clinical decision-making."
  },
  {
    id: 5,
    title: "Optimization Techniques for Neural Network Training",
    authors: "Abeykoon, M.",
    journal: "arXiv preprint",
    year: 2023,
    type: "Preprint",
    doi: "arXiv:2023.12345",
    pdfUrl: "/docs/publications/optimization-preprint-2023.pdf",
    abstract: "This preprint introduces novel optimization techniques for training deep neural networks, focusing on convergence speed and stability in challenging optimization landscapes."
  }
];

const PublicationsPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');

  const types = ['All', 'Journal Article', 'Conference Paper', 'Preprint'];
  const years = ['All', '2024', '2023', '2022'];

  const filteredPublications = publications.filter(pub => {
    const typeMatch = selectedType === 'All' || pub.type === selectedType;
    const yearMatch = selectedYear === 'All' || pub.year.toString() === selectedYear;
    return typeMatch && yearMatch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Journal Article':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Conference Paper':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Preprint':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <>
      <Helmet>
        <title>Publications - Maheeshi Abeykoon</title>
        <meta name="description" content="Browse Maheeshi Abeykoon's academic publications, research papers, and contributions to scientific literature." />
      </Helmet>

      <div className="section-padding">
        <div className="container-width">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Publications
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
            My research contributions to the academic community, including peer-reviewed journal articles, 
            conference papers, and preprints spanning artificial intelligence, machine learning, and data science.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Type:</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Year:</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              Showing {filteredPublications.length} of {publications.length} publications
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.map((publication) => (
              <div key={publication.id} className="card p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {publication.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {publication.authors}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <em>{publication.journal}</em> ({publication.year})
                    </p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(publication.type)}`}>
                      {publication.type}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {publication.year}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {publication.abstract}
                </p>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                    DOI: {publication.doi}
                  </a>
                  <a
                    href={publication.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No publications found matching the selected filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PublicationsPage;