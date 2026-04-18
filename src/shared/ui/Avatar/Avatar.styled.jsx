import styled from '@emotion/styled';

// Стилизованный контейнер
const AvatarContainer = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border-radius: ${props => (props.variant === 'circle' ? '50%' : '8px')};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #86868b 0%, #86868b 100%);
  /* border: 1px solid rgba(255, 255, 255, 0.1); */
  flex-shrink: 0;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlaceholderText = styled.span`
  color: var(--white);
  font-weight: bold;
  font-size: ${props => props.fontSize || '16px'};
  text-transform: uppercase;
`;

export { AvatarContainer, AvatarImage, PlaceholderText };
