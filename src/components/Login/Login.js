import React from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsLoggedIn } from '../../redux/actions/actionCreator';
import { useForm } from 'react-hook-form'

function Login() {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onChange'
    })

    function handleSubmitForm(data) {
        console.log(errors)
        console.log(data)
        localStorage.setItem('isLoggedIn', true);
        dispatch(setIsLoggedIn(true));
        navigation('/');
        reset();
    }
    console.log(errors)

    return (
    <section className="login">
        <form className='login__form' onSubmit={handleSubmit(handleSubmitForm)}>
        <p className='login__title'>Simple Hotel Check</p>
        <div className='login__form-container'>
            <p className={`login__form-title ${errors?.email && 'login__form-title_error'}`}>Логин</p>
            <input
            className={`login__input ${errors?.email && 'login__input_error'}`}
                {...register('email', {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                        value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                        message: 'Введите почту в указанном формате: mail@mail.ru'
                    },
                })}
            />
            <p id={`input-email-error`} className='login__error'>{errors?.email?.message}</p>
        </div>
        <div className='login__form-container'>
            <p className={`login__form-title ${errors?.password && 'login__form-title_error'}`}>Пароль</p>
            <input
            className={`login__input ${errors?.password && 'login__input_error'}`}
                {...register('password', {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                        value: /^[0-9a-zA-Z!@#$%^&*]*$/i,
                        message: 'Пароль может состоять только из латинских букв, цифр и специальных символов'
                    },
                    minLength: {
                        value: 8,
                        message: 'Минимальная длина пароля 8 символов'
                    },
                })}
            />
            <p id={`input-password-error`} className='login__error'>{errors?.password?.message}</p>
        </div>
        <input value='Войти' className={`login__button ${!(errors?.password || errors?.email) && 'login__button_active'}`} type='submit'/>
        </form>
    </section>
    );
}

export default Login;  
 