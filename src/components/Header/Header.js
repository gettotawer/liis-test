import './Header.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../redux/actions/actionCreator';

function Header() {

    const navigation = useNavigate();
    const dispatch = useDispatch();

    function handleButtonClick() {
        localStorage.removeItem('isLoggedIn')
        dispatch(setIsLoggedIn(false))
        navigation('/login')
    }

  return (
    <header className="header">
        <p className='header__logo'>Simple Hotel Check</p>
        <button className='header__button' onClick={handleButtonClick}>Выйти <div className='header__button-image'></div></button>
    </header>
  );
}

export default Header;