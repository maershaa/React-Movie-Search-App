import { useState, useEffect } from 'react';
import { ScrollWrapper, ScrollToTopBtn } from './ScrollToTop.styled';
import { throttle } from '@/shared';
import { FaArrowUp } from 'react-icons/fa6';
import { useMemo } from 'react';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  // Используем useMemo, чтобы throttle не пересоздавался при ререндерах
  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        const SCROLL_THRESHOLD = 800; //Сколько пикселей пользователь должен проскролить, чтобы что-то произошло
        const scrollPosition = window.scrollY; //Где сейчас находимся на странице
        setIsVisible(scrollPosition > SCROLL_THRESHOLD);
      }, 300),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [throttledScroll]);

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
