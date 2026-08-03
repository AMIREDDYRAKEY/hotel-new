import React from 'react';

export const Footer = ({ setActivePage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0807] text-stone-400 py-16 px-6 md:px-12 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* About / Logo */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-gold-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M11.645 20.91l-.007-.003-.003-.001a.752.752 0 01-.7-.45l-4.5-9a.75.75 0 01.378-1.026l5.25-2.25a.75.75 0 01.57 0l5.25 2.25a.75.75 0 01.377 1.025l-4.5 9a.752.752 0 01-.701.452l-.003.001-.007.003-.06.027a.75.75 0 01-.616 0l-.06-.027zM12 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-6 3.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm12 0a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z" />
            </svg>
            <span className="font-serif text-lg tracking-[0.2em] text-stone-100 uppercase">
              Majestic Hotel
            </span>
          </div>
          <p className="text-sm leading-relaxed text-stone-400 font-light mt-2">
            Experience refined accommodations tailored for discerning guests. A sanctuary of pure luxury and timeless comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-gold-500 tracking-wider text-sm uppercase">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm">
            {['Rooms', 'Dining', 'Spa', 'Events', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActivePage(item.toLowerCase())}
                  className="hover:text-gold-500 transition-colors text-stone-400 font-light"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-gold-500 tracking-wider text-sm uppercase">Contact Us</h4>
          <p className="text-sm font-light leading-relaxed">
            100 Luxury Boulevard<br />
            Ocean Front, FL 33101<br />
            United States
          </p>
          <p className="text-sm font-light mt-2">
            T: +1 (800) 555-0199<br />
            E: reservations@majestichotel.com
          </p>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-gold-500 tracking-wider text-sm uppercase">Newsletter</h4>
          <p className="text-sm font-light leading-relaxed">
            Subscribe to receive exclusive offers and seasonal news from Majestic.
          </p>
          <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="bg-stone-900 border border-gold-500/20 text-stone-300 text-xs px-4 py-3 focus:outline-none focus:border-gold-500 flex-1 font-sans rounded-l-sm"
              required
            />
            <button
              type="submit"
              className="bg-gold-500 text-stone-950 text-xs px-4 py-3 font-serif uppercase tracking-wider hover:bg-gold-600 transition-colors rounded-r-sm font-semibold"
            >
              Join
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-gold-500/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
        <p>© {currentYear} Majestic Hotel & Resort. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold-500 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};
