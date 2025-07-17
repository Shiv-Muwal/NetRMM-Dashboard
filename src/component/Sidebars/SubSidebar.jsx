import React from 'react'
import { Icons } from '../../components/icons';

const SubSidebar = () => {
  const icons = [
    { icon: Icons.CirclePlus, label: "Add" },
    { icon: Icons.ShieldCheck, label: "Security" },
    { icon: Icons.Activity, label: "Activity" },
    { icon: Icons.Monitor, label: "Monitor" },
    { icon: Icons.Settings, label: "Settings" }
  ];

  return (
    <div className="w-16 h-screen bg-bluewood text-white flex flex-col items-center border-r-2 border-fiord">
      <div className="p-4 shadow-2xl">
        <Icons.Menu size={24} className="text-white" />
      </div>
      <span className='border-b border-fiord h-0.5 w-full block'></span>

      <div className="p-1 flex flex-col">
        {icons.map(({ icon: _IconComponent, label }, i) => (
          <button
            key={i}
            title={label}
            className="rounded-md hover:bg-blue transition-colors p-4 group"
          >
            <_IconComponent size={24} className="text-gray-400 hover:text-white transition-colors group-hover:text-white" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SubSidebar
