import { LOGIN, SIGNUP }  from './ActionTypes';
import ApiCall from "../ApiCalls/ApiCall";

export function LoginAction(body) {
    return async dispatch => {
        try {
            const response = await ApiCall.post("auth/signin", body);
            const { data: { data } } = response;

            ApiCall.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            localStorage.setItem('token', data.token);
            localStorage.setItem('id', data.authorId);

            //
            dispatch({type: LOGIN});
          } catch (e) {
            console.error(e);
          }
    }
}

export function SignupAction(body) {
  return async dispatch => {
      try {
          const response = await ApiCall.post("auth/create-user", body);
          const { data: { data } } = response;

          ApiCall.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
          localStorage.setItem('token', data.token);
          localStorage.setItem('id', data.authorId);

          //
          dispatch({type: SIGNUP});
        } catch (e) {
          console.error(e);
        }
  }
}