import React from 'react';

const DevicePerformanceMetrics = () => {
  const LineChart = ({ data, color = '#3B82F6' }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = range === 0 ? 50 : ((max - value) / range) * 80 + 10;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="relative h-16 w-full">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
            className="drop-shadow-sm"
          />
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <polygon
            points={`0,100 ${points} 100,100`}
            fill={`url(#gradient-${color})`}
          />
        </svg>
      </div>
    );
  };

  const cpuData = [15, 25, 35, 45, 30, 20, 18];
  const ramData = [45, 50, 60, 65, 70, 65, 65];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Device Performance Metrics</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="space-y-6">
        {/* CPU Load */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">CPU Load (avg)</span>
            <span className="text-lg font-semibold text-blue-600">18%</span>
          </div>
          <LineChart data={cpuData} color="#3B82F6" />
        </div>

        {/* RAM Usage */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">RAM Usage</span>
            <span className="text-lg font-semibold text-blue-600">65%</span>
          </div>
          <LineChart data={ramData} color="#6366F1" />
        </div>
      </div>

      {/* Time indicators */}
      <div className="flex justify-between text-xs text-gray-500 mt-4">
        <span>12</span>
        <span>14</span>
        <span>16</span>
        <span>18</span>
        <span>20</span>
        <span>22</span>
        <span>24 H</span>
      </div>
    </div>
  );
};

export default DevicePerformanceMetrics;