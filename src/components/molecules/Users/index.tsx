
import React from "react";
import { User } from "components/molecules";

interface Data {
  username: string;
  id?: string | number;
}

interface UsersProps {
  data: Data[]
};

const Users: React.FC<UsersProps> = (props) => {
  const {
    data
  } = props;

  return (
    <ul className="users">
      {
        data.map((user, index) => (
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