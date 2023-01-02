import React, { useEffect } from "react";

import { useSnackbar } from "@atoms/snackbar";
import { formatUserName } from "@utils/userDisplay";

import { UsersAPI } from "../api";
import { User } from "../models";

interface UsersContextValue {
  /** List of users returned from the server. */
  users: User[];
  /** Load a list of users. */
  loadUsers: () => Promise<void>;
  /** Dislike a user and go to the next one. */
  dislikeUser: () => Promise<void>;
  /** Like a user and go to the next one. */
  likeUser: () => Promise<void>;
  /** Whether or not the users are loading. */
  loadingUsers: boolean;
}

const UsersContext = React.createContext<UsersContextValue>({
  users: [],
  loadUsers: async () => {},
  dislikeUser: async () => {},
  likeUser: async () => {},
  loadingUsers: false,
});

/**
 * A context provider used for anything related to users.
 */
export function UsersProvider(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const { open } = useSnackbar();
  const { children } = props;
  const [users, setUsers] = React.useState<User[]>([]);
  const [loadingUsers, setLoading] = React.useState<boolean>(false);
  console.log(loadingUsers);
  // Load users
  const loadUsers = React.useCallback(async () => {
    setLoading(true);
    const result = await UsersAPI.loadUsers();
    // Simulate a loading time
    setTimeout(() => {
      setUsers((prev) => [...prev, ...result.users]);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    // This is made for the example, it might lead to unwanted api calls if we keep it that way
    if (users.length < 10 && !loadingUsers) {
      loadUsers();
    }
  }, [users]);

  // Dislike user
  const dislikeUser = React.useCallback(async () => {
    setUsers((prev) => {
      const temp = [...prev];
      if (temp.length === 0) return temp;
      const targetUser = temp.splice(0, 1)[0];
      UsersAPI.dislikeUser(targetUser.id);
      return temp;
    });
  }, [users]);

  async function onLikeUser(user: User) {
    const res = await UsersAPI.likeUser(user.id);
    if (res.matched) {
      open({ message: `It's a match! With ${formatUserName(user.name)}` });
    }
  }

  // Like user
  const likeUser = React.useCallback(async () => {
    setUsers((prev) => {
      const temp = [...prev];
      if (temp.length === 0) return temp;
      const targetUser = temp.splice(0, 1)[0];
      onLikeUser(targetUser);
      return temp;
    });
  }, [users]);

  // Create context provider value
  const value = React.useMemo<UsersContextValue>(() => {
    return {
      users,
      loadUsers,
      dislikeUser,
      likeUser,
      loadingUsers,
    };
  }, [users, loadUsers, dislikeUser, likeUser, loadingUsers]);

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

/** A hook to manipulate users  */
export function useUsers(): UsersContextValue {
  return React.useContext(UsersContext);
}
