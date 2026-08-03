import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import  DashboardOverview  from './pages/DashboardOverview';
import  BookingsPage  from './pages/BookingsPage';
import Rooms from './pages/Rooms';
import DiningPage from './pages/DiningPage';
import SpaPage from './pages/SpaPage';
import  EventsPage  from './pages/EventsPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const [currentView, setCurrentView] = useState('Dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'Dashboard':
        return <DashboardOverview />;
      case 'Bookings':
        return <BookingsPage />;
      case 'Rooms':
        return <Rooms/>;
      case 'Dining':
        return <DiningPage/>;
      case 'Spa':
        return <SpaPage/>;
      case 'Events':
        return <EventsPage/>;
      case 'Settings':
        return <SettingsPage />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-stone-400">Section under construction.</p>
          </div>
        );
    }
  };

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          className: 'font-sans text-sm shadow-xl border',
          style: {
            background: 'rgba(28, 25, 23, 0.95)',
            color: '#fff',
            borderColor: 'rgba(63, 63, 70, 0.5)',
          }
        }}
      />
      {!isAuthenticated ? (
        <LoginPage onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <div className="min-h-screen bg-luxury-bg text-stone-200 flex">
          <Sidebar currentView={currentView} setCurrentView={setCurrentView} onLogout={() => setIsAuthenticated(false)} />
          <div className="flex-1 ml-64 p-8">
            {renderView()}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
