"use client";

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show when scrolled more than 1000px
      const shouldShow = scrollTop > 1000;
      
      // Hide when footer is in view (last 300px of page)
      const footerThreshold = documentHeight - windowHeight - 300;
      const shouldHide = scrollTop > footerThreshold;
      
      setIsVisible(shouldShow && !shouldHide);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-600 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ 
        backgroundColor: 'var(--light-blue)',
        color: 'var(--white)',
        borderRadius: '2px'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--blue)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--light-blue)'}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTop;
