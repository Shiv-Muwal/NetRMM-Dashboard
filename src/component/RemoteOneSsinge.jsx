import React from 'react';
import { CustomIcons, ChartComponents } from '../components/icons';

const RemoteOneSsinge = () => {
  const WaveChart = () => {
    return (
      <div className="relative h-20 w-full">
        <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
          <path
            d="M0,40 Q25,20 50,40 T100,40 T150,40 T200,40"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            className="animate-pulse"
          />
          <path
            d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="2"
            className="animate-pulse"
            style={{ animationDelay: '0.3s' }}
          />
        </svg>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">REMOTE: ONESSINGE</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <CustomIcons.DotsMenu />
        </button>
      </div>

      <div className="mb-6">
        <WaveChart />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">SERVER01</span>
          <span className="text-sm text-gray-500">14 min</span>
        </div>
        
        <div className="pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Pravin Singh v.1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteOneSsinge;