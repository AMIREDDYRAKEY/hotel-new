import React from 'react';
import { QuickBooking } from '../components/QuickBooking';

// Import local assets
import heroImg from '../assets/hero.jpg';
import roomDeluxeImg from '../assets/room_deluxe.jpg';
import roomJuniorImg from '../assets/room_junior.jpg';
import roomExecutiveImg from '../assets/room_executive.jpg';
import gallery1Img from '../assets/gallery_1.jpg';
import gallery2Img from '../assets/gallery_2.jpg';
import gallery3Img from '../assets/gallery_3.jpg';

export const Home = ({ setActivePage, setBookingState }) => {
  
  const handleFindRoom = (data) => {
    setBookingState(data);
    setActivePage('booking');
  };

  const rooms = [
    {
      name: 'Deluxe Room',
      image: roomDeluxeImg,
      description: 'Sanctuary of comfort & elegant detail',
    },
    {
      name: 'Junior Suite',
      image: roomJuniorImg,
      description: 'Spacious retreat with spectacular urban views',
    },
    {
      name: 'Executive Suite',
      image: roomExecutiveImg,
      description: 'The pinnacle of luxury and bespoke service',
    }
  ];

  return (
    <div className="relative">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Dark Glow Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Majestic Hotel Hero"
            className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-hero-gradient"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center mt-16 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-light tracking-[0.25em] text-stone-300 mb-2">
            Welcome to
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-gold-500 font-light tracking-wide mb-6 gold-text-glow leading-tight">
            Pure Luxury & Comfort
          </h1>
          <p className="text-stone-300 text-sm md:text-base tracking-[0.15em] uppercase max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Experience refined accommodations tailored for discerning guests
          </p>
          <button 
            onClick={() => setActivePage('booking')}
            className="px-8 py-3.5 border border-gold-500 text-stone-100 tracking-[0.25em] text-xs hover:bg-gold-500 hover:text-stone-950 transition-all duration-500 uppercase rounded-sm bg-stone-950/20 backdrop-blur-sm"
          >
            Check Availability
          </button>
        </div>

        {/* Ambient bottom light overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-luxury-bg to-transparent pointer-events-none z-10"></div>
      </section>

      {/* Our Exclusive Rooms & Suites */}
      <section className="py-24 bg-[#0a0807] px-6 md:px-12 relative overflow-hidden">
        {/* Glow vector background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-glow pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl tracking-widest text-stone-100">
              Our Exclusive Rooms & Suites
            </h2>
            <div className="w-16 h-[1px] bg-gold-500/50 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, idx) => (
              <div 
                key={idx}
                className="group relative bg-[#13100e] border border-gold-500/5 overflow-hidden transition-all duration-500 hover:border-gold-500/30 luxury-card-glow rounded-sm"
              >
                {/* Image Wrap */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13100e] via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                  <h3 className="font-serif text-xl text-stone-100 group-hover:text-gold-500 transition-colors duration-300 mb-2">
                    {room.name}
                  </h3>
                  <p className="text-xs text-stone-400 font-serif italic tracking-wide">
                    {room.description}
                  </p>
                  <button 
                    onClick={() => setActivePage('rooms')}
                    className="mt-6 text-[10px] tracking-[0.25em] text-gold-500 hover:text-stone-100 uppercase transition-colors duration-300"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Booking */}
      <QuickBooking onFindRoom={handleFindRoom} />

      {/* Feature Experience / Services Grid */}
      <section className="py-24 bg-[#0c0a09] px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Header icon row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-24">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center group cursor-pointer" onClick={() => setActivePage('rooms')}>
              <div className="w-12 h-12 flex items-center justify-center text-gold-500 border border-gold-500/20 group-hover:border-gold-500 rounded-full transition-all duration-500 mb-6 bg-stone-950/40">
                {/* Virtual Tour custom SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5m3-16.125h3m-3 18.75h3M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h4 className="font-serif text-lg text-stone-100 group-hover:text-gold-500 transition-colors duration-300 mb-2">Virtual Tour</h4>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Preview Your Stay</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center group cursor-pointer" onClick={() => setActivePage('dining')}>
              <div className="w-12 h-12 flex items-center justify-center text-gold-500 border border-gold-500/20 group-hover:border-gold-500 rounded-full transition-all duration-500 mb-6 bg-stone-950/40">
                {/* Premium Dining custom SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                </svg>
              </div>
              <h4 className="font-serif text-lg text-stone-100 group-hover:text-gold-500 transition-colors duration-300 mb-2">Premium Dining</h4>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Exquisite Culinary Experiences</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center group cursor-pointer" onClick={() => setActivePage('spa')}>
              <div className="w-12 h-12 flex items-center justify-center text-gold-500 border border-gold-500/20 group-hover:border-gold-500 rounded-full transition-all duration-500 mb-6 bg-stone-950/40">
                {/* Luxury Spa custom SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l4 4m-4-4L8 7m4 14l4-4m-4 4l-4-4M3 12h18m-18 0l4 4m-4-4l4-4m14 4l-4 4m4-4l-4-4" />
                </svg>
              </div>
              <h4 className="font-serif text-lg text-stone-100 group-hover:text-gold-500 transition-colors duration-300 mb-2">Luxury Spa</h4>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Relax & Rejuvenate</p>
            </div>

          </div>

          {/* Bottom Images Row (exactly like photo) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Gallery Image 1 */}
            <div className="h-[450px] overflow-hidden group relative rounded-sm border border-gold-500/5">
              <img 
                src={gallery1Img} 
                alt="Luxury Suite Window View"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/10 transition-colors duration-500"></div>
            </div>

            {/* Gallery Image 2 */}
            <div className="h-[450px] overflow-hidden group relative rounded-sm border border-gold-500/5">
              <img 
                src={gallery2Img} 
                alt="Fine Dining Experience"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/10 transition-colors duration-500"></div>
            </div>

            {/* Gallery Image 3 */}
            <div className="h-[450px] overflow-hidden group relative rounded-sm border border-gold-500/5">
              <img 
                src={gallery3Img} 
                alt="Coastal Spa Sunset View"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/10 transition-colors duration-500"></div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
