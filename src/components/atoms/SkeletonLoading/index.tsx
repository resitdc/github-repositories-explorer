import React from "react";

interface SkeletonLoadingProps {
  className?: string | null | undefined;
  width?: string;
  height?: string;
  radius?: string;
}

const SkeletonLoading: React.FC = (
  {
    className,
    width,
    height,
    radius
  }: SkeletonLoadingProps) =>
{
  const classes: any[] = ["skeleton-loading"];
  
  interface SkeletonStyle {
    width?: string;
    height?: string;
    borderRadius?: string;
  };

  const skeletonStyle: SkeletonStyle = {};

  classes.push(className);
  if (width) skeletonStyle.width = width;
  if (height) skeletonStyle.height = height;
  if (radius) skeletonStyle.borderRadius = radius;

  return (
    <div className={classes.join(" ")} style={skeletonStyle}></div>
  );
};

export default SkeletonLoading;