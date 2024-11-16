import { useEffect, useState } from "react";
import "./App.css";
import { fetchUsers, Users, User } from "./api";

function App() {
  const [usersResult, setUsersResult] = useState<Users>();

  useEffect(() => {
    const fetchUsersResult = fetchUsers();
    setUsersResult(fetchUsersResult);
  }, []);

  const displayUserDetails = (id: number) => {
    return;
  };

  return (
    <>
      <ul>
        {usersResult?.users?.map((user: User) => {
          return (
            <li key={user.id} onClick={() => displayUserDetails(user.id)}>
              {user.firstName} {user.lastName}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
