import './Favorites.css';

function Favorites() {


  return (
    <div className='favorites'>
        <p className='favorites__title'>Избранное</p>
        <ul className='favorites__sort-container'>
            <li className='favorites__sort-item favorites__sort-item_low-to-high'>
                <p className='favorites__sort-text favorites__sort-text_selected'>Рейтинг</p>
            </li>
            <li className='favorites__sort-item'>
                <p className='favorites__sort-text'>Цена</p>
            </li>
        </ul>
        <ul className='favorite__items-container'>
            <li className='favorite__item'>
                <p className='favorite__item-name'>Moscow Marriott Grand Hotel</p>
                <div className='favorite__item-button'></div>
                <p className='favorite__item-date'>28 June, 2020</p>
                <div className='favorite__item-space'></div>
                <p className='favorite__item-days'>1 день</p>
                <div className='favorite__item-stars-container'>
                    <div className='favorite__item-star favorite__item-star_active'></div>
                    <div className='favorite__item-star favorite__item-star_active'></div>
                    <div className='favorite__item-star favorite__item-star_active'></div>
                    <div className='favorite__item-star'></div>
                    <div className='favorite__item-star'></div>
                </div>
                <p className='favorite__item-price'>Price</p>
                <p className='favorite__item-price-ammount'>23 924 Р</p>
            </li>
            <li className='favorite__item'>
                <p className='favorite__item-name'>Moscow Marriott Grand Hotel</p>
                <div className='favorite__item-button'></div>
                <p className='favorite__item-date'>28 June, 2020</p>
                <div className='favorite__item-space'></div>
                <p className='favorite__item-days'>1 день</p>
                <div className='favorite__item-stars-container'>
                    <div className='favorite__item-star favorite__item-star_active'></div>
                    <div className='favorite__item-star favorite__item-star_active'></div>
                    <div className='favorite__item-star favorite__item-star_active'></div>
                    <div className='favorite__item-star'></div>
                    <div className='favorite__item-star'></div>
                </div>
                <p className='favorite__item-price'>Price</p>
                <p className='favorite__item-price-ammount'>23 924 Р</p>
            </li>
        </ul>
    </div>
  );
}

export default Favorites;