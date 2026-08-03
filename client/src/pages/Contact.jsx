import React, { useState } from 'react';
import { Phone, Mail, MapPin, Compass } from 'lucide-react';

export const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Reservations',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', inquiryType: 'Reservations', message: '' });
    }, 4000);
  };

  return (
    <div className="pt-28 pb-20 bg-luxury-bg">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
        <h1 className="font-serif text-4xl md:text-6xl text-gold-500 font-light tracking-wider mb-4">
          Contact Majestic
        </h1>
        <p className="text-stone-400 max-w-xl mx-auto text-sm tracking-widest uppercase font-light">
          Get in touch with our guest experience or concierge team.
        </p>
        <div className="w-16 h-[1px] bg-gold-500/50 mx-auto mt-6"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info & Directions */}
        <div className="flex flex-col gap-10">
          <div>
            <span className="text-gold-500 text-xs tracking-[0.25em] uppercase font-semibold">Immediate Assistance</span>
            <h2 className="font-serif text-3xl text-stone-100 mt-2 mb-4">Concierge & Guest Relations</h2>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              We are dedicated to orchestrating an unforgettable stay. Whether arranging airport transfers, chartering yachts, or booking hard-to-get restaurant tables, our concierge team is at your complete service.
            </p>
          </div>

          <div className="flex flex-col gap-6 border-y border-gold-500/10 py-8">
            <div className="flex items-center gap-4 text-stone-300">
              <div className="w-10 h-10 flex items-center justify-center border border-gold-500/20 text-gold-500 rounded-full shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-xs uppercase text-stone-500 tracking-wider font-semibold">Concierge Desk</p>
                <p className="text-sm font-light">+1 (800) 555-0199</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-stone-300">
              <div className="w-10 h-10 flex items-center justify-center border border-gold-500/20 text-gold-500 rounded-full shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-xs uppercase text-stone-500 tracking-wider font-semibold">Concierge Email</p>
                <p className="text-sm font-light">concierge@majestichotel.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-stone-300">
              <div className="w-10 h-10 flex items-center justify-center border border-gold-500/20 text-gold-500 rounded-full shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-xs uppercase text-stone-500 tracking-wider font-semibold">Resort Location</p>
                <p className="text-sm font-light">100 Luxury Boulevard, Ocean Front, FL 33101</p>
              </div>
            </div>
          </div>

          {/* Valet / Arrival note */}
          <div className="bg-[#13100e] border border-gold-500/5 p-6 rounded-sm">
            <h4 className="font-serif text-gold-500 text-sm uppercase tracking-wider mb-2">Arrival & Parking</h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Complimentary 24-hour valet parking is available for all overnight hotel guests and restaurant patrons. Helicopter landing pad booking is available through the Guest Relations department with 48 hours notice.
            </p>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-[#13100e] border border-gold-500/5 p-8 md:p-12 rounded-sm shadow-xl relative">
          <span className="text-gold-500 text-xs tracking-[0.25em] uppercase font-semibold">Direct Inquiry</span>
          <h2 className="font-serif text-3xl text-stone-100 mt-2 mb-8">Send an Inquiry</h2>

          {formSubmitted ? (
            <div className="absolute inset-0 bg-[#13100e] flex flex-col items-center justify-center text-center p-8 z-10 rounded-sm">
              <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/30 rounded-full flex items-center justify-center text-gold-500 mb-6">
                <Compass className="animate-spin" size={32} />
              </div>
              <h3 className="font-serif text-2xl text-gold-500 mb-2">Inquiry Submitted</h3>
              <p className="text-stone-400 text-sm max-w-xs font-light">
                Thank you. A guest relations officer will contact you within the next 12 hours.
              </p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase text-stone-400 tracking-wider font-semibold">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="bg-stone-900 border border-gold-500/15 focus:border-gold-500 text-stone-300 text-sm px-4 py-3 rounded-sm focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase text-stone-400 tracking-wider font-semibold">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="bg-stone-900 border border-gold-500/15 focus:border-gold-500 text-stone-300 text-sm px-4 py-3 rounded-sm focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase text-stone-400 tracking-wider font-semibold">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="bg-stone-900 border border-gold-500/15 focus:border-gold-500 text-stone-300 text-sm px-4 py-3 rounded-sm focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase text-stone-400 tracking-wider font-semibold">Inquiry Type</label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="bg-stone-900 border border-gold-500/15 focus:border-gold-500 text-stone-300 text-sm px-4 py-3 rounded-sm focus:outline-none transition-colors cursor-pointer appearance-none"
                >
                  <option value="Reservations">Room Reservations</option>
                  <option value="Dining">Fine Dining Reservations</option>
                  <option value="Spa">Spa & Wellness Bookings</option>
                  <option value="Events">Weddings & Private Events</option>
                  <option value="General">General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase text-stone-400 tracking-wider font-semibold">Your Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How may we assist you?"
                className="bg-stone-900 border border-gold-500/15 focus:border-gold-500 text-stone-300 text-sm px-4 py-3 rounded-sm focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-stone-950 hover:text-stone-900 transition-all duration-300 font-serif tracking-[0.2em] text-sm uppercase rounded-sm font-semibold mt-2 shadow-lg"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
