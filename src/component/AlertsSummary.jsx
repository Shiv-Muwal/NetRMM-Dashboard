import React from 'react';

const AlertsSummary = () => {
  const CircularProgress = ({ percentage, color = "blue" }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    
    const colorClasses = {
      blue: "stroke-blue-500",
      green: "stroke-green-500"
    };

    return (
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={colorClasses[color]}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-800">{percentage}</span>
          <span className="text-xs text-gray-600">Last day</span>
        </div>
      </div>
    );
  };

  const MiniChart = () => {
    const data = [15, 25, 35, 45, 55, 65, 75];
    const max = Math.max(...data);
    
    return (
      <div className="flex items-end space-x-1 h-16">
        {data.map((value, index) => (
          <div
            key={index}
            className="bg-blue-500 rounded-sm w-2"
            style={{ height: `${(value / max) * 100}%` }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">ALERTS SUMMARY</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 mb-2">Last 7 & days</p>
        <MiniChart />
      </div>

      <div className="mb-6">
        <CircularProgress percentage={78} color="blue" />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Devices up-date</span>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-800">234</span>
            <span className="text-lg font-semibold text-gray-800">24</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsSummary;