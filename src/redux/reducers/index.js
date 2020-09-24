const initialState = {
  username: "",
  password: "",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER": {
      const { id, username, password } = action.payload;
      return {
        ...state,
        id,
        username,
        password,
      };
    }
    default:
      return { ...state };
  }
};
export default users;
