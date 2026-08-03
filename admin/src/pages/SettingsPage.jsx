import React, { useState } from 'react';
import { User, Bell, Shield, PaintBucket, Globe, X, Save, Check } from 'lucide-react';
import toast from 'react-hot-toast';

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  
  // Mock Settings State
  const [profile, setProfile] = useState({ name: 'Admin User', email: 'admin@demohotel.com', phone: '+1 (555) 019-8273' });
  const [notifications, setNotifications] = useState({ emailAlerts: true, smsAlerts: false, marketing: false });
  const [preferences, setPreferences] = useState({ currency: 'USD', timezone: 'UTC-5 (EST)' });
  
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (sectionName) => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setActiveSection(null);
      toast.success(`${sectionName} updated successfully`);
    }, 800);
  };

  const renderProfileSettings = () => (
    <div className="mt-6 space-y-4 pt-6 border-t border-stone-800 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium tracking-wider text-stone-400 uppercase">Full Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({...profile, name: e.target.value})}
            className="w-full bg-stone-900/50 border border-stone-800 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-white rounded-xl py-2.5 px-4 outline-none transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium tracking-wider text-stone-400 uppercase">Email Address</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({...profile, email: e.target.value})}
            className="w-full bg-stone-900/50 border border-stone-800 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-white rounded-xl py-2.5 px-4 outline-none transition-all"
          />
        </div>
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-xs font-medium tracking-wider text-stone-400 uppercase">Phone Number</label>
          <input
            type="text"
            value={profile.phone}
            onChange={(e) => setProfile({...profile, phone: e.target.value})}
            className="w-full bg-stone-900/50 border border-stone-800 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-white rounded-xl py-2.5 px-4 outline-none transition-all"
          />
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <button onClick={() => setActiveSection(null)} className="px-4 py-2 text-stone-400 hover:text-white transition-colors text-sm font-medium">Cancel</button>
        <button onClick={() => handleSave('Profile')} disabled={isSaving} className="px-5 py-2 bg-luxury-gold text-luxury-bg hover:bg-gold-600 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all">
          {isSaving ? <span className="animate-spin rounded-full h-4 w-4 border-2 border-luxury-bg/30 border-t-luxury-bg" /> : <Save className="w-4 h-4" />}
          Save Changes
        </button>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="mt-6 space-y-4 pt-6 border-t border-stone-800 animate-fade-in">
      {[
        { id: 'emailAlerts', label: 'Email Alerts', desc: 'Receive instant emails for new bookings' },
        { id: 'smsAlerts', label: 'SMS Notifications', desc: 'Get text messages for urgent issues' },
        { id: 'marketing', label: 'Marketing Updates', desc: 'Receive platform news and updates' }
      ].map(toggle => (
        <div key={toggle.id} className="flex items-center justify-between py-2">
          <div>
            <p className="text-stone-200 font-medium">{toggle.label}</p>
            <p className="text-stone-500 text-xs mt-0.5">{toggle.desc}</p>
          </div>
          <button 
            onClick={() => setNotifications({...notifications, [toggle.id]: !notifications[toggle.id]})}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${notifications[toggle.id] ? 'bg-luxury-gold' : 'bg-stone-700'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${notifications[toggle.id] ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
        </div>
      ))}
      <div className="flex justify-end pt-4">
        <button onClick={() => handleSave('Notifications')} disabled={isSaving} className="px-5 py-2 bg-luxury-gold text-luxury-bg hover:bg-gold-600 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all">
          <Check className="w-4 h-4" /> Done
        </button>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="mt-6 space-y-4 pt-6 border-t border-stone-800 animate-fade-in">
      <div className="space-y-1.5">
        <label className="text-xs font-medium tracking-wider text-stone-400 uppercase">Current Password</label>
        <input type="password" placeholder="••••••••" className="w-full bg-stone-900/50 border border-stone-800 focus:border-luxury-gold text-white rounded-xl py-2.5 px-4 outline-none transition-all" />
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-medium tracking-wider text-stone-400 uppercase">New Password</label>
        <input type="password" placeholder="Enter new password" className="w-full bg-stone-900/50 border border-stone-800 focus:border-luxury-gold text-white rounded-xl py-2.5 px-4 outline-none transition-all" />
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <button onClick={() => setActiveSection(null)} className="px-4 py-2 text-stone-400 hover:text-white transition-colors text-sm font-medium">Cancel</button>
        <button onClick={() => handleSave('Security')} disabled={isSaving} className="px-5 py-2 bg-rose-600 text-white hover:bg-rose-500 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all">
          {isSaving ? 'Updating...' : 'Update Password'}
        </button>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="mt-6 space-y-4 pt-6 border-t border-stone-800 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium tracking-wider text-stone-400 uppercase">Currency</label>
          <select 
            value={preferences.currency}
            onChange={(e) => setPreferences({...preferences, currency: e.target.value})}
            className="w-full bg-stone-900 border border-stone-800 text-white rounded-xl py-2.5 px-4 outline-none focus:border-luxury-gold transition-all"
          >
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium tracking-wider text-stone-400 uppercase">Timezone</label>
          <select 
            value={preferences.timezone}
            onChange={(e) => setPreferences({...preferences, timezone: e.target.value})}
            className="w-full bg-stone-900 border border-stone-800 text-white rounded-xl py-2.5 px-4 outline-none focus:border-luxury-gold transition-all"
          >
            <option>UTC-5 (EST)</option>
            <option>UTC+0 (GMT)</option>
            <option>UTC+1 (CET)</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <button onClick={() => setActiveSection(null)} className="px-4 py-2 text-stone-400 hover:text-white transition-colors text-sm font-medium">Cancel</button>
        <button onClick={() => handleSave('Preferences')} disabled={isSaving} className="px-5 py-2 bg-luxury-gold text-luxury-bg hover:bg-gold-600 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all">
          <Save className="w-4 h-4" /> Save
        </button>
      </div>
    </div>
  );

  const sections = [
    {
      id: 'profile',
      title: 'Profile Settings',
      icon: User,
      description: 'Manage your administrative profile and contact information.',
      action: 'Edit Profile',
      renderContent: renderProfileSettings
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      description: 'Configure how you receive alerts for new bookings and messages.',
      action: 'Configure',
      renderContent: renderNotifications
    },
    {
      id: 'security',
      title: 'Security',
      icon: Shield,
      description: 'Update password, 2FA, and review active sessions.',
      action: 'Manage Security',
      renderContent: renderSecurity
    },
    {
      id: 'preferences',
      title: 'System Preferences',
      icon: Globe,
      description: 'Adjust timezone, currency, and default language settings.',
      action: 'System Settings',
      renderContent: renderPreferences
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-serif text-gold-500 mb-2">Settings</h2>
          <p className="text-stone-400">Manage your account and system preferences.</p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section.id} className={`bg-stone-900/60 border ${activeSection === section.id ? 'border-luxury-gold/50 shadow-lg shadow-gold-500/5' : 'border-stone-800/80'} p-6 rounded-2xl backdrop-blur-md transition-all duration-300`}>
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl border transition-colors ${activeSection === section.id ? 'bg-luxury-gold/20 border-luxury-gold/30' : 'bg-stone-800/50 border-white/5'}`}>
                <section.icon className={`w-6 h-6 ${activeSection === section.id ? 'text-luxury-gold' : 'text-gold-400'}`} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{section.title}</h3>
                    <p className="text-sm text-stone-400 mb-2">{section.description}</p>
                  </div>
                  {activeSection !== section.id ? (
                    <button 
                      onClick={() => setActiveSection(section.id)}
                      className="text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors uppercase tracking-wider px-3 py-1.5 rounded-lg hover:bg-gold-500/10"
                    >
                      {section.action}
                    </button>
                  ) : (
                    <button onClick={() => setActiveSection(null)} className="p-1.5 text-stone-400 hover:text-white bg-stone-800/50 rounded-lg transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
                {/* Expandable Content Area */}
                {activeSection === section.id && section.renderContent()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
