import {LOGIN} from "../constants";

export function login(data) {
    return {
        type:LOGIN,
        data
    }
}
export function logged(data) {
    return dispatch =>{
        dispatch(login(data))
    }
}