import { AvatarContainer, AvatarImage, PlaceholderText } from './Avatar.styled';

const Avatar = ({ src, name, size, variant = 'square' }) => {
  // Рассчитываем размер шрифта для заглушки пропорционально размеру аватара
  const fontSize = parseInt(size) / 2.5 + 'px';

  return (
    <AvatarContainer size={size} variant={variant}>
      {src ? (
        <AvatarImage src={src} alt={name} loading="lazy" />
      ) : (
        <PlaceholderText fontSize={fontSize}>
          {name ? name.charAt(0) : '?'}
        </PlaceholderText>
      )}
    </AvatarContainer>
  );
};

export { Avatar };
