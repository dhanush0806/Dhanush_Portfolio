import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FloatingScrollButton = ({ scrollTo }) => {
  const [scrollPosition, setScrollPosition] = useState('top'); // 'top' | 'hidden' | 'bottom'
  const [isTopVisible, setIsTopVisible] = useState(true);

  const hideTimerRef = useRef(null);
  const idleTimerRef = useRef(null);

  useEffect(() => {
    // 1. Initial Load: Show button immediately, then auto-hide after 3 seconds
    hideTimerRef.current = setTimeout(() => {
      setIsTopVisible(false);
    }, 3000);

    // 2. Initial 10-second inactivity check
    idleTimerRef.current = setTimeout(() => {
      if (window.scrollY < 140) {
        setIsTopVisible(true);
      }
    }, 10000);

    // Function to handle user activity and reset idle timer
    const resetIdleTimer = () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      // If at top and currently visible, hide after 3 seconds
      if (window.scrollY < 140) {
        hideTimerRef.current = setTimeout(() => {
          setIsTopVisible(false);
        }, 3000);
      }

      // If user does NO action for 10 seconds, show the button again
      idleTimerRef.current = setTimeout(() => {
        if (window.scrollY < 140) {
          setIsTopVisible(true);
        }
      }, 10000);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY < 140) {
        setScrollPosition('top');
      } else if (windowHeight + scrollY >= documentHeight - 700) {
        setScrollPosition('bottom');
      } else {
        setScrollPosition('hidden');
      }

      resetIdleTimer();
    };

    const userActivityEvents = ['mousemove', 'keydown', 'touchstart', 'click'];
    userActivityEvents.forEach((event) =>
      window.addEventListener(event, resetIdleTimer, { passive: true })
    );
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      userActivityEvents.forEach((event) =>
        window.removeEventListener(event, resetIdleTimer)
      );
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (scrollPosition === 'top') {
      if (scrollTo) {
        scrollTo('about');
      } else {
        const aboutEl = document.getElementById('about');
        if (aboutEl) {
          aboutEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (scrollPosition === 'bottom') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Determine whether the button should be rendered visible:
  // - At bottom: always visible ("Back to top")
  // - In middle: hidden
  // - At top: visible on load (for 3s) and when idle for 10s ("Scroll to explore")
  const isVisible =
    scrollPosition === 'bottom' ||
    (scrollPosition === 'top' && isTopVisible);

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 pointer-events-none">
      <div
        className={`transition-all duration-500 transform ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-6 scale-95 pointer-events-none'
        }`}
      >
        <button
          onClick={handleClick}
          className="group flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:border-cyan-400 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 font-mono text-xs sm:text-sm font-semibold tracking-wide cursor-pointer whitespace-nowrap"
          aria-label={scrollPosition === 'top' ? 'Scroll to explore' : 'Back to top'}
        >
          {scrollPosition === 'top' ? (
            <>
              <span>Scroll to explore</span>
              <ChevronDown size={17} className="text-cyan-400 animate-bounce" />
            </>
          ) : (
            <>
              <ChevronUp size={17} className="text-cyan-400 group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Back to top</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
