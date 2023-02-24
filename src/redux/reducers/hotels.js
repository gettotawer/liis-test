import { GET_HOTELS_ARRAY } from "../../consts/constActions";

const initialState = {
    hotels: [],
};

const hotels = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_HOTELS_ARRAY:
            return{
                ...state,
                hotels: [payload]
            };
        default: return state;
    }
}

export default hotels;
