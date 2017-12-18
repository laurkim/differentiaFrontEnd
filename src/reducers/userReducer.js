export function userReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return action.payload;
    case 'LOGOUT_USER':
      localStorage.clear();
      return {};
    case 'LOGIN_USER':
      return action.payload;
    default:
      return state;
  }
};
