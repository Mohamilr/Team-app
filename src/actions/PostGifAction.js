import { GIF_UPLOADING } from './ActionTypes';
import ApiCall from '../ApiCalls/ApiCall';

export const PostGif = (body) => {
    return async dispatch => {
        try {
            const response = await ApiCall.post('/gifs', body);
            console.log(response); 
            dispatch({ type: GIF_UPLOADING, data: false });
        } catch (e) {
            console.error(e);
        }
    }
}