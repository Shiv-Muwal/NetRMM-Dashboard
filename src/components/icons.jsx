import React from 'react';
import {
  SquareChevronRight,
  Server,
  BellRing,
  ShieldCheck,
  Cpu,
  MonitorSmartphone,
  Settings,
  LogOut,
  BarChart3,
  MonitorUp,
  CirclePlus,
  Activity,
  Monitor,
  Menu,
  CheckCircle,
  AlertCircle,
  Info,
  Shield,
  AlertTriangle,
  Wifi,
  Download,
  Package,
  Globe,
  FileText
} from 'lucide-react';

// Lucide React Icons
export const Icons = {
  // Navigation Icons
  SquareChevronRight,
  Server,
  BellRing,
  ShieldCheck,
  Cpu,
  MonitorSmartphone,
  Settings,
  LogOut,
  BarChart3,
  MonitorUp,
  CirclePlus,
  Activity,
  Monitor,
  Menu,
  
  // Status Icons
  CheckCircle,
  AlertCircle,
  Info,
  Shield,
  AlertTriangle,
  
  // Feature Icons
  Wifi,
  Download,
  Package,
  Globe,
  FileText
};

// Custom SVG Icons
export const CustomIcons = {
  Search: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  
  ChevronRight: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  
  ExternalLink: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  
  Refresh: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  
  TrendingUp: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  
  TrendingDown: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
    </svg>
  ),
  
  Clock: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  
  User: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  
  Desktop: ({ className = "w-5 h-5", ...props }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
};

// Chart Components
export const ChartComponents = {
  CircularProgress: ({ percentage, color = "green", size = 32 }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    
    const colorClasses = {
      green: "stroke-green-500",
      blue: "stroke-blue-500",
      red: "stroke-red-500",
      yellow: "stroke-yellow-500"
    };

    return (
      <div className={`relative w-${size} h-${size} mx-auto`}>
        <svg className={`w-${size} h-${size} transform -rotate-90`} viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={colorClasses[color]}
            style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-700">{percentage}%</span>
        </div>
      </div>
    );
  },

  LineChart: ({ data, color = '#3B82F6', className = "h-16 w-full" }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = range === 0 ? 50 : ((max - value) / range) * 80 + 10;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className={`relative ${className}`}>
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
            className="drop-shadow-sm"
          />
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  },

  DonutChart: ({ percentage, size = 32 }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className={`relative w-${size} h-${size}`}>
        <svg className={`w-${size} h-${size} transform -rotate-90`} viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="text-blue-500"
            style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
          />
        </svg>
      </div>
    );
  },

  AreaChart: ({ data, color = '#3B82F6', className = "w-full h-full" }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 200;
      const y = range === 0 ? 40 : 64 - ((value - min) / range) * 40;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className={`relative ${className}`}>
        <svg className="w-full h-full" viewBox="0 0 200 64" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`area-gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d={`M0,64 L${points} L200,64 Z`}
            fill={`url(#area-gradient-${color})`}
          />
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }
};

export default { Icons, CustomIcons, ChartComponents };