import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-2">
      <img 
        src="https://i.postimg.cc/Cx8Pcm7m/exile-logo-green.png" 
        alt="Exile Automate" 
        className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
        onError={(e) => {
          // Fallback to a professional text-based avatar if the image link fails
          e.currentTarget.src = "https://ui-avatars.com/api/?name=Exile+Automate&background=00B67A&color=fff";
        }}
      />
    </div>
  );
};
