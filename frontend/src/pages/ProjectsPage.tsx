import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLinkIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    title: "Neural Network Optimization Framework",
    description: "A comprehensive framework for optimizing deep neural networks with novel pruning and quantization techniques.",
    status: "Completed",
    technologies: ["Python", "TensorFlow", "PyTorch", "CUDA"],
    githubUrl: "https://github.com/maheeshi/nn-optimization",
    demoUrl: "https://demo.example.com",
    publicationUrl: "https://arxiv.org/abs/example"
  },
  {
    id: 2,
    title: "Large-Scale Data Processing Pipeline",
    description: "Scalable data processing system capable of handling petabyte-scale datasets with real-time analytics.",
    status: "Ongoing",
    technologies: ["Apache Spark", "Kubernetes", "Python", "Apache Kafka"],
    githubUrl: "https://github.com/maheeshi/data-pipeline",
    demoUrl: null,
    publicationUrl: null
  },
  {
    id: 3,
    title: "Computer Vision for Medical Imaging",
    description: "Deep learning models for automated medical image analysis and diagnostic assistance.",
    status: "In Review",
    technologies: ["Python", "OpenCV", "TensorFlow", "Medical Imaging"],
    githubUrl: null,
    demoUrl: "https://medical-demo.example.com",
    publicationUrl: "https://arxiv.org/abs/medical-example"
  },
  {
    id: 4,
    title: "Natural Language Understanding System",
    description: "Advanced NLP system for context-aware text understanding and generation.",
    status: "Published",
    technologies: ["Python", "Transformers", "BERT", "GPT"],
    githubUrl: "https://github.com/maheeshi/nlu-system",
    demoUrl: "https://nlu-demo.example.com",
    publicationUrl: "https://papers.example.com/nlu"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'Ongoing':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case 'In Review':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'Published':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
};

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Maheeshi Abeykoon</title>
        <meta name="description" content="Explore Maheeshi Abeykoon's research projects, code repositories, and innovative solutions in AI and computer science." />
      </Helmet>

      <div className="section-padding">
        <div className="container-width">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Research Projects
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
            A collection of my research projects spanning machine learning, data science, 
            and artificial intelligence. Each project represents a contribution to advancing 
            the field through innovative solutions and methodologies.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <CodeBracketIcon className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <ExternalLinkIcon className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  )}
                  {project.publicationUrl && (
                    <a
                      href={project.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <ExternalLinkIcon className="h-4 w-4 mr-1" />
                      Publication
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;