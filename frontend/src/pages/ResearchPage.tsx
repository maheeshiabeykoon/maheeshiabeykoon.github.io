import React from 'react';
import { Helmet } from 'react-helmet-async';

const ResearchPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Research - Maheeshi Abeykoon</title>
        <meta name="description" content="Explore Maheeshi Abeykoon's research interests, current projects, and contributions to computer science and AI." />
      </Helmet>

      <div className="section-padding">
        <div className="container-width">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Research Interests
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Machine Learning & AI
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Developing novel algorithms for supervised and unsupervised learning, 
                with a focus on interpretability and efficiency.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Deep Neural Networks</li>
                <li>Reinforcement Learning</li>
                <li>Transfer Learning</li>
                <li>Explainable AI</li>
              </ul>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Data Science & Analytics
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Exploring big data processing techniques and statistical modeling 
                for extracting insights from complex datasets.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Big Data Processing</li>
                <li>Statistical Modeling</li>
                <li>Data Visualization</li>
                <li>Predictive Analytics</li>
              </ul>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Computer Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Investigating advanced techniques for image processing, object detection, 
                and visual pattern recognition.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Object Detection</li>
                <li>Image Segmentation</li>
                <li>Feature Extraction</li>
                <li>Video Analysis</li>
              </ul>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Natural Language Processing
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Working on language understanding, text analysis, and 
                conversational AI systems.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Text Classification</li>
                <li>Sentiment Analysis</li>
                <li>Language Models</li>
                <li>Information Extraction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchPage;