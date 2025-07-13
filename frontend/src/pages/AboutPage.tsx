import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Maheeshi Abeykoon</title>
        <meta name="description" content="Learn more about Maheeshi Abeykoon's academic background, research interests, and personal journey in computer science." />
      </Helmet>

      <div className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              About Me
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I am a passionate PhD researcher in Computer Science with a focus on artificial intelligence, 
                machine learning, and data science. My journey in academia has been driven by curiosity 
                and a desire to solve complex real-world problems through computational approaches.
              </p>

              <h2>Academic Background</h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-2">PhD in Computer Science (Expected 2025)</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">University of Excellence</p>
                <p>Dissertation: "Advanced Machine Learning Techniques for Complex Data Analysis"</p>
                
                <h3 className="text-lg font-semibold mb-2 mt-6">Master of Science in Computer Science (2021)</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">University of Technology</p>
                <p>Thesis: "Deep Learning Applications in Pattern Recognition"</p>
                
                <h3 className="text-lg font-semibold mb-2 mt-6">Bachelor of Science in Computer Science (2019)</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">State University</p>
                <p>Graduated Summa Cum Laude, GPA: 3.9/4.0</p>
              </div>

              <h2>Research Philosophy</h2>
              <p>
                My research is guided by the belief that artificial intelligence should be accessible, 
                ethical, and beneficial to society. I strive to develop algorithms that are not only 
                theoretically sound but also practically applicable to real-world challenges.
              </p>

              <h2>Personal Interests</h2>
              <p>
                Outside of academia, I enjoy hiking, photography, and reading science fiction novels. 
                I'm also passionate about mentoring undergraduate students and promoting diversity 
                in STEM fields. In my free time, you'll often find me exploring new coffee shops 
                or working on personal coding projects.
              </p>

              <h2>Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold mb-3">Programming Languages</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Python</li>
                    <li>R</li>
                    <li>JavaScript/TypeScript</li>
                    <li>Java</li>
                    <li>C++</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Technologies & Tools</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>TensorFlow & PyTorch</li>
                    <li>Scikit-learn</li>
                    <li>Docker & Kubernetes</li>
                    <li>Git & GitHub</li>
                    <li>AWS & Google Cloud</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;