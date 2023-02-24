import React from 'react';
import './Hotels.css';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import Hotel from '../Hotel/Hotel';

function Hotels() {

  return (
    <div className="hotels">
        <h1 className='hotels__title'>Отели</h1>
        <div className='hotels__symbol'></div>
        <p className='hotels__city'>Москва</p>
        <p className='hotels__date'>07 июля 2020</p>
        <div className='hotels__images-collection'>
            <img src={img1} alt='Москва' className='hotels__image'></img>
            <img src={img2} alt='Москва' className='hotels__image'></img>
            <img src={img3} alt='Москва' className='hotels__image'></img>
            <img src={img4} alt='Санкт-Петербург' className='hotels__image'></img>
            <img src={img5} alt='Петергоф' className='hotels__image'></img>
        </div>
        <div className='hotels__container'>
            <p className='hotels__container-text'>Добавлено в Избранное:<span className='hotels__container-text-highlited'>3</span> отеля</p>
            <ul className='hotels__items-container'>
                <li className='hotels__item'>
                    <div className='hotels__item-image'></div>
                    <p className='hotels__item-name'>Moscow Marriott Grand Hotel</p>
                    <div className='hotels__item-button'></div>
                    <p className='hotels__item-date'>28 June, 2020</p>
                    <div className='hotels__item-space'></div>
                    <p className='hotels__item-days'>1 день</p>
                    <div className='hotels__item-stars-container'>
                        <div className='hotels__item-star hotels__item-star_active'></div>
                        <div className='hotels__item-star hotels__item-star_active'></div>
                        <div className='hotels__item-star hotels__item-star_active'></div>
                        <div className='hotels__item-star'></div>
                        <div className='hotels__item-star'></div>
                    </div>
                    <p className='hotels__item-price'>Price</p>
                    <p className='hotels__item-price-ammount'>23 924 Р</p>
                </li>
                <Hotel name={'Moscow Marriott Grand Hotel'} date={'28 June, 2020'} days={'1 день'} stars={3} price={'23 924'}/>
            </ul>
        </div>
    </div>
  );
}

export default Hotels;