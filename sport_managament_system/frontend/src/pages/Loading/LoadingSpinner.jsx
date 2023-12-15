
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Use Tailwind CSS classes for a spinner */}
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500 border-r-2 border-b-2 border-gray-500"></div>
    </div>
  );
};

export default LoadingSpinner;
