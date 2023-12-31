
import React from "react";

interface UserButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  isActive?: boolean;
  label?: string;
  onClick?: () => void;
};

const UserButton: React.FC<UserButtonProps> = (props) => {
  const {
    children,
    isLoading = false,
    onClick,
    isActive,
    label,
  } = props;

  return (
    <li className={`user${isActive ? " active" : ""}`}>
      <button
        type="button"
        className={`user-head${isLoading ? " user-loading" : ""}`}
        onClick={onClick}
      >
        <div className="user-name">{label}</div>
      </button>
      {!isLoading && isActive ? children : ""}
    </li>
  );
};

export default UserButton;