import React from 'react';
import { ChartComponents, CustomIcons } from '../components/icons';

const DevicePerformanceMetrics = () => {
  // Using the centralized AreaChart component from icons.jsx for better consistency

  const cpuData = [15, 25, 35, 45, 30, 20, 18];
  const ramData = [45, 50, 60, 65, 70, 65, 65];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Device Performance Metrics</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <CustomIcons.DotsMenu />
        </button>
      </div>

      <div className="space-y-6">
        {/* CPU Load */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">CPU Load (avg)</span>
            <span className="text-lg font-semibold text-blue-600">18%</span>
          </div>
          <ChartComponents.AreaChart data={cpuData} color="#3B82F6" className="h-16 w-full" />
        </div>

        {/* RAM Usage */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">RAM Usage</span>
            <span className="text-lg font-semibold text-blue-600">65%</span>
          </div>
          <ChartComponents.AreaChart data={ramData} color="#6366F1" className="h-16 w-full" />
        </div>
      </div>

      {/* Time indicators */}
      <div className="flex justify-between text-xs text-gray-500 mt-4">
        <span>12</span>
        <span>14</span>
        <span>16</span>
        <span>18</span>
        <span>20</span>
        <span>22</span>
        <span>24 H</span>
      </div>
    </div>
  );
};

export default DevicePerformanceMetrics;