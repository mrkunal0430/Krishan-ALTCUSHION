import React from 'react';

const SectionWrapper = ({ 
  children, 
  className = "", 
  id = "",
  background = "transparent" // 'transparent', 'dark', 'glass'
}) => {
  const bgClasses = {
    transparent: 'bg-transparent',
    dark: 'bg-navy-900/50',
    glass: 'glass-panel relative overflow-hidden',
  };

  return (
    <section id={id} className={`py-14 md:py-20 ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
