import { combineReducers } from 'redux';
import { loginReducer, SignupReducer } from './RegisterReducer';

const allReducers = combineReducers({
    login: loginReducer,
    signup: SignupReducer
});

export default allReducers;