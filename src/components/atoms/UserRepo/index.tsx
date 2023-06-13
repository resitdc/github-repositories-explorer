
import React from "react";

interface UserRepoProps {
  title?: string;
  description?: string;
  stars?: string | number | null;
};

const UserRepo: React.FC<UserRepoProps> = (props) => {
  const {
    title,
    description,
    stars = 0,
  } = props;

  return (
    <li className="user-repo">
      <div className="user-repo-title">{title}</div>
      {
        description &&
        <div className="user-repo-description">{description}</div>
      }
      <div className="user-repo-stars">{stars}</div>
    </li>
  );
};

export default UserRepo;