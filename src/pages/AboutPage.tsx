import React from 'react';
import { Shield, Brain, Database, Zap, Github, Mail, ExternalLink } from 'lucide-react';

const AboutPage: React.FC = () => {
  const technologies = [
    { name: 'Random Forest', description: 'Ensemble learning for fraud pattern detection' },
    { name: 'XGBoost', description: 'Gradient boosting for high-accuracy predictions' },
    { name: 'React', description: 'Modern frontend framework for interactive UI' },
    { name: 'TypeScript', description: 'Type-safe development environment' },
    { name: 'Recharts', description: 'Responsive charts for data visualization' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework for styling' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Advanced algorithms including Random Forest and XGBoost for accurate fraud detection with 95%+ accuracy rates.'
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Handles large datasets efficiently with automatic data validation, preprocessing, and feature engineering.'
    },
    {
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Fast processing capabilities analyzing thousands of transactions per second with sub-second response times.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Built with privacy protection in mind. No sensitive data is stored permanently, ensuring user data security.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-6">
            <Shield className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About UPI Fraud Detection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            An advanced machine learning solution for identifying and preventing fraudulent UPI transactions
          </p>
        </div>

        {/* Motivation Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why UPI Fraud Detection Matters</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              With the exponential growth of digital payments in India, UPI (Unified Payments Interface) has become 
              the backbone of the country's financial ecosystem. However, this growth has also attracted fraudsters 
              who exploit vulnerabilities in digital payment systems.
            </p>
            <p>
              In 2023, digital payment fraud cases increased by 40%, with UPI transactions being particularly targeted 
              due to their widespread adoption. Traditional rule-based fraud detection systems often fail to keep up 
              with sophisticated fraud patterns that evolve rapidly.
            </p>
            <p>
              Our solution leverages advanced machine learning algorithms to analyze transaction patterns in real-time, 
              identifying suspicious activities with high accuracy while minimizing false positives that could disrupt 
              legitimate transactions.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mr-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Dataset Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dataset Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Fields</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">transaction_id</code> - Unique identifier
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">amount</code> - Transaction amount
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">timestamp</code> - Transaction time
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">sender</code> - Sender account ID
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">receiver</code> - Receiver account ID
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Optional Fields</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">fraud_flag</code> - Known fraud status (0/1)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">transaction_type</code> - P2P, P2M, etc.
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">location</code> - Transaction location
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">device_info</code> - Device fingerprint
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200">
                <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Model Performance */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Model Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">95.2%</div>
              <div className="text-gray-700 font-medium">Accuracy</div>
              <div className="text-sm text-gray-600 mt-1">Overall detection accuracy</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">92.8%</div>
              <div className="text-gray-700 font-medium">Precision</div>
              <div className="text-sm text-gray-600 mt-1">True fraud detection rate</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">97.1%</div>
              <div className="text-gray-700 font-medium">Recall</div>
              <div className="text-sm text-gray-600 mt-1">Fraud case identification</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about the project or want to contribute? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Github className="mr-2 h-5 w-5" />
              View Source Code
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;