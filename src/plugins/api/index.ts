import { useUsers } from "plugins/api/users";
import { useRepos } from "plugins/api/repos";

const useAPI = () => {
  const users = useUsers();
  const repos = useRepos();

  return {
    ...users,
    ...repos,
  };
};

export default useAPI;
