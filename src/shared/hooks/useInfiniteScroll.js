import { useState, useRef, useEffect, useCallback } from 'react';

const useInfiniteScroll = (loading, totalPages) => {
  const [currentPage, setCurrentPage] = useState(1);
  const targetRef = useRef(null); // ref для элемента внизу списка

  const handleObserver = useCallback(
    entries => {
      const canLoadMore =
        totalPages !== null && currentPage < totalPages && !loading;

      const entry = entries[0]; // берём первый отслеживаемый элемент

      // если элемент появился в зоне видимости, сейчас не идёт загрузка и страницы ещё есть
      if (entry.isIntersecting && canLoadMore) {
        setCurrentPage(prev => prev + 1);
      }
    },
    [currentPage, loading, totalPages]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '200px', //загрузка начнётся заранее, а не когда пользователь упёрся в конец
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    const node = targetRef.current; //элемент при достижении которого подгружаем еще фото

    if (node) observer.observe(node); // начинаем следить за элементом

    return () => {
      // очистка при размонтировании или обновлении
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  }, [handleObserver]);

  return {
    currentPage,
    targetRef,
    setCurrentPage,
  };
};
export { useInfiniteScroll };
