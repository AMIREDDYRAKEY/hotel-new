import React, { useState } from 'react';
import { Calendar, Users, Minus, Plus, ChevronDown } from 'lucide-react';

export const QuickBooking = ({ onFindRoom }) => {
  const [checkIn, setCheckIn] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [rooms, setRooms] = useState(1);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const incrementRooms = () => setRooms(prev => prev + 1);
  const decrementRooms = () => setRooms(prev => (prev > 1 ? prev - 1 : 1));

  const handleSearch = (e) => {
    e.preventDefault();
    if (onFindRoom) {
      onFindRoom({ checkIn, guests, rooms });
    }
  };

  return (
    <div className="w-full bg-[#0f0c0a] border-y border-gold-500/10 py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Title */}
        <div className="text-left w-full lg:w-auto">
          <h3 className="font-serif text-2xl tracking-wide text-stone-100">
            Quick Booking
          </h3>
        </div>

        {/* Inputs & Actions */}
        <form onSubmit={handleSearch} className="w-full lg:w-auto flex flex-col md:flex-row items-stretch md:items-center gap-4 flex-1 justify-end">
          
          {/* Check-In Date */}
          <div className="flex-1 max-w-sm relative flex items-center border border-gold-500/20 bg-stone-950/40 rounded-sm">
            <Calendar size={16} className="text-gold-500/60 ml-4 pointer-events-none absolute" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent pl-12 pr-4 py-3 text-sm text-stone-300 focus:outline-none focus:border-gold-500/50 appearance-none font-sans"
              required
            />
          </div>

          {/* Guests Selector */}
          <div className="flex-1 max-w-sm relative border border-gold-500/20 bg-stone-950/40 rounded-sm">
            <button
              type="button"
              onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm text-stone-300 focus:outline-none hover:bg-stone-900/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Users size={16} className="text-gold-500/60" />
                <span>{guests}</span>
              </div>
              <ChevronDown size={14} className="text-gold-500/60" />
            </button>

            {showGuestsDropdown && (
              <div className="absolute top-full left-0 w-full mt-1 bg-stone-900 border border-gold-500/20 rounded shadow-2xl z-30 py-2">
                {['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5+ Guests'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setGuests(option);
                      setShowGuestsDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-stone-300 hover:bg-gold-500 hover:text-stone-950 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Rooms Selector */}
          <div className="flex items-center justify-between border border-gold-500/20 bg-stone-950/40 px-4 py-3 rounded-sm gap-4 min-w-[140px]">
            <span className="text-sm text-stone-300">{rooms} {rooms === 1 ? 'room' : 'rooms'}</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={decrementRooms}
                className="w-6 h-6 flex items-center justify-center border border-gold-500/30 text-gold-500 hover:border-gold-500 rounded-full transition-colors"
              >
                <Minus size={12} />
              </button>
              <button
                type="button"
                onClick={incrementRooms}
                className="w-6 h-6 flex items-center justify-center border border-gold-500/30 text-gold-500 hover:border-gold-500 rounded-full transition-colors"
              >
                <Plus size={12} />
              </button>
            </div>
          </div>

          {/* FIND ROOM Button */}
          <button
            type="submit"
            className="px-8 py-3 border border-gold-500 text-stone-100 hover:bg-gold-500 hover:text-stone-950 transition-all duration-300 font-serif tracking-widest text-sm flex items-center justify-center gap-2 rounded-sm"
          >
            <span>FIND ROOM</span>
            <ChevronDown size={14} />
          </button>
        </form>
      </div>
    </div>
  );
};
