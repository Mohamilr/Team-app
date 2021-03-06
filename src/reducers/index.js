import { combineReducers } from 'redux';
import { loginReducer, SignupReducer } from './RegisterReducer';
import { Feeds, FeedsLoading, MyArticles, MyGifs } from './FeedsReducer';
import { gifUploading } from './PostGifReducer';
import { getAnArticle, getAnArticleLoading } from './ViewArticleReducer';
import { getAGif, getAGifLoading } from './ViewGifReducer';
import { refresh } from './GlobalReducer';
import { PostCommentLoading } from './CommentReducer';

const allReducers = combineReducers({
    login: loginReducer,
    signup: SignupReducer,
    feeds: Feeds,
    FeedsLoading,
    MyArticles,
    MyGifs,
    gifUploading,
    getAnArticle,
    getAnArticleLoading,
    getAGif,
    getAGifLoading,
    PostCommentLoading,
    refresh
    
    // loading
});

export default allReducers;