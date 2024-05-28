import { ADD_TOKEN } from "./actionTypes";

export const addToken = (bookInfo) => {
    return{
        type: ADD_TOKEN,
        payload: bookInfo
    }
};