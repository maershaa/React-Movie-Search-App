import {
  SimilarItemSkeletonWrapper,
  Item,
} from './SimilarMediaItemSkeleton.styled';

const SimilarMediaItemSkeleton = ({ count = 3 }) => {
  return (
    <SimilarItemSkeletonWrapper>
      {Array.from({ length: count }).map((_, index) => (
        <Item key={index}>
          <div className="skeleton_image"></div>
          <div className="skeleton_title"></div>
          <div className="skeleton_year"></div>
        </Item>
      ))}
    </SimilarItemSkeletonWrapper>
  );
};

export { SimilarMediaItemSkeleton };
