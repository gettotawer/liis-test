import React from 'react';
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux'
import FavoriteHotel from '../FavoriteHotel/FavoriteHotel';
import { setSortPriceHighToLow, setSortPriceLowToHigh, setSortRatingHighToLow, setSortRatingLowToHigh, sortFavoriteHotels } from '../../redux/actions/actionCreator';

function Favorites() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    function handleClickRating() {
        if(!state.favorites.ratingLowToHigh){
            const arr = state.favorites.hotels.slice(0)
            dispatch(sortFavoriteHotels(arr.sort(function(a, b) {
                return a.stars > b.stars ? 1 : -1
            })))

            dispatch(setSortRatingLowToHigh(true));
            dispatch(setSortRatingHighToLow(false));
        } else {
            const arr = state.favorites.hotels.slice(0)
            dispatch(sortFavoriteHotels(arr.sort(function(a, b) {
                return a.stars < b.stars ? 1 : -1
            })))

            dispatch(setSortRatingHighToLow(true));
            dispatch(setSortRatingLowToHigh(false));
        }
        dispatch(setSortPriceHighToLow(false));
        dispatch(setSortPriceLowToHigh(false));
    }

    function handleClickPrice() {
        if(!state.favorites.priceLowToHigh){
            const arr = state.favorites.hotels.slice(0)
            dispatch(sortFavoriteHotels(arr.sort(function(a, b) {
                return a.priceAvg > b.priceAvg ? 1 : -1
            })))

            dispatch(setSortPriceHighToLow(false));
            dispatch(setSortPriceLowToHigh(true));
        } else {
            const arr = state.favorites.hotels.slice(0)
            dispatch(sortFavoriteHotels(arr.sort(function(a, b) {
                return a.priceAvg < b.priceAvg ? 1 : -1
            })))

            dispatch(setSortPriceHighToLow(true));
            dispatch(setSortPriceLowToHigh(false));
        }
        dispatch(setSortRatingHighToLow(false));
        dispatch(setSortRatingLowToHigh(false));
    }

    return (
    <div className='favorites'>
        <p className='favorites__title'>Избранное</p>
        <ul className='favorites__sort-container'>
        <li className={`favorites__sort-item ${state.favorites.ratingLowToHigh && 'favorites__sort-item_low-to-high'} ${state.favorites.ratingHighToLow && 'favorites__sort-item_high-to-low'}`} onClick={handleClickRating}>
                <p className={`favorites__sort-text ${(state.favorites.ratingLowToHigh || state.favorites.ratingHighToLow) && 'favorites__sort-text_selected'}`}>Рейтинг</p>
            </li>
            <li className={`favorites__sort-item ${state.favorites.priceLowToHigh && 'favorites__sort-item_low-to-high'} ${state.favorites.priceHighToLow && 'favorites__sort-item_high-to-low'}`} onClick={handleClickPrice}>
                <p className={`favorites__sort-text ${(state.favorites.priceLowToHigh || state.favorites.priceHighToLow) && 'favorites__sort-text_selected'}`}>Цена</p>
            </li>
        </ul>
        <ul className='favorite__items-container'>
            {state.favorites.hotels.length === 0 && <p className='favorites__not-found'>Тут будут сохраняться ваши избранные отели.</p>}
            {state.favorites.hotels.length !== 0 && state.favorites.hotels.map((hotel) => {
                console.log(hotel)
                return <FavoriteHotel hotel={hotel} key={`${hotel.hotelId}-${hotel.checkIn}-${hotel.days}`} name={hotel.hotelName} date={hotel.date} days={hotel.days} stars={hotel.stars} price={hotel.priceAvg}/>
            })}
        </ul>
    </div>
    );
}

export default Favorites;