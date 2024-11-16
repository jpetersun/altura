import { useEffect, useState } from "react";
import "./App.css";
import { fetchUsers, Users, User } from "./api";

function App() {
  const [usersResult, setUsersResult] = useState<Users>();
  const [isDisplayUserDetails, setIsDisplayUserDetails] = useState<any>([]);

  useEffect(() => {
    const fetchUsersResult = fetchUsers();
    setUsersResult(fetchUsersResult);
  }, []);

  const displayUserDetails = (id: number) => {
    setIsDisplayUserDetails([...isDisplayUserDetails, id]);
  };

  return (
    <>
      <ul>
        {usersResult?.users?.map((user: User) => {
          return (
            <li key={user.id} onClick={() => displayUserDetails(user.id)}>
              {user.firstName} {user.lastName}
              {!isDisplayUserDetails.includes(user.id) ? null : (
                <p>
                  {user.id} {user.firstName} {user.lastName} {user.username}{" "}
                  {user.phoneNumber}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
