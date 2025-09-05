import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import { TrendingUp, AlertTriangle, DollarSign, Users, Calendar, Filter } from 'lucide-react';

const TrendsPage: React.FC = () => {
  const [dateRange, setDateRange] = useState('7d');
  const [amountFilter, setAmountFilter] = useState('all');

  // Mock data
  const fraudVsNormalData = [
    { name: 'Normal', value: 8240, percentage: 91.6 },
    { name: 'Fraud', value: 760, percentage: 8.4 }
  ];

  const trendData = [
    { date: '2024-01-10', normal: 1200, fraud: 85 },
    { date: '2024-01-11', normal: 1350, fraud: 92 },
    { date: '2024-01-12', normal: 1180, fraud: 78 },
    { date: '2024-01-13', normal: 1420, fraud: 115 },
    { date: '2024-01-14', normal: 1380, fraud: 103 },
    { date: '2024-01-15', normal: 1510, fraud: 128 },
    { date: '2024-01-16', normal: 1290, fraud: 89 }
  ];

  const amountDistribution = [
    { range: '0-500', count: 3240 },
    { range: '500-1K', count: 2180 },
    { range: '1K-5K', count: 1850 },
    { range: '5K-10K', count: 980 },
    { range: '10K+', count: 750 }
  ];

  const riskyAccounts = [
    { account: 'user2847', riskScore: 94, fraudCount: 15 },
    { account: 'merchant789', riskScore: 87, fraudCount: 12 },
    { account: 'user1234', riskScore: 82, fraudCount: 8 },
    { account: 'user9876', riskScore: 79, fraudCount: 7 },
    { account: 'merchant456', riskScore: 75, fraudCount: 6 }
  ];

  const COLORS = ['#10B981', '#EF4444'];

  const stats = [
    {
      title: 'Total Transactions',
      value: '9,000',
      change: '+12%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'blue'
    },
    {
      title: 'Fraud Detected',
      value: '760',
      change: '+8%',
      changeType: 'negative',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      title: 'Fraud Rate',
      value: '8.4%',
      change: '-2%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'orange'
    },
    {
      title: 'Active Users',
      value: '4,250',
      change: '+15%',
      changeType: 'positive',
      icon: Users,
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Fraud Detection Dashboard</h1>
          <p className="text-lg text-gray-600">
            Real-time insights and trends from your UPI transaction analysis
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filters:</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-gray-500" />
              <select
                value={amountFilter}
                onChange={(e) => setAmountFilter(e.target.value)}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All amounts</option>
                <option value="low">Under ₹1,000</option>
                <option value="medium">₹1,000 - ₹10,000</option>
                <option value="high">Above ₹10,000</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <span className={`text-sm font-medium px-2 py-1 rounded-lg ${
                  stat.changeType === 'positive' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Fraud vs Normal Pie Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Fraud vs Normal Transactions</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={fraudVsNormalData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {fraudVsNormalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value, name) => [`${value} (${fraudVsNormalData.find(d => d.name === name)?.percentage}%)`, name]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              {fraudVsNormalData.map((entry, index) => (
                <div key={entry.name} className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[index] }}></div>
                  <span className="text-sm text-gray-600">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction Amount Distribution */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Transaction Amount Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={amountDistribution}>
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
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Fraud Trend Over Time</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
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

        {/* Top Risky Accounts */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Risky Accounts</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Account ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Risk Score</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Fraud Count</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                {riskyAccounts.map((account, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">{account.account}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              account.riskScore >= 90 ? 'bg-red-500' :
                              account.riskScore >= 80 ? 'bg-orange-500' : 'bg-yellow-500'
                            }`}
                            style={{ width: `${account.riskScore}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{account.riskScore}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{account.fraudCount}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        account.riskScore >= 90 ? 'bg-red-100 text-red-800' :
                        account.riskScore >= 80 ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {account.riskScore >= 90 ? 'Critical' : account.riskScore >= 80 ? 'High' : 'Medium'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsPage;