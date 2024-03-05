import React, { useEffect, useState } from 'react'

const ScrollToTopButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

      const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);

    return (
        <div>
            {isVisible && 
            <button onClick={scrollToTop} className="fixed bg-zinc-100/90 bottom-10 right-10 hover:bg-zinc-100 dark:bg-slate-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline border shadow-lg animate-bounce">
                <span className='flex flex-row items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="ml-2">Ir arriba</span>
                </span>
            </button>
            }
        </div>
    )
}

export default ScrollToTopButton;
