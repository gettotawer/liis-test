import React from 'react';
import './MainPage.css';
import Header from '../Header/Header';
import Settings from '../Settings/Settings';
import Favorites from '../Favorites/Favorites';
import Hotels from '../Hotels/Hotels';

function MainPage() {
    return (
    <div className='main-page'>
        <Header/>
        <section className="main-page__content">
            <Hotels/>
            <Favorites/>
            <Settings/>
        </section>
    </div>
    );
}

export default MainPage;