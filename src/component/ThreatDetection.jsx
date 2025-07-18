import React from 'react';
import { Icons, CustomIcons } from '../components/icons';
import { CheckCircle } from 'lucide-react';

const ThreatDetection = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Threat Detection & Antivirus, Status</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <CustomIcons.DotsMenu />
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