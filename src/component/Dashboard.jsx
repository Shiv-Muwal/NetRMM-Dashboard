import React from 'react';
import SystemHealthOverview from './SystemHealthOverview';
import AlertsSummary from './AlertsSummary';
import PatchCompliance from './PatchCompliance';
import RemoteOneSsinge from './RemoteOneSsinge';
import RecentActivity from './RecentActivity';
import DevicePerformanceMetrics from './DevicePerformanceMetrics';
import RemoteSessions from './RemoteSessions';
import SoftwareDeploymentStatus from './SoftwareDeploymentStatus';
import LicenseWarrantyTracker from './LicenseWarrantyTracker';
import ThreatDetection from './ThreatDetection';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Top Row - System Health, Alerts, Patch Compliance, Remote OneSsinge */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SystemHealthOverview />
        <AlertsSummary />
        <PatchCompliance />
        <RemoteOneSsinge />
      </div>

      {/* Middle Row - Recent Activity, Device Performance, Remote Sessions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentActivity />
        <DevicePerformanceMetrics />
        <RemoteSessions />
      </div>

      {/* Bottom Row - Software Deployment, License & Warranty, Threat Detection */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SoftwareDeploymentStatus />
        <LicenseWarrantyTracker />
        <ThreatDetection />
      </div>
    </div>
  );
};

export default Dashboard;