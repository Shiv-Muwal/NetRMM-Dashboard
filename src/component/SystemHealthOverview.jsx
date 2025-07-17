import React from 'react';
import { ChartComponents, CustomIcons } from '../components/icons';
import { systemHealthData } from '../helpers/dashboardData';

const SystemHealthOverview = () => {
  // Using data from helper file
  const healthData = systemHealthData;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">System Health Overview</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <CustomIcons.Refresh />
        </button>
      </div>

      <div className="mb-6">
        <ChartComponents.CircularProgress percentage={healthData.overallHealth} color="green" />
        <p className="text-center text-sm text-gray-600 mt-2">Overall Health</p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Devices Online</p>
            <p className="text-lg font-semibold text-gray-800">6%</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Offline</p>
            <div className="w-16 h-8 bg-blue-100 rounded flex items-center justify-center">
              <div className="w-12 h-1 bg-blue-500 rounded"></div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-600">2 devices need urgent attention</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealthOverview;