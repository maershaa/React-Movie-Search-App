import {
  CastItemSkeletonWrapper,
  SkeletonItem,
} from './CastItemSkeleton.styled';

const CastItemSkeleton = ({ count }) => {
  return (
    <CastItemSkeletonWrapper>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonItem key={index}>
          <div className="skeleton__image"></div>{' '}
          <div className="skeleton__info">
            <div className="skeleton__title"></div>
            <div className="skeleton__text"></div>
          </div>
        </SkeletonItem>
      ))}
    </CastItemSkeletonWrapper>
  );
};

export { CastItemSkeleton };
