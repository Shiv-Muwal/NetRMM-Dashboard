import React from 'react';
import { CustomIcons, ChartComponents } from '../components/icons';

const AlertsSummary = () => {
  // Using centralized CircularProgress component from icons.jsx

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
          <CustomIcons.DotsMenu />
        </button>
      </div>

      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 mb-2">Last 7 & days</p>
        <MiniChart />
      </div>

      <div className="mb-6">
                    <ChartComponents.CircularProgress percentage={78} color="blue" size={32} />
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