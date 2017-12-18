import { Headers } from '../Adapters/Headers';
const URL = 'http://localhost:3000/api/v1'

export function loginUser(code, history) {
  return (dispatch) => {
    return fetch(`${URL}/home`, {
      method: 'POST',
      headers: Headers(),
      body: JSON.stringify({ code })
    })
    .then(res => res.json())
    .then(user => {
      localStorage.setItem("jwt", user.code)
       dispatch({ type: 'LOGIN_USER', payload: user.currentUser })
       history.push("/home")
    });
  };
};

export function fetchUser(jwt, history) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/fetch_user', {
      method: 'POST',
      headers: Headers(),
      body: JSON.stringify({ jwt })
    })
    .then(res => res.json())
    .then(user => {
       dispatch({ type: 'FETCH_USER', payload: user.currentUser })
    });
  };
};

export function logOutUser(history) {
  localStorage.clear();
  history.push("/");
}

// export function fetchTracks(code) {
//   return (dispatch) => {
//     return fetch('http://localhost:3000/api/v1/top_tracks', { headers: Headers(),
//       // body: JSON.stringify({ code })
//     })
//     .then(res => res.json())
//     .then(data => {
//         // localStorage.setItem("jwt", user.code)
//        dispatch({ type: 'FETCH_TRACKS', payload: data.top_tracks.tracks })
//     });
//   };
// };
