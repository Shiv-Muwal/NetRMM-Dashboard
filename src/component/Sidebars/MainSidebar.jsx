import React from 'react'
import { Icons } from '../../components/icons';

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
  ];

  return (
    <div className="w-64 h-screen bg-big-stone text-white p-4 flex flex-col">
      <div className="pb-4 border-b border-fiord mb-4">
        <h1 className="text-xl font-bold">NetRMM</h1>
      </div>

      <nav className="flex flex-col overflow-y-auto scrolbarhide">
        {menuItems.map(({ id, icon: _IconComponent, label }) => (
          <button
            key={id}
            onClick={() => setActiveView && setActiveView(id)}
            className={`flex items-center cursor-pointer gap-3 text-left p-4 w-full rounded-lg transition-colors ${activeView === id
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
              }`}
          >
            <_IconComponent size={20} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default MainSidebar
