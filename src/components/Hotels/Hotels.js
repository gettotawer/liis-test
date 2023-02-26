import React from 'react';
import './Hotels.css';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import Hotel from '../Hotel/Hotel';

import { useDispatch, useSelector } from 'react-redux'
import { getHotelsArray } from '../../redux/actions/actionCreator';
import { monthsRU } from '../../consts/months';

function Hotels() {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    React.useEffect(()=> {
        dispatch(getHotelsArray(state));
    }, [])


  return (
    <div className="hotels">
        <h1 className='hotels__title'>Отели</h1>
        <div className='hotels__symbol'></div>
        <p className='hotels__city'>{state.hotels.city}</p>
        <p className='hotels__date'>{state.hotels.checkIn.split('-')[2]} {monthsRU[state.hotels.checkIn.split('-')[1]-1]} {state.hotels.checkIn.split('-')[0]}</p>
        <div className='hotels__images-collection'>
            <img src={img1} alt='Москва' className='hotels__image'></img>
            <img src={img2} alt='Москва' className='hotels__image'></img>
            <img src={img3} alt='Москва' className='hotels__image'></img>
            <img src={img4} alt='Санкт-Петербург' className='hotels__image'></img>
            <img src={img5} alt='Петергоф' className='hotels__image'></img>
        </div>
        <div className='hotels__container'>
            <p className='hotels__container-text'>Добавлено в Избранное:<span className='hotels__container-text-highlited'>{state.favorites.hotels.length}</span> отеля</p>
            <ul className='hotels__items-container'>
                {state.hotels.hotels.length === 0 && <p className='hotels__not-found'>Ничего не найдено. Проверьте правильность введенных данных.</p>}
                {state.hotels.hotels.length !== 0 && state.hotels.hotels.map((hotel)=> {
                    return <Hotel hotel={hotel} key={hotel.hotelId} name={hotel.hotelName} date={state.hotels.checkIn} days={state.hotels.days} stars={hotel.stars} price={hotel.priceAvg}/>
                })}
            </ul>
        </div>
    </div>
  );
}

export default Hotels;