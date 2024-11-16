import { expect, it, test } from "vitest";
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
