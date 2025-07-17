// Device and Network Data Helper
// Centralized data structures for device management and network monitoring

// Device Types and Categories
export const deviceTypes = {
  LAPTOP: 'laptop',
  DESKTOP: 'desktop',
  SERVER: 'server',
  MOBILE: 'mobile',
  TABLET: 'tablet',
  PRINTER: 'printer',
  ROUTER: 'router',
  SWITCH: 'switch',
  FIREWALL: 'firewall'
};

// Device Status Types
export const deviceStatus = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  MAINTENANCE: 'maintenance',
  WARNING: 'warning',
  CRITICAL: 'critical'
};

// Sample Device Data
export const devicesData = [
  {
    id: 1,
    name: 'LAPTOP-001',
    type: deviceTypes.LAPTOP,
    status: deviceStatus.ONLINE,
    user: 'john.doe',
    location: 'Office Floor 1',
    ipAddress: '192.168.1.101',
    macAddress: '00:1B:44:11:3A:B7',
    os: 'Windows 11 Pro',
    lastSeen: '2024-01-15T10:30:00Z',
    cpuUsage: 45,
    memoryUsage: 68,
    diskUsage: 72,
    networkUsage: 25
  },
  {
    id: 2,
    name: 'DESKTOP-045',
    type: deviceTypes.DESKTOP,
    status: deviceStatus.ONLINE,
    user: 'jane.smith',
    location: 'Office Floor 2',
    ipAddress: '192.168.1.145',
    macAddress: '00:1B:44:11:3A:C8',
    os: 'Windows 10 Pro',
    lastSeen: '2024-01-15T10:25:00Z',
    cpuUsage: 32,
    memoryUsage: 54,
    diskUsage: 45,
    networkUsage: 18
  },
  {
    id: 3,
    name: 'SERVER-001',
    type: deviceTypes.SERVER,
    status: deviceStatus.WARNING,
    user: 'admin',
    location: 'Data Center',
    ipAddress: '192.168.1.10',
    macAddress: '00:1B:44:11:3A:D9',
    os: 'Windows Server 2022',
    lastSeen: '2024-01-15T10:35:00Z',
    cpuUsage: 78,
    memoryUsage: 85,
    diskUsage: 67,
    networkUsage: 45
  }
];

// Network Devices Data
export const networkDevices = [
  {
    id: 1,
    name: 'Main Router',
    type: deviceTypes.ROUTER,
    status: deviceStatus.ONLINE,
    ipAddress: '192.168.1.1',
    macAddress: '00:1B:44:11:3A:E1',
    location: 'Server Room',
    uptime: '45 days',
    throughput: '856 Mbps',
    connectedDevices: 48
  },
  {
    id: 2,
    name: 'Core Switch',
    type: deviceTypes.SWITCH,
    status: deviceStatus.ONLINE,
    ipAddress: '192.168.1.2',
    macAddress: '00:1B:44:11:3A:F2',
    location: 'Server Room',
    uptime: '45 days',
    throughput: '1.2 Gbps',
    connectedDevices: 24
  },
  {
    id: 3,
    name: 'Firewall',
    type: deviceTypes.FIREWALL,
    status: deviceStatus.ONLINE,
    ipAddress: '192.168.1.3',
    macAddress: '00:1B:44:11:3A:G3',
    location: 'Server Room',
    uptime: '45 days',
    throughput: '945 Mbps',
    blockedThreats: 127
  }
];

// Network Monitoring Data
export const networkMonitoringData = {
  bandwidth: {
    upload: [45, 52, 48, 55, 62, 58, 51, 49, 53, 57, 60, 56],
    download: [78, 85, 82, 89, 95, 92, 88, 86, 90, 94, 97, 91]
  },
  latency: [12, 15, 11, 14, 18, 16, 13, 12, 15, 17, 19, 14],
  packetLoss: [0.1, 0.2, 0.1, 0.3, 0.2, 0.1, 0.2, 0.1, 0.2, 0.3, 0.2, 0.1],
  connections: {
    active: 156,
    established: 142,
    timeWait: 8,
    closeWait: 6
  }
};

// Device Performance Metrics
export const deviceMetrics = {
  cpu: {
    current: 45,
    average: 52,
    peak: 87,
    history: [45, 48, 52, 49, 55, 58, 54, 51, 47, 50, 53, 56]
  },
  memory: {
    current: 68,
    average: 65,
    peak: 89,
    total: '16 GB',
    available: '5.12 GB',
    history: [68, 71, 69, 72, 75, 73, 70, 68, 66, 69, 71, 74]
  },
  disk: {
    current: 72,
    average: 68,
    peak: 85,
    total: '500 GB',
    available: '140 GB',
    history: [72, 74, 73, 75, 77, 76, 74, 72, 70, 73, 75, 78]
  },
  network: {
    current: 25,
    average: 32,
    peak: 78,
    uploadSpeed: '45 Mbps',
    downloadSpeed: '78 Mbps',
    history: [25, 28, 32, 29, 35, 38, 34, 31, 28, 30, 33, 36]
  }
};

// Location Data
export const locationsData = [
  {
    id: 1,
    name: 'Office Floor 1',
    building: 'Main Building',
    address: '123 Business St, City, State 12345',
    deviceCount: 24,
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: 2,
    name: 'Office Floor 2',
    building: 'Main Building',
    address: '123 Business St, City, State 12345',
    deviceCount: 18,
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: 3,
    name: 'Data Center',
    building: 'Server Building',
    address: '456 Tech Ave, City, State 12345',
    deviceCount: 45,
    coordinates: { lat: 40.7589, lng: -73.9851 }
  },
  {
    id: 4,
    name: 'Remote Office',
    building: 'Branch Office',
    address: '789 Remote Rd, City, State 12345',
    deviceCount: 12,
    coordinates: { lat: 40.6892, lng: -74.0445 }
  }
];

// Operating System Data
export const operatingSystemsData = [
  { name: 'Windows 11', count: 45, percentage: 45 },
  { name: 'Windows 10', count: 32, percentage: 32 },
  { name: 'macOS', count: 15, percentage: 15 },
  { name: 'Linux', count: 8, percentage: 8 }
];

// Device Health Status
export const deviceHealthStatus = {
  healthy: 78,
  warning: 15,
  critical: 5,
  offline: 2,
  total: 100
};

// Network Traffic Data
export const networkTrafficData = {
  inbound: [120, 135, 128, 142, 156, 148, 135, 129, 138, 145, 152, 147],
  outbound: [85, 92, 88, 95, 102, 98, 91, 87, 93, 97, 104, 99],
  internal: [45, 52, 48, 55, 62, 58, 51, 49, 53, 57, 60, 56]
};

// Utility Functions
export const getDeviceStatusColor = (status) => {
  const statusColors = {
    [deviceStatus.ONLINE]: 'text-green-600',
    [deviceStatus.OFFLINE]: 'text-gray-600',
    [deviceStatus.MAINTENANCE]: 'text-yellow-600',
    [deviceStatus.WARNING]: 'text-orange-600',
    [deviceStatus.CRITICAL]: 'text-red-600'
  };
  return statusColors[status] || 'text-gray-600';
};

export const getDeviceStatusBadge = (status) => {
  const statusBadges = {
    [deviceStatus.ONLINE]: 'bg-green-100 text-green-800',
    [deviceStatus.OFFLINE]: 'bg-gray-100 text-gray-800',
    [deviceStatus.MAINTENANCE]: 'bg-yellow-100 text-yellow-800',
    [deviceStatus.WARNING]: 'bg-orange-100 text-orange-800',
    [deviceStatus.CRITICAL]: 'bg-red-100 text-red-800'
  };
  return statusBadges[status] || 'bg-gray-100 text-gray-800';
};

export const getDeviceTypeIcon = (type) => {
  const typeIcons = {
    [deviceTypes.LAPTOP]: 'Monitor',
    [deviceTypes.DESKTOP]: 'Desktop',
    [deviceTypes.SERVER]: 'Server',
    [deviceTypes.MOBILE]: 'MonitorSmartphone',
    [deviceTypes.TABLET]: 'MonitorSmartphone',
    [deviceTypes.PRINTER]: 'Package',
    [deviceTypes.ROUTER]: 'Wifi',
    [deviceTypes.SWITCH]: 'Globe',
    [deviceTypes.FIREWALL]: 'Shield'
  };
  return typeIcons[type] || 'Monitor';
};

export const formatUptime = (uptimeInSeconds) => {
  const days = Math.floor(uptimeInSeconds / (24 * 3600));
  const hours = Math.floor((uptimeInSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ${hours}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const calculateDeviceHealth = (cpu, memory, disk, network) => {
  const weights = { cpu: 0.3, memory: 0.3, disk: 0.2, network: 0.2 };
  const score = (cpu * weights.cpu) + (memory * weights.memory) + (disk * weights.disk) + (network * weights.network);
  
  if (score >= 80) return 'healthy';
  if (score >= 60) return 'warning';
  return 'critical';
};

export default {
  deviceTypes,
  deviceStatus,
  devicesData,
  networkDevices,
  networkMonitoringData,
  deviceMetrics,
  locationsData,
  operatingSystemsData,
  deviceHealthStatus,
  networkTrafficData,
  getDeviceStatusColor,
  getDeviceStatusBadge,
  getDeviceTypeIcon,
  formatUptime,
  formatBytes,
  calculateDeviceHealth
};