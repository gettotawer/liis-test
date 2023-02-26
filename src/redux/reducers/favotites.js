import { ADD_FAVORITE_HOTELS, REMOVE_FAVORITE_HOTELS, SET_SORT_PRICE_HIGH_TO_LOW, SET_SORT_PRICE_LOW_TO_HIGH, SET_SORT_RATING_HIGH_TO_LOW, SET_SORT_RATING_LOW_TO_HIGH, SORT_FAVORITE_HOTELS } from "../../consts/constActions";

const initialState = {
    hotels: [],
    priceHighToLow: false,
    priceLowToHigh: false,
    ratingLowToHigh: false,
    ratingHighToLow: false,
};

const favorites = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAVORITE_HOTELS:
            return{
                ...state,
                hotels: [payload, ...state.hotels],
            };
        case REMOVE_FAVORITE_HOTELS:
            return{
                ...state,
                hotels: state.hotels.filter((hotel)=> {
                    return !(hotel.hotelId === payload.hotelId && hotel.date === payload.date && hotel.days === payload.days)
                }),
            };
        case SORT_FAVORITE_HOTELS:
            return{
                ...state,
                hotels: payload,
            };
        case SET_SORT_PRICE_HIGH_TO_LOW:
            return{
                ...state,
                priceHighToLow: payload,
            };
        case SET_SORT_RATING_HIGH_TO_LOW:
            return{
                ...state,
                ratingHighToLow: payload,
            };
        case SET_SORT_PRICE_LOW_TO_HIGH:
            return{
                ...state,
                priceLowToHigh: payload,
            };
        case SET_SORT_RATING_LOW_TO_HIGH:
            return{
                ...state,
                ratingLowToHigh: payload,
            };
        default: return state;
    }
}

export default favorites;