import React, { useState, useCallback } from 'react';
import { Upload, FileCheck, AlertCircle, Download, Play, TrendingUp, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const UploadDataPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewData, setPreviewData] = useState<any[]>([]);
  const [isProcessed, setIsProcessed] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    handleFileSelection(droppedFile);
  }, []);

  const handleFileSelection = (selectedFile: File) => {
    if (selectedFile && (selectedFile.type === 'text/csv' || selectedFile.name.endsWith('.xlsx'))) {
      setFile(selectedFile);
      setIsProcessed(false);
      setResults(null);
      // Mock preview data
      setPreviewData([
        { transaction_id: 'TXN001', amount: 1500, sender: 'user123', receiver: 'merchant456', timestamp: '2024-01-15 10:30' },
        { transaction_id: 'TXN002', amount: 5000, sender: 'user456', receiver: 'user789', timestamp: '2024-01-15 11:45' },
        { transaction_id: 'TXN003', amount: 200, sender: 'user789', receiver: 'merchant123', timestamp: '2024-01-15 12:15' },
        { transaction_id: 'TXN004', amount: 15000, sender: 'user111', receiver: 'user222', timestamp: '2024-01-15 13:30' },
        { transaction_id: 'TXN005', amount: 800, sender: 'user333', receiver: 'merchant789', timestamp: '2024-01-15 14:20' }
      ]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFileSelection(selectedFile);
    }
  };

  const runAnalysis = async () => {
    setIsProcessing(true);
    // Simulate analysis processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsProcessed(true);
      
      // Mock results data
      setResults({
        summary: {
          totalTransactions: 9000,
          fraudDetected: 760,
          fraudRate: 8.4,
          accuracy: 95.2
        },
        fraudVsNormal: [
          { name: 'Normal', value: 8240, percentage: 91.6 },
          { name: 'Fraud', value: 760, percentage: 8.4 }
        ],
        trendData: [
          { date: '2024-01-10', normal: 1200, fraud: 85 },
          { date: '2024-01-11', normal: 1350, fraud: 92 },
          { date: '2024-01-12', normal: 1180, fraud: 78 },
          { date: '2024-01-13', normal: 1420, fraud: 115 },
          { date: '2024-01-14', normal: 1380, fraud: 103 },
          { date: '2024-01-15', normal: 1510, fraud: 128 },
          { date: '2024-01-16', normal: 1290, fraud: 89 }
        ],
        amountDistribution: [
          { range: '0-500', count: 3240 },
          { range: '500-1K', count: 2180 },
          { range: '1K-5K', count: 1850 },
          { range: '5K-10K', count: 980 },
          { range: '10K+', count: 750 }
        ],
        flaggedTransactions: [
          { transaction_id: 'TXN004', amount: 15000, sender: 'user111', receiver: 'user222', fraudProbability: 94.2, riskLevel: 'Critical' },
          { transaction_id: 'TXN007', amount: 25000, sender: 'user555', receiver: 'user666', fraudProbability: 89.7, riskLevel: 'High' },
          { transaction_id: 'TXN012', amount: 8500, sender: 'user777', receiver: 'merchant999', fraudProbability: 82.3, riskLevel: 'High' },
          { transaction_id: 'TXN018', amount: 12000, sender: 'user888', receiver: 'user999', fraudProbability: 78.9, riskLevel: 'Medium' },
          { transaction_id: 'TXN023', amount: 6500, sender: 'user101', receiver: 'user202', fraudProbability: 75.4, riskLevel: 'Medium' }
        ]
      });
    }, 3000);
  };

  const downloadResults = () => {
    // Mock download functionality
    const blob = new Blob(['Processed fraud detection results...'], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fraud_analysis_results.csv';
    a.click();
  };

  const COLORS = ['#10B981', '#EF4444'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Upload Transaction Dataset</h1>
          <p className="text-lg text-gray-600">
            Upload your CSV or Excel file containing UPI transaction data for fraud analysis
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
              isDragging
                ? 'border-blue-500 bg-blue-50'
                : file
                ? 'border-green-500 bg-green-50'
                : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {file ? (
              <div className="space-y-4">
                <FileCheck className="mx-auto h-16 w-16 text-green-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{file.name}</h3>
                  <p className="text-sm text-gray-500">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={() => {
                    setFile(null);
                    setPreviewData([]);
                    setIsProcessed(false);
                    setResults(null);
                  }}
                  className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                >
                  Remove File
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <Upload className="mx-auto h-16 w-16 text-gray-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Drop your dataset here or click to browse
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Supports CSV and Excel files up to 50MB
                  </p>
                  <input
                    type="file"
                    accept=".csv,.xlsx"
                    onChange={handleFileInput}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 cursor-pointer transition-colors duration-200"
                  >
                    Choose File
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Dataset Requirements:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Include columns: transaction_id, amount, timestamp, sender, receiver</li>
                  <li>• Optional: fraud_flag (0/1), transaction_type, location</li>
                  <li>• Ensure timestamps are in YYYY-MM-DD HH:MM format</li>
                  <li>• Amount values should be numeric</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        {previewData.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Data Preview (First 5 rows)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {Object.keys(previewData[0]).map((key) => (
                      <th
                        key={key}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {key.replace('_', ' ')}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {previewData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      {Object.values(row).map((value, colIdx) => (
                        <td key={colIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {String(value)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analysis Section */}
        {file && !isProcessed && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Run Fraud Analysis</h2>
            
            <div className="text-center">
              <button
                onClick={runAnalysis}
                disabled={isProcessing}
                className={`inline-flex items-center px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
                  isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transform hover:scale-105'
                } text-white shadow-lg`}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Play className="mr-3 h-5 w-5" />
                    Start Analysis
                  </>
                )}
              </button>
              
              {isProcessing && (
                <div className="mt-4 text-sm text-gray-600">
                  Running machine learning fraud detection algorithm...
                </div>
              )}
            </div>
          </div>
        )}

        {/* Results Section */}
        {isProcessed && results && (
          <div className="space-y-8">
            {/* Summary Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Analysis Results</h2>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Analysis Complete</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-900">{results.summary.totalTransactions.toLocaleString()}</div>
                  <div className="text-sm text-blue-700">Total Transactions</div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-red-900">{results.summary.fraudDetected}</div>
                  <div className="text-sm text-red-700">Fraud Detected</div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <XCircle className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-orange-900">{results.summary.fraudRate}%</div>
                  <div className="text-sm text-orange-700">Fraud Rate</div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-900">{results.summary.accuracy}%</div>
                  <div className="text-sm text-green-700">Model Accuracy</div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={downloadResults}
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <Download className="mr-3 h-5 w-5" />
                  Download Full Results
                </button>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Fraud vs Normal Pie Chart */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Fraud vs Normal Transactions</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={results.fraudVsNormal}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {results.fraudVsNormal.map((entry: any, index: number) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: any, name: any) => [`${value} (${results.fraudVsNormal.find((d: any) => d.name === name)?.percentage}%)`, name]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center space-x-6 mt-4">
                  {results.fraudVsNormal.map((entry: any, index: number) => (
                    <div key={entry.name} className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[index] }}></div>
                      <span className="text-sm text-gray-600">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transaction Amount Distribution */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Transaction Amount Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={results.amountDistribution}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="range" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Bar dataKey="count" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Fraud Trend Over Time */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Fraud Trend Over Time</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={results.trendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="normal" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', r: 4 }} />
                    <Line type="monotone" dataKey="fraud" stroke="#EF4444" strokeWidth={3} dot={{ fill: '#EF4444', r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600">Normal Transactions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm text-gray-600">Fraud Transactions</span>
                </div>
              </div>
            </div>

            {/* Flagged Transactions Table */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Top Flagged Transactions</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Transaction ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Sender</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Receiver</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Fraud Probability</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.flaggedTransactions.map((transaction: any, index: number) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-mono text-sm">{transaction.transaction_id}</td>
                        <td className="py-3 px-4 font-semibold">₹{transaction.amount.toLocaleString()}</td>
                        <td className="py-3 px-4 text-sm">{transaction.sender}</td>
                        <td className="py-3 px-4 text-sm">{transaction.receiver}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-20">
                              <div
                                className={`h-2 rounded-full ${
                                  transaction.fraudProbability >= 90 ? 'bg-red-500' :
                                  transaction.fraudProbability >= 80 ? 'bg-orange-500' : 'bg-yellow-500'
                                }`}
                                style={{ width: `${transaction.fraudProbability}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium">{transaction.fraudProbability}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            transaction.riskLevel === 'Critical' ? 'bg-red-100 text-red-800' :
                            transaction.riskLevel === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {transaction.riskLevel}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadDataPage;