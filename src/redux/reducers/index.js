const initialState = {
  username: "",
  password: "",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER": {
      const { username, password } = action.payload;
      return {
        ...state,
        username,
        password,
      };
    }
    case "LOGOUT_USER": {
      return initialState;
    }
    default:
      return { ...state };
  }
};
export default users;
