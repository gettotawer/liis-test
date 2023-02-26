import React from 'react';
import './Hotel.css';
import { useDispatch, useSelector } from 'react-redux'
import { addFavoriteHotels, removeFavoriteHotels } from '../../redux/actions/actionCreator';
import { setSortPriceHighToLow, setSortPriceLowToHigh, setSortRatingHighToLow, setSortRatingLowToHigh } from '../../redux/actions/actionCreator';
import { monthsRU } from '../../consts/months';

function Hotel(props) {
    const [isFavorite, setIsfavorite] = React.useState(false);

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    React.useEffect(() => {
        if(state.favorites.hotels.length === 0) {
            dispatch(setSortPriceHighToLow(false));
            dispatch(setSortPriceLowToHigh(false));
            dispatch(setSortRatingHighToLow(false));
            dispatch(setSortRatingLowToHigh(false));
        }
        setIsfavorite(state.favorites.hotels.some((hotel) => {
            return (hotel.hotelId === props.hotel.hotelId && hotel.date === props.date && Number(hotel.days) === Number(props.days))
        }));
    },[state.favorites.hotels, state.hotels.hotels])

    function resetSortValues() {
        dispatch(setSortPriceHighToLow(false));
        dispatch(setSortPriceLowToHigh(false));
        dispatch(setSortRatingHighToLow(false));
        dispatch(setSortRatingLowToHigh(false));
    }

    function handleLikeHotel(){
        if(!isFavorite) {
            resetSortValues();
            dispatch(addFavoriteHotels({
                ...props.hotel,
                date: `${props.date}`,
                days: `${props.days}`
            }));
        } else {
            dispatch(removeFavoriteHotels({
                ...props.hotel,
                date: `${props.date}`,
                days: `${props.days}`
            }))
        }
    }

    return (
    <li className="hotel">
        <div className='hotel__image'></div>
        <p className='hotel__name'>{props.name}</p>
        <div className={`hotel__button ${isFavorite && 'hotel__button_saved'}`} onClick={handleLikeHotel}></div>
        <div className='hotel__date-container'>
            <p className='hotel__date'>{props.date.split('-')[2]} {monthsRU[props.date.split('-')[1]-1]} {props.date.split('-')[0]}</p>
            <div className='hotel__space'></div>
            <p className='hotel__days'>{props.days}</p>
        </div>
        <div className='hotel__stars-container'>
            <div className={`hotel__star ${props.stars >= 1 && 'hotel__star_active'}`}></div>
            <div className={`hotel__star ${props.stars >= 2 && 'hotel__star_active'}`}></div>
            <div className={`hotel__star ${props.stars >= 3 && 'hotel__star_active'}`}></div>
            <div className={`hotel__star ${props.stars >= 4 && 'hotel__star_active'}`}></div>
            <div className={`hotel__star ${props.stars >= 5 && 'hotel__star_active'}`}></div>
        </div>
        <p className='hotel__price'>Price</p>
        <p className='hotel__price-ammount'>{props.price} &#8381;</p>
    </li>
    );
}

export default Hotel;