import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface SearchResult {
  type: 'publication' | 'project' | 'page';
  title: string;
  content: string;
  url: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Sample data for search - in a real app this would come from an API or search index
  const searchData: SearchResult[] = [
    {
      type: 'publication',
      title: 'Advanced Neural Networks for Pattern Recognition in Complex Data',
      content: 'This paper presents novel approaches to pattern recognition using deep learning architectures optimized for complex, high-dimensional datasets.',
      url: '/publications'
    },
    {
      type: 'publication',
      title: 'Efficient Algorithms for Large-Scale Data Processing',
      content: 'We propose efficient algorithms that significantly reduce computational complexity while maintaining accuracy in large-scale data processing tasks.',
      url: '/publications'
    },
    {
      type: 'project',
      title: 'Neural Network Optimization Framework',
      content: 'A comprehensive framework for optimizing deep neural networks with novel pruning and quantization techniques.',
      url: '/projects'
    },
    {
      type: 'project',
      title: 'Computer Vision for Medical Imaging',
      content: 'Deep learning models for automated medical image analysis and diagnostic assistance.',
      url: '/projects'
    },
    {
      type: 'page',
      title: 'About Me',
      content: 'PhD researcher in Computer Science with a focus on artificial intelligence, machine learning, and data science.',
      url: '/about'
    },
    {
      type: 'page',
      title: 'Research Interests',
      content: 'Machine learning, data science, computer vision, natural language processing, and artificial intelligence.',
      url: '/research'
    }
  ];

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate search delay
    const timeoutId = setTimeout(() => {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleResultClick = (url: string) => {
    window.location.href = url;
    onClose();
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'publication':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'project':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'page':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-start justify-center p-4 pt-16">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
        
        <div className="relative w-full max-w-2xl transform rounded-lg bg-white dark:bg-gray-800 shadow-xl transition-all">
          <div className="flex items-center border-b border-gray-200 dark:border-gray-700 p-4">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search publications, projects, and pages..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 border-0 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-0"
              autoFocus
            />
            <button
              onClick={onClose}
              className="ml-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto p-4">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-3">
                {results.map((result, index) => (
                  <div
                    key={index}
                    onClick={() => handleResultClick(result.url)}
                    className="cursor-pointer rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {result.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(result.type)}`}>
                        {result.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {result.content}
                    </p>
                  </div>
                ))}
              </div>
            ) : query.length >= 2 ? (
              <div className="text-center py-8">
                <MagnifyingGlassIcon className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-3" />
                <p className="text-gray-500 dark:text-gray-400">No results found for "{query}"</p>
              </div>
            ) : (
              <div className="text-center py-8">
                <MagnifyingGlassIcon className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-3" />
                <p className="text-gray-500 dark:text-gray-400">Type at least 2 characters to search</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;