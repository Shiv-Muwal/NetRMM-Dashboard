import React from 'react';
import { Icons } from './icons';
import { recentActivities, statusConfig } from '../helpers/dashboardData';

const RecentActivity = () => {
  // Using data from helper file
  const activities = recentActivities;

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <Icons.CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <Icons.AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'error':
        return <Icons.AlertCircle className="w-4 h-4 text-red-500" />;
      case 'info':
        return <Icons.Info className="w-4 h-4 text-blue-500" />;
      default:
        return <Icons.Info className="w-4 h-4 text-gray-500" />;
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">
                  {getInitials(activity.user)}
                </span>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {activity.action}
                </p>
                {getStatusIcon(activity.status)}
              </div>
              <p className="text-xs text-gray-500">{activity.user}</p>
            </div>
            
            <div className="flex-shrink-0">
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium">
          View all activity
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;