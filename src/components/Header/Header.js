import './Header.css';

function Header() {


  return (
    <header className="header">
        <p className='header__logo'>Simple Hotel Check</p>
        <button className='header__button'>Выйти <div className='header__button-image'></div></button>
    </header>
  );
}

export default Header;