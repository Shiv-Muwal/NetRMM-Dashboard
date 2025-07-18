import React from 'react';
import { CustomIcons, ChartComponents } from '../components/icons';

const PatchCompliance = () => {
  const WaveChart = () => {
    return (
      <div className="relative h-16 w-full bg-blue-500 rounded-lg overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 64" preserveAspectRatio="none">
          <path
            d="M0,32 Q50,16 100,32 T200,32 L200,64 L0,64 Z"
            fill="rgba(255,255,255,0.3)"
            className="animate-pulse"
          />
          <path
            d="M0,40 Q50,24 100,40 T200,40 L200,64 L0,64 Z"
            fill="rgba(255,255,255,0.2)"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-3xl font-bold">78%</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-blue-500 rounded-lg shadow-sm p-6 text-white card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">PATCH COMPLIANCE</h3>
        <button className="text-blue-200 hover:text-white">
          <CustomIcons.DotsMenu />
        </button>
      </div>

      <div className="mb-6">
        <WaveChart />
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-sm text-blue-200 mb-1">REMOTE: ONESSINGE</p>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-blue-400 rounded-full h-2">
              <div className="bg-white rounded-full h-2" style={{ width: '78%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatchCompliance;