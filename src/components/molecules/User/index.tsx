/* eslint-disable no-alert */
import React, { useState } from "react";
import { UserButton, UserRepo } from "components/atoms";
import { useDispatch, useSelector } from "react-redux";
import { setRepos } from "plugins/redux/actions/github";
import useAPI from "plugins/api";
import { Repository } from "interfaces/github";

interface UserProps {
  username?: string;
};

const User: React.FC<UserProps> = (props) => {
  const {
    username,
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const userRepos = useSelector((state: RootStateType) => state.githubReducer.repos);
  const { getUsersRepos } = useAPI();
  const [isActive, setIsActive] = useState(false);

  const fetchUserRepos =async () => {
    setIsLoading(true);
    try {
      // nolimit data 
      const response = await getUsersRepos(username, 0);
      const responseData = response.data;
      dispatch(setRepos({ key: username, value: responseData }));
    } catch (err) {
      const error = err as AxiosErrorResponse;
      const responseData = error?.response?.data as Response | undefined;
      if (responseData) {
        // In case backend have a message
        alert("Something wrong, message from backend");
      } else {
        alert("Something wrong, try again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const openRepos = () => {
    if (!userRepos[username]) fetchUserRepos();
    setIsActive((value) => !value);
  };

  return (
    <UserButton
      label={username}
      isActive={isActive}
      onClick={openRepos}
      isLoading={isLoading}
    >
      {
        userRepos[username] && 
        (
          userRepos[username].length > 0
            ? <ul className="user-repos">
              {
                userRepos[username].map((
                  { name, description, stargazers_count }: Repository,
                  index: number
                ) => (
                  <UserRepo
                    title={name}
                    description={description}
                    stars={stargazers_count}
                    key={index}
                  />
                ))
              }
            </ul>
            : <li className="user-no-repos">No Repos in this user</li>
        )
      }
    </UserButton>
  );
};

export default User;