import { UsersTypes, Repository, UserRepository } from "interfaces/github";
import {
  ClearAllAction,
  ClearReposAction,
  ClearUsersAction,
  SetReposAction,
  SetUsersAction
} from "./interfaces";

export const setUsers = (user: UsersTypes): SetUsersAction => ({
  type: "SET_USERS",
  payload: user
});

export const setRepos = (userRepository: UserRepository): SetReposAction => ({
  type: "SET_REPOS",
  payload: userRepository
});

export const clearUsers = (): ClearUsersAction => ({
  type: "CLEAR_USERS",
});

export const clearRepos = (): ClearReposAction => ({
  type: "CLEAR_REPOS",
});

export const clearAll = (): ClearAllAction => ({
  type: "CLEAR_ALL",
});
