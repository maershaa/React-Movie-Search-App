import { IoMdArrowBack } from 'react-icons/io';
import { BackButton } from './BackButton.styles';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';

const BackButtonComponent = ({ fallback = '/' }) => {
  const location = useLocation();

  /**
   * ❗ Ключевой момент:
   * Мы фиксируем значение "from" ОДИН раз при первом рендере.
   *
   * Почему не useRef:
   * - ref нельзя безопасно читать во время render (React 18+ ошибка)
   * - ref не участвует в реактивности
   *
   * Почему не просто location.state:
   * - при переходах на вложенные маршруты (cast, reviews)
   *   location.state может перезаписаться или исчезнуть
   *
   * Почему useState:
   * - useState(() => initialValue) вызывается только один раз
   * - значение стабильно и не изменяется при дальнейших рендерах
   * - безопасно использовать в render
   *
   * Итог:
   * мы сохраняем "откуда пришли" и больше не зависим от location.state
   */
  const [backLink] = useState(() => {
    return location.state?.from ?? fallback;
  });

  return (
    <BackButton as={Link} to={backLink}>
      <IoMdArrowBack /> Back
    </BackButton>
  );
};

export { BackButtonComponent };
