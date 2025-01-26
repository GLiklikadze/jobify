import { SkeletonCard } from "./LoadingSkeleton";

const LoadingSkeletonList = () => {
  return (
    <div className="space-y-2 px-4">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export default LoadingSkeletonList;
