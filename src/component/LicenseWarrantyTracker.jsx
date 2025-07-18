import React from 'react';
import { CustomIcons } from '../components/icons';

const LicenseWarrantyTracker = () => {
  const ProgressBar = ({ percentage, color = 'blue' }) => {
    const colorClasses = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      red: 'bg-red-500'
    };

    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ${colorClasses[color]}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">License & Warranty Tracker</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <CustomIcons.DotsMenu />
        </button>
      </div>

      <div className="space-y-6">
        {/* Devices undo */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Devices undo.</span>
            <span className="text-lg font-semibold text-gray-800">13</span>
          </div>
          <div className="flex items-center space-x-2">
            <ProgressBar percentage={85} color="blue" />
            <span className="text-sm text-gray-600">2%</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">community</p>
        </div>

        {/* Antivirus up */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Antivirus up-</span>
            <span className="text-lg font-semibold text-gray-800">3%</span>
          </div>
          <div className="flex items-center space-x-2">
            <ProgressBar percentage={65} color="blue" />
          </div>
          <p className="text-xs text-gray-500 mt-1">up-face</p>
        </div>
      </div>
    </div>
  );
};

export default LicenseWarrantyTracker;