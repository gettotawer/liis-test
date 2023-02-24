import './Hotel.css';

function Hotel(props) {


  return (
    <li className="hotel">
        <div className='hotel-image'></div>
        <p className='hotel-name'>{props.name}</p>
        <div className='hotel-button'></div>
        <p className='hotel-date'>{props.date}</p>
        <div className='hotel-space'></div>
        <p className='hotel-days'>{props.days}</p>
        <div className='hotel-stars-container'>
            <div className={`hotel-star ${props.stars >= 1 && 'hotel-star_active'}`}></div>
            <div className={`hotel-star ${props.stars >= 2 && 'hotel-star_active'}`}></div>
            <div className={`hotel-star ${props.stars >= 3 && 'hotel-star_active'}`}></div>
            <div className={`hotel-star ${props.stars >= 4 && 'hotel-star_active'}`}></div>
            <div className={`hotel-star ${props.stars >= 5 && 'hotel-star_active'}`}></div>
        </div>
        <p className='hotel-price'>Price</p>
        <p className='hotel-price-ammount'>{props.price} &#8381;</p>
    </li>
  );
}

export default Hotel;