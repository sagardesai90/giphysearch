import request from 'superagent';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_GIFS = 'REQUEST_GIFS';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=d2YvdLWEdDLD9TYsnQnp6Cx03J7leWso';

export function requestGifs(search = null){
    console.log(search);
    const data = request.get(`${API_URL}${search.replace(/\s/g, '+')}${API_KEY}`);
    return {
        type: REQUEST_GIFS,
        payload: data
        // search
    }
}

export function openModal(gif) {
    return {
        type: OPEN_MODAL,
        gif
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}