import React from 'react';
import './Login.css';

function Login() {

  return (
    <section className="login">
      <form className='login__form'>
        <p className='login__title'>Simple Hotel Check</p>
        <div className='login__form-container'>
            <p className='login__form-title'>Логин</p>
            <input className='login__input'type={'email'} pattern={'^[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$'} name="email" required></input>
            <p className='login__error'> </p>
        </div>
        <div className='login__form-container'>
            <p className='login__form-title'>Пароль</p>
            <input className='login__input' type={'password'}></input>
            <p className='login__error'> </p>
        </div>
        <button className='login__button'>Войти</button>
      </form>
    </section>
  );
}

export default Login;