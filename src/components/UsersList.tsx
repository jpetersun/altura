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

  return (
    <ul>
      {usersResult?.users?.map((user: User) => {
        return (
          <UserItem
            user={user}
            displayUserDetails={displayUserDetails}
            isDisplayUserDetails={isDisplayUserDetails}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
