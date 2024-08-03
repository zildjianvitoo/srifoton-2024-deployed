// hooks/useUsers.ts

import { useState, useEffect } from "react";
import { fetchUsers } from "../lib/network/users/userQueries";
import { User } from "../lib/types/userTypes";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    };

    loadUsers();
  }, []);

  return { users, loading };
};

export default useUsers;
