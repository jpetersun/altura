import { User } from "../api";

interface Props {
  user: User;
  displayUserDetails: Function;
  isDisplayUserDetails: number[];
}

const UserItem = ({
  user,
  displayUserDetails,
  isDisplayUserDetails,
}: Props) => {
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
};

export default UserItem;
