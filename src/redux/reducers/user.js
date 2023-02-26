import { SET_IS_LOGGED_IN } from "../../consts/constActions";

const initialState = {
    isLoggedIn: (function() {
        if(localStorage.getItem('isLoggedIn')){
            return true;
        } else {
            return false;
        }
    })()
}

const user = (state = initialState, {type, payload}) => {
    switch(type) {
        case(SET_IS_LOGGED_IN):
            return ({ ...state, isLoggedIn: payload})
        default:
            return state
    }
}

export default user