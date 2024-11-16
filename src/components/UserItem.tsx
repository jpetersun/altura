import { User } from "../api";

interface Props {
  user: User;
  displayUserDetails: Function;
  isDisplayUserDetails: number[];
  deleteUser: Function;
}

const UserItem = ({
  user,
  displayUserDetails,
  isDisplayUserDetails,
  deleteUser,
}: Props) => {
  return (
    <div>
      <li key={user.id} onClick={() => displayUserDetails(user.id)}>
        {user.firstName} {user.lastName}
        {!isDisplayUserDetails.includes(user.id) ? null : (
          <p>
            {user.id} {user.firstName} {user.lastName} {user.username}{" "}
            {user.phoneNumber}
          </p>
        )}
      </li>
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </div>
  );
};

export default UserItem;
