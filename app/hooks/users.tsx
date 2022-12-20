import React from "react";
import { UsersAPI } from "../api";
import { User } from "../models";

interface UsersContextValue {
  /** List of users returned from the server. */
  users: User[];
  /** Load a list of users. */
  loadUsers: () => Promise<void>;
  /** Dislike a user and go to the next one. */
  dislikeUser: (userId: string) => Promise<void>;
  /** Like a user and go to the next one. */
  likeUser: (userId: string) => Promise<void>;
}

const UsersContext = React.createContext<UsersContextValue>({
  users: [],
  loadUsers: async () => {},
  dislikeUser: async () => {},
  likeUser: async () => {},
});

/**
 * A context provider used for anything related to users.
 */
export function UsersProvider(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const { children } = props;
  const [users, setUsers] = React.useState<User[]>([]);

  // Load users
  const loadUsers = React.useCallback(async () => {
    const result = await UsersAPI.loadUsers();

    setUsers((prev) => [...prev, ...result.users]);
  }, []);

  // Dislike user
  const dislikeUser = React.useCallback(
    async (userId: string) => {
      const result = await UsersAPI.dislikeUser(userId);
      setUsers((prev) => {
        let temp = [...prev];
        temp.splice(0, 1);
        return temp;
      });
    },
    [users]
  );

  // Like user
  const likeUser = React.useCallback(
    async (userId: string) => {
      const result = await UsersAPI.likeUser(userId);
      setUsers((prev) => {
        let temp = [...prev];
        temp.splice(0, 1);
        return temp;
      });
    },
    [users]
  );

  // Create context provider value
  const value = React.useMemo<UsersContextValue>(() => {
    return {
      users,
      loadUsers,
      dislikeUser,
      likeUser,
    };
  }, [users, loadUsers, dislikeUser, likeUser]);

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

/** A hook to manipulate users  */
export function useUsers(): UsersContextValue {
  return React.useContext(UsersContext);
}
