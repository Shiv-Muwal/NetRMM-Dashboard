import React from 'react';
import { Icons, CustomIcons, ChartComponents } from '../components/icons';
import { 
  recentActivities, 
  devicePerformanceData, 
  systemHealthData,
  statusConfig,
  chartColors
} from '../helpers/dashboardData';
import { 
  devicesData, 
  locationsData,
  getDeviceStatusColor
} from '../helpers/deviceData';

// Example component showing how to use the new structure
const UsageExample = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Using Icons */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Icons.Monitor className="w-5 h-5 mr-2" />
          Using Lucide Icons
        </h3>
        <div className="flex space-x-4">
          <Icons.CheckCircle className="w-6 h-6 text-green-500" />
          <Icons.AlertTriangle className="w-6 h-6 text-yellow-500" />
          <Icons.AlertCircle className="w-6 h-6 text-red-500" />
          <Icons.Info className="w-6 h-6 text-blue-500" />
        </div>
      </div>

      {/* Using Custom SVG Icons */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <CustomIcons.Search className="w-5 h-5 mr-2" />
          Using Custom SVG Icons
        </h3>
        <div className="flex space-x-4">
          <CustomIcons.Search className="w-6 h-6 text-gray-600" />
          <CustomIcons.ChevronRight className="w-6 h-6 text-gray-600" />
          <CustomIcons.ExternalLink className="w-6 h-6 text-gray-600" />
          <CustomIcons.TrendingUp className="w-6 h-6 text-green-500" />
          <CustomIcons.TrendingDown className="w-6 h-6 text-red-500" />
        </div>
      </div>

      {/* Using Chart Components */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4">Chart Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Circular Progress */}
          <div className="text-center">
            <h4 className="text-sm font-medium mb-2">Circular Progress</h4>
            <ChartComponents.CircularProgress 
              percentage={systemHealthData.overallHealth} 
              color="green" 
            />
          </div>

          {/* Line Chart */}
          <div>
            <h4 className="text-sm font-medium mb-2">Line Chart</h4>
            <ChartComponents.LineChart 
              data={devicePerformanceData.cpuUsage} 
              color={chartColors.primary} 
            />
          </div>

          {/* Area Chart */}
          <div>
            <h4 className="text-sm font-medium mb-2">Area Chart</h4>
            <ChartComponents.AreaChart 
              data={devicePerformanceData.memoryUsage} 
              color={chartColors.success} 
            />
          </div>
        </div>
      </div>

      {/* Using Dashboard Data */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4">Dashboard Data</h3>
        <div className="space-y-4">
          {recentActivities.slice(0, 3).map((activity) => (
            <div key={activity.id} className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${statusConfig[activity.status].bgColor}`}>
                {activity.status === 'success' && <Icons.CheckCircle className={`w-4 h-4 ${statusConfig[activity.status].iconColor}`} />}
                {activity.status === 'info' && <Icons.Info className={`w-4 h-4 ${statusConfig[activity.status].iconColor}`} />}
                {activity.status === 'error' && <Icons.AlertCircle className={`w-4 h-4 ${statusConfig[activity.status].iconColor}`} />}
              </div>
              <div>
                <p className="text-sm font-medium">{activity.user}</p>
                <p className="text-xs text-gray-500">{activity.action} • {activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Using Device Data */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4">Device Data</h3>
        <div className="space-y-4">
          {devicesData.map((device) => (
            <div key={device.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <Icons.Monitor className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm font-medium">{device.name}</p>
                  <p className="text-xs text-gray-500">{device.user} • {device.location}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${getDeviceStatusColor(device.status)}`}>
                  {device.status.toUpperCase()}
                </span>
                <p className="text-xs text-gray-500">CPU: {device.cpuUsage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Using Location Data */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-4">Location Data</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {locationsData.map((location) => (
            <div key={location.id} className="p-3 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icons.Globe className="w-4 h-4 text-gray-600" />
                <h4 className="font-medium">{location.name}</h4>
              </div>
              <p className="text-sm text-gray-600">{location.building}</p>
              <p className="text-xs text-gray-500">{location.deviceCount} devices</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsageExample;