import {
  ReviewItemSkeletonWrapper,
  ReviewItem,
} from './ReviewItemSkeleton.styled';

const ReviewItemSkeleton = ({ count }) => {
  return (
    <ReviewItemSkeletonWrapper>
      {Array.from({ length: count }).map((_, index) => (
        <ReviewItem key={index}>
          <div className="skeleton_header">
            <div className="skeleton_image"></div>
            <div className="skeleton_username"></div>
          </div>
          <div className="skeleton_review"></div>
          <div className="skeleton_review"></div>
          <div className="skeleton_review"></div>
        </ReviewItem>
      ))}
    </ReviewItemSkeletonWrapper>
  );
};

export { ReviewItemSkeleton };
