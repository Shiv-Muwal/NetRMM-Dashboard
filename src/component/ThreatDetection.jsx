import React from 'react';
import { Icons, CustomIcons } from './icons';
import { threatDetectionData } from '../helpers/dashboardData';

const ThreatDetection = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Threat Detection & Antivirus, Status</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {/* Threats */}
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-gray-800">Threats</span>
          </div>
          <span className="text-sm text-gray-600">Antivirus date</span>
        </div>

        {/* Antivirus.date */}
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-gray-800">Antivirus.date</span>
          </div>
          <span className="text-sm text-gray-600">Last scan</span>
        </div>

        {/* Additional Info */}
        <div className="pt-4 border-t border-gray-200">
          <div className="text-right">
            <p className="text-sm text-gray-600">3 Thorge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreatDetection;