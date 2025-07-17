import React from 'react'
import { Icons } from '../icons';
import { mainSidebarItems } from '../../helpers/dashboardData';

const MainSidebar = ({ activeView, setActiveView }) => {
  const menuItems = [
    { id: 'dashboard', icon: Icons.SquareChevronRight, label: "Dashboard" },
    { id: 'alerts', icon: Icons.Server, label: "Alerts & Incidents" },
    { id: 'device', icon: Icons.BellRing, label: "Devices & Endpoints" },
    { id: 'network', icon: Icons.ShieldCheck, label: "Network Monitoring" },
    { id: 'patch', icon: Icons.Cpu, label: "Patch Management" },
    { id: 'inventory', icon: Icons.MonitorSmartphone, label: "Software Inventory" },
    { id: 'remote', icon: Icons.MonitorUp, label: "Remote Access" },
    { id: 'reports', icon: Icons.BarChart3, label: "Reports & Analytics" },
    { id: 'settings', icon: Icons.Settings, label: "Settings" },
    { id: 'logout', icon: Icons.LogOut, label: "Logout" },
  ];

  return (
    <div className="w-64 h-screen bg-big-stone text-white p-4 flex flex-col">
      <div className="pb-4 border-b border-fiord mb-4">
        <h1 className="text-xl font-bold">NetRMM</h1>
      </div>
      
      <nav className="flex-1">
        {menuItems.map(({ id, icon: Icon, label }) => (
          <button 
            key={id} 
            onClick={() => setActiveView && setActiveView(id)}
            className={`flex items-center gap-3 text-left p-4 w-full rounded-lg transition-colors hover:bg-blue ${
              activeView === id ? 'bg-blue text-white' : 'text-gray hover:text-white'
            }`}
          >
            <Icon size={20} className={activeView === id ? 'text-white' : 'text-gray-400'} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default MainSidebar
