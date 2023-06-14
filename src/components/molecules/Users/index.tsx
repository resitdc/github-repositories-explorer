
import React, { useMemo } from "react";
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

const Users: React.FC<UsersProps> = ({ data, isLoading = false }) => {
  const userList = useMemo(() => {
    if (isLoading) {
      return [...Array(5)].map((index) => (
        <SkeletonLoading key={index} className="user" height="37px" />
      ));
    }
    return data.map((user, index) => (
      <User key={user.id || index} username={user.username} />
    ));
    
  }, [data, isLoading]);

  return <ul className="users">{userList}</ul>;
};

export default Users;