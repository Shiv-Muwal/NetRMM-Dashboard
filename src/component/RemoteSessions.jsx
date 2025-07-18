import React from 'react';
import { CustomIcons } from '../components/icons';

const RemoteSessions = () => {
  const sessions = [
    {
      id: 1,
      user: 'fiT. Acimin',
      server: 'SERVER01',
      status: 'active',
      time: '14 min',
      requests: 3
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Remote Sessions</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <CustomIcons.DotsMenu />
        </button>
      </div>

      <div className="space-y-4">
        {/* Recent Sessions */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Recent Sessions</span>
            <span className="text-sm text-gray-500">2 Active</span>
          </div>
          
          <div className="space-y-3">
            {sessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{session.user}</p>
                    <p className="text-xs text-gray-500">{session.server}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-900">{session.time}</p>
                  <p className="text-xs text-gray-500">SERVi:01</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Last 24h */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Last 24h</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">23+</span>
            </div>
          </div>
        </div>

        {/* Recent Session Details */}
        <div className="pt-4 border-t border-gray-200">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Recent Session</span>
              <span className="text-sm text-gray-900">3 requests</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">SERVER01</span>
              <span className="text-sm text-gray-900">11 min</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Recent expiry</span>
              <span className="text-sm text-gray-900">June 18, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteSessions;