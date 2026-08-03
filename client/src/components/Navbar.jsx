import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = ({ activePage, setActivePage, authUser, setAuthUser }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Rooms", id: "rooms" },
    { name: "Dining", id: "dining" },
    { name: "Spa", id: "spa" },
    { name: "Events", id: "events" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-stone-950/90 backdrop-blur-lg border-b border-yellow-500/20 shadow-xl py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* ================= Logo ================= */}
          <div
            onClick={() => setActivePage("home")}
            className="flex flex-col items-start cursor-pointer flex-shrink-0"
          >
            <div className="text-yellow-500 hover:text-yellow-400 transition-colors duration-300 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M11.645 20.91l-.007-.003-.003-.001a.752.752 0 01-.7-.45l-4.5-9a.75.75 0 01.378-1.026l5.25-2.25a.75.75 0 01.57 0l5.25 2.25a.75.75 0 01.377 1.025l-4.5 9a.752.752 0 01-.701.452l-.003.001-.007.003-.06.027a.75.75 0 01-.616 0l-.06-.027zM12 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-6 3.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm12 0a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z" />
              </svg>
            </div>

            <span className="font-serif text-lg tracking-[0.28em] uppercase text-stone-100 hover:text-yellow-500 transition-colors duration-300">
              Majestic Hotel
            </span>
          </div>

          {/* ================= Desktop Menu ================= */}
          <div className="hidden lg:flex items-center gap-10 ml-auto">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`relative uppercase text-xs tracking-[0.25em] transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:bg-yellow-500 after:transition-all after:duration-300 ${
                  activePage === link.id
                    ? "text-yellow-500 after:w-full"
                    : "text-stone-300 hover:text-yellow-500 after:w-0 hover:after:w-full"
                }`}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => {
                if (authUser) {
                  setActivePage("booking");
                } else {
                  setActivePage("login");
                }
              }}
              className="ml-2 px-6 py-2 border border-yellow-500 rounded-sm uppercase tracking-[0.18em] text-xs text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Book Now
            </button>
            
            {authUser && (
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-stone-800">
                <button 
                  onClick={() => setActivePage("dashboard")}
                  className="text-stone-300 text-sm tracking-wider hover:text-yellow-500 transition-colors cursor-pointer"
                >
                  Hello, {authUser.name.split(' ')[0]}
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem('userInfo');
                    setAuthUser(null);
                    setActivePage('home');
                  }}
                  className="text-stone-400 hover:text-rose-400 uppercase tracking-widest text-xs transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* ================= Mobile Menu Button ================= */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-200 hover:text-yellow-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= Mobile Menu ================= */}
      <div
        className={`fixed inset-0 z-40 bg-stone-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              setActivePage(link.id);
              setIsMobileMenuOpen(false);
            }}
            className={`uppercase tracking-[0.3em] text-xl transition-colors ${
              activePage === link.id
                ? "text-yellow-500"
                : "text-stone-300 hover:text-yellow-500"
            }`}
          >
            {link.name}
          </button>
        ))}

        <button
          onClick={() => {
            if (authUser) {
              setActivePage("booking");
            } else {
              setActivePage("login");
            }
            setIsMobileMenuOpen(false);
          }}
          className="mt-4 px-8 py-3 border border-yellow-500 text-yellow-500 uppercase tracking-[0.2em] hover:bg-yellow-500 hover:text-black transition-all duration-300"
        >
          Book Your Stay
        </button>

        {authUser && (
          <div className="mt-6 flex flex-col gap-4 items-center">
            <button 
              onClick={() => {
                setActivePage("dashboard");
                setIsMobileMenuOpen(false);
              }}
              className="text-stone-300 tracking-wider hover:text-yellow-500 transition-colors"
            >
              Hi, {authUser.name}
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('userInfo');
                setAuthUser(null);
                setIsMobileMenuOpen(false);
                setActivePage('home');
              }}
              className="text-rose-400 uppercase tracking-widest text-sm"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};