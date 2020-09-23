let nextUserId = 0;
export const addUser = (username, password) => ({
  type: "ADD_USER",
  payload: {
    id: ++nextUserId,
    username,
    password,
  },
});
