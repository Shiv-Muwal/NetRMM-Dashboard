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

const menuItems = [
 { icon: SquareChevronRight, label: "Dashboard" },
  { icon: Server, label: "Alerts & Incidents" },
  { icon: BellRing, label: "Devices & Endpoints" },
  { icon: ShieldCheck, label: "Network Monitoring" },
  { icon: Cpu, label: "Patch Management" },
  { icon: MonitorSmartphone, label: "Software Inventory" },
  { icon: MonitorUp, label: "Remote Access" },
  { icon: BarChart3, label: "Reports & Analytics" },
  { icon: Settings, label: "Settings" },
  { icon: LogOut, label: "Logout" },
];
const MainSidebar = () => {
  return (
    <div className="h-screen bg-big-stone text-white p-4">
      <h1 className="text-xl font-bold pb-4">NetRMM</h1>
        {menuItems.map(({ icon: Icon, label }, i) => (
          <button key={i} className="flex items-center gap-2 text-gray p-4">
            <Icon size={20} className='text-white'/>
            <span>{label}</span>
          </button>
        ))}
    </div>
  );
}

export default MainSidebar
