
import React from "react";
import { User } from "components/molecules";
import { SkeletonLoading } from "components/atoms";

interface Data {
  username: string;
  id?: string | number;
}

interface UsersProps {
  data: Data[];
  isLoading?: boolean;
};

const Users: React.FC<UsersProps> = (props) => {
  const {
    data,
    isLoading = false,
  } = props;

  return (
    <ul className="users">
      {
        isLoading
          ? [...Array(5)].map((index) => (
            <SkeletonLoading
              key={index}
              className="user"
              height="37px"
            />
          ))
          : data.map((user, index) => (
            <User
              key={user.id || index}
              username={user.username}
            />
          ))
      }
    </ul>
  );
};

export default Users;