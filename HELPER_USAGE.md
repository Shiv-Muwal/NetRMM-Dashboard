# Helper Files and Icons Usage Guide

This guide explains how to use the new organized structure for icons and data in the RMM Dashboard application.

## File Structure

```
src/
├── components/
│   └── icons.jsx          # Centralized icons and chart components
├── helpers/
│   ├── dashboardData.js   # Dashboard-related data and utilities
│   └── deviceData.js      # Device and network-related data
└── examples/
    └── usage-example.jsx  # Example usage of the new structure
```

## Icons (`src/components/icons.jsx`)

### Lucide React Icons
All Lucide React icons are organized in the `Icons` object:

```jsx
import { Icons } from './components/icons';

// Usage
<Icons.CheckCircle className="w-5 h-5 text-green-500" />
<Icons.AlertTriangle className="w-5 h-5 text-yellow-500" />
<Icons.Monitor className="w-5 h-5 text-blue-500" />
```

Available icons include:
- Navigation: `SquareChevronRight`, `Server`, `BellRing`, `ShieldCheck`, `Cpu`, `MonitorSmartphone`, `Settings`, `LogOut`, `BarChart3`, `MonitorUp`, `CirclePlus`, `Activity`, `Monitor`, `Menu`
- Status: `CheckCircle`, `AlertCircle`, `Info`, `Shield`, `AlertTriangle`
- Features: `Wifi`, `Download`, `Package`, `Globe`, `FileText`

### Custom SVG Icons
Custom SVG icons are in the `CustomIcons` object:

```jsx
import { CustomIcons } from './components/icons';

// Usage
<CustomIcons.Search className="w-5 h-5" />
<CustomIcons.ChevronRight className="w-5 h-5" />
<CustomIcons.TrendingUp className="w-5 h-5 text-green-500" />
```

Available custom icons:
- `Search`, `ChevronRight`, `ExternalLink`, `Refresh`, `TrendingUp`, `TrendingDown`, `Clock`, `User`, `Desktop`

### Chart Components
Reusable chart components are in the `ChartComponents` object:

```jsx
import { ChartComponents } from './components/icons';

// Circular Progress
<ChartComponents.CircularProgress 
  percentage={85} 
  color="green" 
  size={32} 
/>

// Line Chart
<ChartComponents.LineChart 
  data={[45, 52, 48, 55, 62]} 
  color="#3B82F6" 
  className="h-16 w-full" 
/>

// Area Chart
<ChartComponents.AreaChart 
  data={[30, 35, 32, 38, 42]} 
  color="#10B981" 
  className="w-full h-full" 
/>

// Donut Chart
<ChartComponents.DonutChart 
  percentage={75} 
  size={32} 
/>
```

## Dashboard Data (`src/helpers/dashboardData.js`)

### Data Collections
```jsx
import { 
  recentActivities, 
  devicePerformanceData, 
  systemHealthData,
  alertsData,
  patchComplianceData,
  // ... other data collections
} from '../helpers/dashboardData';
```

### Configuration Objects
```jsx
import { 
  statusConfig,
  chartColors,
  menuItems,
  mainSidebarItems
} from '../helpers/dashboardData';

// Usage
const statusClass = statusConfig[activity.status].color;
const chartColor = chartColors.primary;
```

### Utility Functions
```jsx
import { 
  formatTime,
  calculatePercentage,
  getStatusIcon
} from '../helpers/dashboardData';

// Usage
const timeAgo = formatTime(timestamp);
const percentage = calculatePercentage(value, total);
const iconName = getStatusIcon('success');
```

## Device Data (`src/helpers/deviceData.js`)

### Device and Network Data
```jsx
import { 
  devicesData,
  networkDevices,
  locationsData,
  deviceTypes,
  deviceStatus
} from '../helpers/deviceData';

// Usage
const laptops = devicesData.filter(d => d.type === deviceTypes.LAPTOP);
const onlineDevices = devicesData.filter(d => d.status === deviceStatus.ONLINE);
```

### Utility Functions
```jsx
import { 
  getDeviceStatusColor,
  getDeviceStatusBadge,
  getDeviceTypeIcon,
  formatUptime,
  formatBytes,
  calculateDeviceHealth
} from '../helpers/deviceData';

// Usage
const statusColor = getDeviceStatusColor(device.status);
const badgeClass = getDeviceStatusBadge(device.status);
const iconName = getDeviceTypeIcon(device.type);
const uptime = formatUptime(3600); // "1h 0m"
const size = formatBytes(1024); // "1 KB"
const health = calculateDeviceHealth(cpu, memory, disk, network);
```

## Migration Guide

### Before (Old Structure)
```jsx
// Old way - scattered imports
import { CheckCircle, AlertTriangle } from 'lucide-react';

const Component = () => {
  const activities = [
    { id: 1, user: 'John', action: 'Login', status: 'success' },
    // ... hardcoded data
  ];

  return (
    <div>
      <CheckCircle className="w-5 h-5 text-green-500" />
      {activities.map(activity => (
        <div key={activity.id}>{activity.user}</div>
      ))}
    </div>
  );
};
```

### After (New Structure)
```jsx
// New way - centralized imports
import { Icons } from './components/icons';
import { recentActivities, statusConfig } from '../helpers/dashboardData';

const Component = () => {
  return (
    <div>
      <Icons.CheckCircle className="w-5 h-5 text-green-500" />
      {recentActivities.map(activity => (
        <div key={activity.id} className={statusConfig[activity.status].color}>
          {activity.user}
        </div>
      ))}
    </div>
  );
};
```

## Best Practices

1. **Import only what you need**: Use named imports to keep bundle size minimal
2. **Use helper functions**: Leverage utility functions for consistent formatting
3. **Follow naming conventions**: Use descriptive names for data and functions
4. **Keep data separate**: Don't mix data definitions with component logic
5. **Use TypeScript**: Consider adding TypeScript for better type safety

## Examples

See `src/examples/usage-example.jsx` for comprehensive examples of how to use all the new features.

## Benefits

- **Centralized Management**: All icons and data in one place
- **Reusability**: Components and data can be reused across the application
- **Maintainability**: Easy to update icons, data, and styling
- **Performance**: Reduced bundle size through better tree-shaking
- **Consistency**: Uniform styling and behavior across components
- **Scalability**: Easy to add new icons, data, and utility functions