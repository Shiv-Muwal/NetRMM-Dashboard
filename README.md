# NetRMM Dashboard

A modern, responsive Remote Monitoring and Management (RMM) dashboard built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations and hover effects
- **Interactive Components**: Real-time data visualization with charts and progress indicators
- **Multiple Views**: Dashboard, Device View, and Alerts View with easy navigation
- **Component-Based Architecture**: Modular design with reusable components

## Dashboard Components

### Top Row
- **System Health Overview**: Circular progress indicator showing device online status
- **Alerts Summary**: Alert statistics with mini charts and circular progress
- **Patch Compliance**: Compliance percentage with animated wave visualization
- **Remote OneSsinge**: Remote session monitoring with wave charts

### Middle Row
- **Recent Activity**: User activity feed with status indicators
- **Device Performance Metrics**: CPU and RAM usage charts with time series data
- **Remote Sessions**: Active session monitoring and management

### Bottom Row
- **Software Deployment Status**: Installation progress and failure tracking
- **License & Warranty Tracker**: License compliance and warranty status
- **Threat Detection & Antivirus**: Security status and threat monitoring

## Technology Stack

- **React 19.1.0**: Frontend framework
- **Vite 7.0.4**: Build tool and development server
- **Tailwind CSS 4.1.11**: Utility-first CSS framework
- **Lucide React**: Icon library
- **ESLint**: Code linting and formatting

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── component/
│   ├── Sidebar.jsx
│   ├── Dashboard.jsx
│   ├── SystemHealthOverview.jsx
│   ├── AlertsSummary.jsx
│   ├── PatchCompliance.jsx
│   ├── RemoteOneSsinge.jsx
│   ├── RecentActivity.jsx
│   ├── DevicePerformanceMetrics.jsx
│   ├── RemoteSessions.jsx
│   ├── SoftwareDeploymentStatus.jsx
│   ├── LicenseWarrantyTracker.jsx
│   ├── ThreatDetection.jsx
│   ├── DeviceView.jsx
│   └── AlertsView.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Responsive Design

The dashboard is fully responsive and includes:
- Mobile-first design approach
- Flexible grid layouts that adapt to screen size
- Collapsible sidebar for mobile devices
- Touch-friendly interface elements
- Optimized performance for all devices

## Customization

The dashboard uses Tailwind CSS for styling, making it easy to customize:
- Colors and themes can be modified in the Tailwind configuration
- Component styles are easily adjustable
- Responsive breakpoints can be customized
- Custom animations and transitions are included

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Future Enhancements

- Real-time data integration
- Advanced filtering and search
- Export functionality
- Custom dashboard layouts
- Dark mode support
- Multi-language support
