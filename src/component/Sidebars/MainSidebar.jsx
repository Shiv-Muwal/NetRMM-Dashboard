import React from 'react'

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
  MonitorUp
} from "lucide-react";

const MainSidebar = ({ activeView, setActiveView }) => {
  const menuItems = [
    { id: 'dashboard', icon: SquareChevronRight, label: "Dashboard" },
    { id: 'alerts', icon: Server, label: "Alerts & Incidents" },
    { id: 'device', icon: BellRing, label: "Devices & Endpoints" },
    { id: 'network', icon: ShieldCheck, label: "Network Monitoring" },
    { id: 'patch', icon: Cpu, label: "Patch Management" },
    { id: 'inventory', icon: MonitorSmartphone, label: "Software Inventory" },
    { id: 'remote', icon: MonitorUp, label: "Remote Access" },
    { id: 'reports', icon: BarChart3, label: "Reports & Analytics" },
    { id: 'settings', icon: Settings, label: "Settings" },
    { id: 'logout', icon: LogOut, label: "Logout" },
  ];

  return (
    <div className="w-64 h-screen bg-big-stone text-white p-4 flex flex-col">
      <div className="pb-4 border-b border-fiord mb-4">
        <h1 className="text-xl font-bold">NetRMM</h1>
      </div>

      <nav className="flex-">
        {menuItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveView && setActiveView(id)}
            className={`flex items-center gap-3 text-left p-4 w-full rounded-lg transition-colors ${activeView === id
                ? 'bg-blue text-white'
                : 'text-gray-400 hover:bg-blue hover:text-white'
              }`}
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default MainSidebar
