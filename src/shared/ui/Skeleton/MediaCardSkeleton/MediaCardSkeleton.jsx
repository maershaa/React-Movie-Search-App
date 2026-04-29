import { MediaCardSkeletonWrapper, Card } from './MediaCardSkeleton.styled';

const MediaCardSkeleton = ({ count }) => {
  return (
    <MediaCardSkeletonWrapper>
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index}>
          <div className="skeleton_image"></div>
          <div className="skeleton_title"></div>

          <div className="skeleton_content">
            <div className="skeleton_rating"></div>
            <div className="skeleton_year"></div>
          </div>
        </Card>
      ))}
    </MediaCardSkeletonWrapper>
  );
};

export { MediaCardSkeleton };
