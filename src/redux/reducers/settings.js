import { CHANGE_CITY, CHANGE_DATE, CHANGE_DAYS, CHANGE_LEAVING_DATE } from "../../consts/constActions";

const initialState = {
    date: new Date().toLocaleDateString().split('.').reverse().join('-'),
    city: 'Москва',
    days: '1',
    leavingDate: (function() {
        var date = new Date();
        date.setDate(date.getDate() + 1);
        return date;
    })().toLocaleDateString().split('.').reverse().join('-')
}

const settings = (state = initialState, {type, payload}) => {
    switch(type) {
        case(CHANGE_CITY):
            return ({ ...state, city: payload})
        case(CHANGE_DATE):
            return ({ ...state, date: payload})
        case(CHANGE_DAYS):
            return ({ ...state, days: payload})
        case(CHANGE_LEAVING_DATE):
            return ({ ...state, leavingDate: payload})
        default:
            return state
    }
}

export default settings;