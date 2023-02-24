import { CHANGE_CITY, CHANGE_DATE, CHANGE_DAYS } from "../../consts/constActions";

export const settings = (state = {
    date: new Date().toLocaleDateString().split('.').reverse().join('-'),
    city: 'Москва',
    days: '1'
}, {type, payload}) => {
    switch(type) {
        case(CHANGE_CITY):
            return ({ ...state, city: payload})
        case(CHANGE_DATE):
            return ({ ...state, date: payload})
        case(CHANGE_DAYS):
            return ({ ...state, days: payload})
        default:
            return state
    }
}