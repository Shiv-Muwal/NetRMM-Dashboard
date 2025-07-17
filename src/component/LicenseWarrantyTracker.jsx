import React from 'react';

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
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
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