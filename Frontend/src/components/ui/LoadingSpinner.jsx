import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div
          className="w-10 h-10 border-2 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
