import { ErrorContainer } from './ErrorMessage.styled';
const ErrorMessage = ({ message, onRetry }) => {
  return (
    <ErrorContainer>
      <h3>Something went wrong</h3>
      <p>{message || 'Please try again later'}</p>

      {onRetry && (
        <button className="retry-button" onClick={onRetry}>
          Try again
        </button>
      )}
    </ErrorContainer>
  );
};

export { ErrorMessage };
