import { SET_HOTELS_ARRAY, SET_CHECK_IN, SET_DAYS, SET_CITY } from "../../consts/constActions";

const initialState = {
    hotels: [],
    checkIn: new Date().toLocaleDateString().split('.').reverse().join('-'),
    days: 1,
    city: "Москва",
};

const hotels = (state = initialState, {type, payload}) => {
    switch(type){
        case SET_HOTELS_ARRAY:
            return{
                ...state,
                hotels: payload,
            };
        case SET_CHECK_IN:
            return{
                ...state,
                checkIn: payload,
            };
        case SET_DAYS:
            return{
                ...state,
                days: payload,
            };
        case SET_CITY:
            return{
                ...state,
                city: payload,
            };
        default: return state;
    }
}

export default hotels;
