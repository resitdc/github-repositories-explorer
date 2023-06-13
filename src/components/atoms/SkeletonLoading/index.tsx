import React from "react";

interface SkeletonLoadingProps {
  className?: string | null | undefined;
  width?: string;
  height?: string;
  radius?: string;
}

const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({
  className,
  width,
  height,
  radius
}) => {
  const classes: string[] = ["skeleton-loading"];

  interface SkeletonStyle {
    width?: string;
    height?: string;
    borderRadius?: string;
  }

  const skeletonStyle: SkeletonStyle = {};

  if (className) classes.push(className);
  if (width) skeletonStyle.width = width;
  if (height) skeletonStyle.height = height;
  if (radius) skeletonStyle.borderRadius = radius;

  return <div className={classes.join(" ")} style={skeletonStyle}></div>;
};

export default SkeletonLoading;
