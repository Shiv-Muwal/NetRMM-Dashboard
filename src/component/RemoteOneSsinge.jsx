import React from 'react';

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
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
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