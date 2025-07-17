import React from 'react'
import {
  CirclePlus,
  ShieldCheck,
  Activity,
  Monitor,
  Menu,
  Settings
} from "lucide-react";

const icons = [ CirclePlus, ShieldCheck, Activity, Monitor, Settings ];

const SubSidebar = () => {
return (
    <div className="h-screen bg-bluewood text-white flex flex-col items-center border-r-2 border-fiord">
      <div className="p-4 shadow-2xl">
        <Menu size={24} className="text-white" />
      </div>
        <span className='border-b border-fiord h-0.5 w-full block'></span>

    <div className="p-1 flex flex-col">
       {icons.map((Icon, i) => (
        <button
          key={i}
          className=" rounded-md hover:bg-blue transition-colors p-4"
        >
          <Icon size={24} className="text-gray-400 hover:text-white transition-colors" />
        </button>
      ))}
    </div>
    </div>
  );
}

export default SubSidebar
