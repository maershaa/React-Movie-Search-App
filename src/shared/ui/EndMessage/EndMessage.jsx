import {
  MessageContainer,
  IconWrapper,
  Text,
  Divider,
} from './EndMessage.styled';
import { FaClapperboard } from 'react-icons/fa6';

const EndMessage = ({ text = 'Sorry, nothing found.' }) => {
  return (
    <MessageContainer>
      <IconWrapper>
        <FaClapperboard size={32} />
      </IconWrapper>
      <Text>{text}</Text>
      <Divider />
    </MessageContainer>
  );
};

export { EndMessage };
