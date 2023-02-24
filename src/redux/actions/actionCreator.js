import { CHANGE_CITY, CHANGE_DATE, CHANGE_DAYS, GET_HOTELS_ARRAY } from "../../consts/constActions";

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

export const setHotelsArray = (payload) => ({
    type: GET_HOTELS_ARRAY,
    payload
});