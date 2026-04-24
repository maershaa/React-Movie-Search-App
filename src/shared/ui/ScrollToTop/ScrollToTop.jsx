import { useState, useEffect } from 'react';

import { ScrollWrapper, ScrollToTopBtn } from './ScrollToTop.styled';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setIsVisible(scrollPosition > 800);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollWrapper>
      <ScrollToTopBtn
        type="button"
        onClick={scrollToTop}
        className={isVisible ? 'visible' : ''}
        aria-label="Back to top"
      >
        <FaArrowUp size={24} />
      </ScrollToTopBtn>
    </ScrollWrapper>
  );
};

export { ScrollToTop };
