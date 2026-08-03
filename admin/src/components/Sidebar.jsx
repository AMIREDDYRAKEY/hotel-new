import { LayoutDashboard, Calendar, Users, Settings, LogOut, BedDouble, Utensils, Sparkles, PartyPopper } from 'lucide-react';

export const Sidebar = ({ currentView, setCurrentView, onLogout }) => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Bookings', icon: Calendar },
    { name: 'Rooms', icon: BedDouble },
    { name: 'Dining', icon: Utensils },
    { name: 'Spa', icon: Sparkles },
    { name: 'Events', icon: PartyPopper },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 h-screen glass-panel border-r border-luxury-border fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-luxury-border">
        <h1 className="text-2xl font-serif text-gold-500 gold-text-glow text-center">Demo Hotel</h1>
        <p className="text-xs text-stone-400 text-center mt-1 uppercase tracking-widest">Admin Portal</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setCurrentView(item.name)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
              currentView === item.name
                ? 'bg-gold-500/10 text-gold-400 border border-gold-500/20' 
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
            }`}
          >
            <item.icon size={18} />
            <span className="font-medium text-sm">{item.name}</span>
          </button>
        ))}
      </nav>
      
      <div className="p-4 border-t border-luxury-border">
        <button 
          onClick={onLogout}
          className="flex items-center space-x-3 px-4 py-3 w-full rounded-lg text-stone-400 hover:text-red-400 hover:bg-red-900/20 transition-all"
        >
          <LogOut size={18} />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};
