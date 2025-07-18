// Dashboard Data Helper
// Centralized data structures and mock data for dashboard components

// Recent Activity Data
export const recentActivities = [
  {
    id: 1,
    user: 'Rashman001',
    action: 'Device rebooted',
    time: '2 min ago',
    status: 'success',
    avatar: '/api/placeholder/32/32'
  },
  {
    id: 2,
    user: 'owlonic0',
    action: 'User installed application',
    time: '5 min ago',
    status: 'info',
    avatar: '/api/placeholder/32/32'
  },
  {
    id: 3,
    user: 'egantv v.2.13',
    action: 'Agent updated',
    time: '8 min ago',
    status: 'info',
    avatar: '/api/placeholder/32/32'
  },
  {
    id: 4,
    user: 'System',
    action: 'Security scan completed',
    time: '12 min ago',
    status: 'success',
    avatar: '/api/placeholder/32/32'
  },
  {
    id: 5,
    user: 'Admin',
    action: 'Failed login attempt detected',
    time: '15 min ago',
    status: 'error',
    avatar: '/api/placeholder/32/32'
  }
];

// Device Performance Data
export const devicePerformanceData = {
  cpuUsage: [65, 70, 68, 72, 75, 73, 71, 69, 67, 70, 72, 74],
  memoryUsage: [45, 48, 52, 49, 51, 53, 50, 47, 49, 52, 54, 51],
  diskUsage: [30, 32, 35, 33, 31, 34, 36, 38, 35, 33, 31, 29],
  networkUsage: [20, 25, 30, 28, 32, 35, 33, 30, 28, 26, 24, 22]
};

// System Health Data
export const systemHealthData = {
  overallHealth: 85,
  cpuHealth: 78,
  memoryHealth: 92,
  diskHealth: 88,
  networkHealth: 95
};

// Alerts Summary Data
export const alertsData = {
  critical: 3,
  warning: 12,
  info: 8,
  total: 23,
  resolved: 45,
  recentAlerts: [
    { id: 1, type: 'critical', message: 'Server CPU usage above 90%', time: '5 min ago' },
    { id: 2, type: 'warning', message: 'Disk space running low', time: '10 min ago' },
    { id: 3, type: 'info', message: 'System update available', time: '1 hour ago' }
  ]
};

// Patch Compliance Data
export const patchComplianceData = {
  compliant: 78,
  pending: 15,
  failed: 7,
  total: 100,
  criticalPatches: 3,
  securityPatches: 12,
  recentPatches: [
    { id: 1, name: 'Windows Security Update KB5028166', status: 'installed', date: '2024-01-15' },
    { id: 2, name: 'Chrome Security Update 120.0.6099.109', status: 'pending', date: '2024-01-14' },
    { id: 3, name: 'Adobe Flash Player Update', status: 'failed', date: '2024-01-13' }
  ]
};

// Remote Sessions Data
export const remoteSessionsData = {
  activeSessions: 8,
  totalSessions: 156,
  avgSessionTime: '45 min',
  sessions: [
    { id: 1, user: 'john.doe', device: 'LAPTOP-001', duration: '1h 23m', status: 'active' },
    { id: 2, user: 'jane.smith', device: 'DESKTOP-045', duration: '32m', status: 'active' },
    { id: 3, user: 'admin', device: 'SERVER-001', duration: '2h 15m', status: 'active' }
  ]
};

// Software Deployment Data
export const softwareDeploymentData = {
  successful: 85,
  pending: 10,
  failed: 5,
  total: 100,
  deployments: [
    { id: 1, software: 'Microsoft Office 365', status: 'success', devices: 45 },
    { id: 2, software: 'Antivirus Update', status: 'pending', devices: 12 },
    { id: 3, software: 'Adobe Creative Suite', status: 'failed', devices: 3 }
  ]
};

// License & Warranty Data
export const licenseWarrantyData = {
  expiringSoon: 8,
  expired: 3,
  active: 89,
  total: 100,
  items: [
    { id: 1, name: 'Microsoft Office 365', type: 'license', expires: '2024-03-15', status: 'expiring' },
    { id: 2, name: 'Dell Laptop Warranty', type: 'warranty', expires: '2024-02-28', status: 'expiring' },
    { id: 3, name: 'Adobe Creative Cloud', type: 'license', expires: '2023-12-31', status: 'expired' }
  ]
};

// Threat Detection Data
export const threatDetectionData = {
  threatsBlocked: 127,
  scansCompleted: 45,
  quarantined: 8,
  cleanSystems: 92,
  threats: [
    { id: 1, type: 'malware', name: 'Trojan.Win32.Generic', status: 'blocked', time: '2 hours ago' },
    { id: 2, type: 'phishing', name: 'Suspicious Email Link', status: 'quarantined', time: '4 hours ago' },
    { id: 3, type: 'virus', name: 'W32.Conficker', status: 'removed', time: '1 day ago' }
  ]
};

// Menu Items Data
export const menuItems = [
  { id: 'dashboard', label: 'Dashboard', active: true },
  { id: 'alerts', label: 'Alerts & Incidents' },
  { id: 'devices', label: 'Devices & Endpoints' },
  { id: 'network', label: 'Network Monitoring' },
  { id: 'patch', label: 'Patch Management' },
  { id: 'inventory', label: 'Software Inventory' },
  { id: 'remote', label: 'Remote Access' },
  { id: 'reports', label: 'Reports & Analytics' },
  { id: 'settings', label: 'Settings' }
];

// Main Sidebar Menu Items
export const mainSidebarItems = [
  { id: 'dashboard', label: "Dashboard" },
  { id: 'alerts', label: "Alerts & Incidents" },
  { id: 'device', label: "Devices & Endpoints" },
  { id: 'network', label: "Network Monitoring" },
  { id: 'patch', label: "Patch Management" },
  { id: 'inventory', label: "Software Inventory" },
  { id: 'remote', label: "Remote Access" },
  { id: 'reports', label: "Reports & Analytics" },
  { id: 'settings', label: "Settings" },
];

// Sub Sidebar Icons
export const subSidebarItems = [
  { label: "Add" },
  { label: "Security" },
  { label: "Activity" },
  { label: "Monitor" },
  { label: "Settings" }
];

// Status Colors and Classes
export const statusConfig = {
  success: {
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-500'
  },
  warning: {
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-500'
  },
  error: {
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-500'
  },
  info: {
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-500'
  }
};

// Chart Colors
export const chartColors = {
  primary: '#3B82F6',
  secondary: '#10B981',
  accent: '#F59E0B',
  danger: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
  success: '#10B981'
};

// Utility functions for data manipulation
export const formatTime = (timestamp) => {
  const now = new Date();
  const time = new Date(timestamp);
  const diffInMinutes = Math.floor((now - time) / (1000 * 60));
  
  if (diffInMinutes < 60) {
    return `${diffInMinutes} min ago`;
  } else if (diffInMinutes < 1440) {
    return `${Math.floor(diffInMinutes / 60)} hour${Math.floor(diffInMinutes / 60) > 1 ? 's' : ''} ago`;
  } else {
    return `${Math.floor(diffInMinutes / 1440)} day${Math.floor(diffInMinutes / 1440) > 1 ? 's' : ''} ago`;
  }
};

export const calculatePercentage = (value, total) => {
  return total > 0 ? Math.round((value / total) * 100) : 0;
};

export const getStatusIcon = (status) => {
  const statusMap = {
    success: 'CheckCircle',
    warning: 'AlertTriangle',
    error: 'AlertCircle',
    info: 'Info'
  };
  return statusMap[status] || 'Info';
};

export default {
  recentActivities,
  devicePerformanceData,
  systemHealthData,
  alertsData,
  patchComplianceData,
  remoteSessionsData,
  softwareDeploymentData,
  licenseWarrantyData,
  threatDetectionData,
  menuItems,
  mainSidebarItems,
  subSidebarItems,
  statusConfig,
  chartColors,
  formatTime,
  calculatePercentage,
  getStatusIcon
};