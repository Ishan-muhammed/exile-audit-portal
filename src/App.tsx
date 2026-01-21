import React from 'react';
import { Logo } from './components/Logo';
import { BookingFrame } from './components/BookingFrame';

const App: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen w-full bg-[#F9FAFB] text-gray-900 font-sans">
      {/* Header Section */}
      <header className="pt-10 pb-6 px-4 flex flex-col items-center space-y-5">
        <Logo />
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Book Your 15-Minute AI Audit
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Uncover high-impact automation opportunities and stop the "time-leaks" in your business.
          </p>
        </div>
      </header>

      {/* Main Booking Area */}
      <section className="flex-1 w-full max-w-5xl mx-auto px-0 md:px-4 mb-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <BookingFrame />
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-4 text-center text-[10px] text-gray-400 uppercase tracking-[0.2em]">
        © 2026 Exile Automate • Powered by Cal.com
      </footer>
    </main>
  );
};

export default App;
