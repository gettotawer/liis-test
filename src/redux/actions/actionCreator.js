import { 
    CHANGE_CITY, 
    CHANGE_DATE, 
    CHANGE_DAYS, 
    GET_HOTELS_ARRAY, 
    SET_HOTELS_ARRAY, 
    CHANGE_LEAVING_DATE, 
    SET_DAYS, 
    SET_CHECK_IN, 
    SET_CITY, 
    ADD_FAVORITE_HOTELS,
    REMOVE_FAVORITE_HOTELS,
    SET_SORT_PRICE_HIGH_TO_LOW,
    SET_SORT_PRICE_LOW_TO_HIGH,
    SET_SORT_RATING_LOW_TO_HIGH,
    SET_SORT_RATING_HIGH_TO_LOW,
    SORT_FAVORITE_HOTELS,
    SET_IS_LOGGED_IN
} from "../../consts/constActions";

export const changeCity = (payload) => ({
    type: CHANGE_CITY,
    payload
});

export const changeDate = (payload) => ({
    type: CHANGE_DATE,
    payload
});

export const changeDays = (payload) => ({
    type: CHANGE_DAYS,
    payload
});

export const changeLeavingDate = (payload) => ({
    type: CHANGE_LEAVING_DATE,
    payload
});

export const getHotelsArray = () => ({
    type: GET_HOTELS_ARRAY,
});

export const setHotelsArray = (payload) => ({
    type: SET_HOTELS_ARRAY,
    payload
});

export const setDays = (payload) => ({
    type: SET_DAYS,
    payload
});

export const setCheckIn = (payload) => ({
    type: SET_CHECK_IN,
    payload
});

export const setCity = (payload) => ({
    type: SET_CITY,
    payload
});

export const addFavoriteHotels = (payload) => ({
    type: ADD_FAVORITE_HOTELS,
    payload
});

export const removeFavoriteHotels = (payload) => ({
    type: REMOVE_FAVORITE_HOTELS,
    payload
});

export const setSortPriceHighToLow = (payload) => ({
    type: SET_SORT_PRICE_HIGH_TO_LOW,
    payload
});

export const setSortPriceLowToHigh = (payload) => ({
    type: SET_SORT_PRICE_LOW_TO_HIGH,
    payload
});

export const setSortRatingLowToHigh = (payload) => ({
    type: SET_SORT_RATING_LOW_TO_HIGH,
    payload
});

export const setSortRatingHighToLow = (payload) => ({
    type: SET_SORT_RATING_HIGH_TO_LOW,
    payload
});

export const sortFavoriteHotels = (payload) => ({
    type: SORT_FAVORITE_HOTELS,
    payload,
})

export const setIsLoggedIn = (payload) => ({
    type: SET_IS_LOGGED_IN,
    payload,
})