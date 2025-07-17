import React from 'react';
import { 
  BarChart3, 
  AlertTriangle, 
  Monitor, 
  Wifi, 
  Download, 
  Package, 
  Globe, 
  FileText, 
  Settings,
  Menu
} from 'lucide-react';

const Sidebar = ({ activeView, setActiveView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, active: true },
    { id: 'alerts', label: 'Alerts & Incidents', icon: AlertTriangle },
    { id: 'devices', label: 'Devices & Endpoints', icon: Monitor },
    { id: 'network', label: 'Network Monitoring', icon: Wifi },
    { id: 'patch', label: 'Patch Management', icon: Download },
    { id: 'inventory', label: 'Software Inventory', icon: Package },
    { id: 'remote', label: 'Remote Access', icon: Globe },
    { id: 'reports', label: 'Reports & Analytics', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-slate-800 text-white flex flex-col sidebar-transition lg:relative lg:translate-x-0">
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Menu className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-semibold">NetRMM</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === 'dashboard' && activeView === 'dashboard';
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <div className="text-xs text-slate-400">
          <p>Dashboard by V 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;