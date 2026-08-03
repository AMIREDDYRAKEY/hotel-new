import React, { useState } from 'react';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      setLoading(false);
      if (email === 'rakeyr213@gmail.com' && password === '123456') {
        toast.success('Welcome back to Demo Hotel Admin');
        onLogin();
      } else {
        toast.error('Please enter valid credentials');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-luxury-bg flex items-center justify-center relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-luxury-glow pointer-events-none" />
      
      <div className="w-full max-w-md p-8 relative z-10 animate-fade-in">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-serif text-luxury-gold mb-3 tracking-wide">Demo Hotel</h1>
          <p className="text-stone-400 tracking-[0.2em] text-sm uppercase">Management Portal</p>
        </div>

        <div className="bg-luxury-card border border-luxury-border p-8 rounded-2xl shadow-2xl shadow-black/50">
          <h2 className="text-2xl font-serif text-white mb-6">Sign In</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-xs font-medium tracking-wider text-stone-400 uppercase">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-stone-500" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-900/50 border border-stone-800 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-white rounded-xl py-3 pl-11 pr-4 outline-none transition-all"
                  placeholder="rakeyr213@gmail.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium tracking-wider text-stone-400 uppercase">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-stone-500" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-stone-900/50 border border-stone-800 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-white rounded-xl py-3 pl-11 pr-4 outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-luxury-gold hover:bg-gold-600 text-luxury-bg font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center group disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-luxury-bg/30 border-t-luxury-bg rounded-full animate-spin" />
                  Authenticating...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Sign In
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-stone-500 text-xs">Enter your authorized administrator credentials.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
