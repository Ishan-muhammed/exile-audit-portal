import React from 'react';

export const BookingFrame: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[600px] bg-white rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl">
      <iframe
        src="https://cal.com/exile-automate-vvgfkw/15-minute-ai-efficiency-audit?embed=true"
        title="Exile Automate AI Audit"
        width="100%"
        height="100%"
        frameBorder="0"
        className="w-full h-full border-none"
        style={{ minHeight: '600px' }}
      ></iframe>
    </div>
  );
};
