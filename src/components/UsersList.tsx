import { useEffect, useState } from "react";
import { fetchUsers, Users, User } from "../api";
import UserItem from "./UserItem";

const UsersList = () => {
  const [usersResult, setUsersResult] = useState<Users>();
  const [isDisplayUserDetails, setIsDisplayUserDetails] = useState<number[]>(
    []
  );

  useEffect(() => {
    const fetchUsersResult = fetchUsers();
    setUsersResult(fetchUsersResult);
  }, []);

  const displayUserDetails = (id: number) => {
    setIsDisplayUserDetails([...isDisplayUserDetails, id]);
  };

  const deleteUser = (id: number) => {
    if (usersResult) {
      const usersDeleteResult = usersResult.users.filter(
        (user) => user.id !== id
      );

      setUsersResult({
        ...usersResult,
        users: usersDeleteResult,
      });
    }
  };

  return (
    <ul>
      {usersResult?.users?.map((user: User) => {
        return (
          <UserItem
            key={user.id}
            user={user}
            displayUserDetails={displayUserDetails}
            isDisplayUserDetails={isDisplayUserDetails}
            deleteUser={deleteUser}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
