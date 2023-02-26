import React from 'react';
import './Login.css';
import { useFormWithValidation } from '../../utils/Validation';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsLoggedIn } from '../../redux/actions/actionCreator';

function Login() {
    const formValidation = useFormWithValidation();
    const navigation = useNavigate();
    const dispatch = useDispatch();

    function handleButtonClick(e) {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', true)
        dispatch(setIsLoggedIn(true))
        navigation('/')

    }

    return (
    <section className="login">
        <form className='login__form'>
        <p className='login__title'>Simple Hotel Check</p>
        <div className='login__form-container'>
            <p className={`login__form-title ${formValidation.errors.email && 'login__form-title_error'}`}>Логин</p>
            <input value={formValidation.values.email || ''} onChange={formValidation.handleChange} className={`login__input ${formValidation.errors.email && 'login__input_error'}`} type={'email'} pattern='^[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$' name="email" required></input>
            <p id={`input-email-error`} className='login__error'>{formValidation.errors.email}</p>
        </div>
        <div className='login__form-container'>
            <p className={`login__form-title ${formValidation.errors.password && 'login__form-title_error'}`}>Пароль</p>
            <input value={formValidation.values.password || ''} onChange={formValidation.handleChange} className={`login__input ${formValidation.errors.password && 'login__input_error'}`} name="password" type={'password'} pattern='^[0-9a-zA-Z!@#$%^&*]*$' minLength="8" required></input>
            <p id={`input-password-error`} className='login__error'>{formValidation.errors.password}</p>
        </div>
        <button className={`login__button ${formValidation.isValid && 'login__button_active'}`} disabled={!formValidation.isValid} onClick={handleButtonClick}>Войти</button>
        </form>
    </section>
    );
}

export default Login;  
 