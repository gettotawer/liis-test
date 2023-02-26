import React from 'react';
import './FavoriteHotel.css';
import { useDispatch } from 'react-redux'
import { removeFavoriteHotels } from '../../redux/actions/actionCreator';
import { monthsEN } from '../../consts/months';

function FavoriteHotel(props) {

    const dispatch = useDispatch();

    function handleButtonClick() {
        dispatch(removeFavoriteHotels(props.hotel))
    }

    return (
        <li className='favorite-hotel'>
            <p className='favorite-hotel__name'>{props.name}</p>
            <div className='favorite-hotel__button favorite-hotel__button__saved' onClick={handleButtonClick}></div>
            <p className='favorite-hotel__date'>{props.date.split('-')[2]} {monthsEN[props.date.split('-')[1]-1]} {props.date.split('-')[0]}</p>
            <div className='favorite-hotel__space'></div>
            <p className='favorite-hotel__days'>{props.days}</p>
            <div className='favorite-hotel__stars-container'>
                <div className={`favorite-hotel__star ${props.stars >= 1 && 'favorite-hotel__star_active'}`}></div>
                <div className={`favorite-hotel__star ${props.stars >= 2 && 'favorite-hotel__star_active'}`}></div>
                <div className={`favorite-hotel__star ${props.stars >= 3 && 'favorite-hotel__star_active'}`}></div>
                <div className={`favorite-hotel__star ${props.stars >= 4 && 'favorite-hotel__star_active'}`}></div>
                <div className={`favorite-hotel__star ${props.stars >= 5 && 'favorite-hotel__star_active'}`}></div>
            </div>
            <p className='favorite-hotel__price'>Price</p>
            <p className='favorite-hotel__price-ammount'>{props.price} &#8381;</p>
        </li>
    );
}

export default FavoriteHotel;