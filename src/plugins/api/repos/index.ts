/* eslint-disable @typescript-eslint/no-inferrable-types */
import axiosInstance from "plugins/axios";

export const useRepos = () => {
  // Axios hooks
  const axios = axiosInstance();

  // Get all repos users
  const getUsersRepos = (
    username: string | null | undefined,
    perPage: number = 10,
    page: number = 1
  ) =>
    axios.get(`/users/${username}/repos`, {
      params: {
        per_page: perPage,
        page
      },
    });

  return {
    getUsersRepos,
  };
};
