import React from 'react';
import { CustomIcons } from '../components/icons';

const SoftwareDeploymentStatus = () => {
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
        <h3 className="text-lg font-semibold text-gray-800">Software Deployment Status</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <CustomIcons.DotsMenu />
        </button>
      </div>

      <div className="space-y-6">
        {/* Scheduled Installs */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Scheduled Installs</span>
            <span className="text-lg font-semibold text-gray-800">92%</span>
          </div>
          <ProgressBar percentage={92} color="blue" />
        </div>

        {/* Failures */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Failures</span>
            <span className="text-lg font-semibold text-gray-800">2%</span>
          </div>
          <ProgressBar percentage={2} color="red" />
        </div>
      </div>
    </div>
  );
};

export default SoftwareDeploymentStatus;