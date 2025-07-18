import React, { useState } from 'react';
import MainSidebar from './component/Sidebars/MainSidebar';
import SubSidebar from './component/Sidebars/SubSidebar';
import Dashboard from './component/Dashboard';
import DeviceView from './component/DeviceView';
import AlertsView from './component/AlertsView';
import { CustomIcons } from './components/icons';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'device':
        return <DeviceView />;
      case 'alerts':
        return <AlertsView />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sub Sidebar - Left narrow sidebar */}
      <SubSidebar />
      
      {/* Main Sidebar - Main navigation */}
      <MainSidebar activeView={activeView} setActiveView={setActiveView} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setActiveView('dashboard')}
                className={`px-4 py-2 text-sm font-medium border-b-2 ${
                  activeView === 'dashboard'
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                RMM Dashboard
              </button>
              <button
                onClick={() => setActiveView('device')}
                className={`px-4 py-2 text-sm font-medium border-b-2 ${
                  activeView === 'device'
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                Device View
              </button>
              <button
                onClick={() => setActiveView('alerts')}
                className={`px-4 py-2 text-sm font-medium border-b-2 ${
                  activeView === 'alerts'
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                Alerts View
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <CustomIcons.Search />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">P</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Pravin Singh</span>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;