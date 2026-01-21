import React from 'react';
import { Logo } from './components/Logo';
import { BookingFrame } from './components/BookingFrame';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-10">
      <Logo />
      <h1 className="text-3xl font-bold mt-6 mb-2">Book Your 15-Minute AI Audit</h1>
      <p className="text-gray-600 mb-10">Find your automation strategy today.</p>
      <div className="w-full max-w-4xl h-[700px] shadow-xl rounded-xl overflow-hidden">
        <BookingFrame />
      </div>
    </div>
  );
}
