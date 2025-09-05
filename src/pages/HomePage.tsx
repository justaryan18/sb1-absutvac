import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, TrendingUp, Shield, AlertTriangle, BarChart3, FileCheck } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-6">
            <Shield className="h-12 w-12 text-white" />
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            UPI Fraud Detection
            <span className="block text-3xl sm:text-5xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mt-2">
              Dashboard
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Upload your dataset, analyze fraud patterns, and detect suspicious UPI transactions 
            using advanced machine learning algorithms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/upload"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Upload className="mr-3 h-5 w-5" />
              Upload Dataset
            </Link>
            
            <Link
              to="/trends"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <TrendingUp className="mr-3 h-5 w-5" />
              View Trends
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Powerful Fraud Detection Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-200">
                <Upload className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Data Upload</h3>
              <p className="text-gray-600 leading-relaxed">
                Drag and drop your CSV or Excel files with transaction data. 
                Get instant preview and validation of your dataset.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-200">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visual Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive charts showing fraud vs normal transactions, 
                trends over time, and transaction amount distributions.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="p-3 bg-gradient-to-br from-red-100 to-red-200 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-200">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fraud Detection</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced ML algorithms identify suspicious patterns and 
                flag potentially fraudulent transactions with confidence scores.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-200">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trend Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Track fraud patterns over time, identify peak fraud periods, 
                and monitor transaction volume trends.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="p-3 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-200">
                <FileCheck className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Export Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Download processed results with fraud probability scores 
                and detailed analysis reports for further investigation.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-200">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Your data is processed securely with privacy protection. 
                No sensitive information is stored permanently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Detection Accuracy</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">&lt;1s</div>
              <div className="text-gray-600">Processing Time</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">100K+</div>
              <div className="text-gray-600">Transactions Analyzed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;