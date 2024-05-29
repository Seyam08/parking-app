import { ADD_TOKEN, REMOVE_TOKEN } from "./actionTypes";

export const addToken = (bookInfo) => {
    return{
        type: ADD_TOKEN,
        payload: bookInfo
    }
};
export const removeToken = (id) => {
    return{
        type: REMOVE_TOKEN,
        payload: id
    }
};
