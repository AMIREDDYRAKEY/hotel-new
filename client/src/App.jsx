import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Loader } from './components/Loader'
import { Home } from './pages/Home'
import { Rooms } from './pages/Rooms'
import { Dining } from './pages/Dining'
import { Spa } from './pages/Spa'
import { Events } from './pages/Events'
import { Contact } from './pages/Contact'
import { Booking } from './pages/Booking'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { UserDashboard } from './pages/UserDashboard'
import { Toaster } from 'react-hot-toast'

export const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [activePage, setActivePage] = useState('home')
  const [authUser, setAuthUser] = useState(() => {
    const saved = localStorage.getItem('userInfo');
    return saved ? JSON.parse(saved) : null;
  });
  const [bookingState, setBookingState] = useState({
    checkIn: '',
    guests: '2 Guests',
    rooms: 1,
    selectedRoom: 'Deluxe Room'
  })

  // Scroll to top when active page changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activePage])

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} setBookingState={setBookingState} />;
      case 'rooms':
        return <Rooms setActivePage={setActivePage} setBookingState={setBookingState} />;
      case 'dining':
        return <Dining setActivePage={setActivePage} />;
      case 'spa':
        return <Spa setActivePage={setActivePage} />;
      case 'events':
        return <Events setActivePage={setActivePage} />;
      case 'contact':
        return <Contact />;
      case 'booking':
        return authUser ? <Booking bookingState={bookingState} setBookingState={setBookingState} authUser={authUser} setActivePage={setActivePage} /> : <Login setActivePage={setActivePage} setAuthUser={setAuthUser} />;
      case 'dashboard':
        return authUser ? <UserDashboard authUser={authUser} setAuthUser={setAuthUser} setActivePage={setActivePage} /> : <Home setActivePage={setActivePage} setBookingState={setBookingState} />;
      case 'login':
        return <Login setActivePage={setActivePage} setAuthUser={setAuthUser} />;
      case 'register':
        return <Register setActivePage={setActivePage} setAuthUser={setAuthUser} />;
      default:
        return <Home setActivePage={setActivePage} setBookingState={setBookingState} />;
    }
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onLoadComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-luxury-bg text-stone-100 flex flex-col justify-between">
          <Toaster 
            position="top-center"
            toastOptions={{
              className: 'font-sans text-sm tracking-wide shadow-xl backdrop-blur-md',
              style: {
                background: 'rgba(28, 25, 23, 0.95)',
                color: '#fff',
                border: '1px solid rgba(212, 168, 83, 0.3)',
                borderRadius: '4px',
              },
              success: {
                iconTheme: {
                  primary: '#d4a853',
                  secondary: '#1c1917',
                },
              },
              error: {
                style: {
                  border: '1px solid rgba(244, 63, 94, 0.5)',
                },
              },
            }}
          />
          {activePage !== 'dashboard' && (
            <Navbar activePage={activePage} setActivePage={setActivePage} authUser={authUser} setAuthUser={setAuthUser} />
          )}
          
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>

          {!['dashboard', 'login', 'register'].includes(activePage) && (
            <Footer setActivePage={setActivePage} />
          )}
        </div>
      )}
    </>
  )
};

