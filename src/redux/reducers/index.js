const initialState = {
  id: 0,
  username: "",
  password: "",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER": {
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
