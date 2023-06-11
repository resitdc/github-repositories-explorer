/* eslint-disable @typescript-eslint/no-inferrable-types */
import axiosInstance from "plugins/axios";

export const useUsers = () => {
  // Axios hooks
  const axios = axiosInstance();

  // Get all github users
  const getUsers = (
    perPage: number = 10,
    page: number = 1
  ) =>
    axios.get("/users", {
      params: { 
        per_page: perPage,
        page
      },
    });

  // Get github users detail
  const getUsersDetail = (username: string) => axios.get(`/users/${username}`);

  // Get github users by search query base on username
  const getUsersSearch = (
    username: string,
    perPage: number = 10,
    page: number = 1
  ) =>
    axios.get(`/search/users?q=${username}`, {
      params: {
        per_page: perPage,
        page
      },
    });

  return {
    getUsers,
    getUsersDetail,
    getUsersSearch,
  };
};
