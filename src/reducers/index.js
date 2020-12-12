import { combineReducers } from 'redux';
import { loginReducer, SignupReducer } from './RegisterReducer';
import { Feeds, FeedsLoading, MyArticles, MyGifs } from './FeedsReducer';

const allReducers = combineReducers({
    login: loginReducer,
    signup: SignupReducer,
    feeds: Feeds,
    FeedsLoading,
    MyArticles,
    MyGifs
});

export default allReducers;