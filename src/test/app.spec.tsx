import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "../App";
import { fetchUsers } from "../api";

test("renders all users first names", async () => {
  const usersResult = fetchUsers();

  const { getByText } = render(<App />);

  await Promise.all(
    usersResult.users.map(async (user) => {
      return expect.element(getByText(user.firstName)).toBeInTheDocument();
    })
  );
});

test("renders user details when clicking on name", async () => {
  const usersResult = fetchUsers();
  const user = usersResult.users[0];
  const { id, firstName, phoneNumber, username } = user;

  const { getByText } = render(<App />);

  await getByText(firstName).click();

  await expect.element(getByText(String(id))).toBeInTheDocument();
  await expect.element(getByText(phoneNumber)).toBeInTheDocument();
  await expect.element(getByText(username)).toBeInTheDocument();
});
