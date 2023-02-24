import './Settings.css';
import { useDispatch, useSelector } from 'react-redux'
import { changeCity, changeDate, changeDays, setHotelsArray } from '../../redux/actions/actionCreator';

function Settings(e) {
    const dispatch = useDispatch();
    const state = useSelector(state => state)

    const handleChangeCity = (e) => {
        dispatch(changeCity(e.target.value))
    }

    const handleChangeDate = (e) => {
        dispatch(changeDate(e.target.value.split('.').reverse().join('-')))
    }

    const handleChangeDays = (e) => {
        dispatch(changeDays(e.target.value))
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        dispatch(setHotelsArray(state));
    }
    


  return (
    <form className='settings__form'>
        <div className='settings__form-container'>
            <p className='settings__form-title'>Локация</p>
            <input value={state.settings.city}className='settings__input' type={'text'} name="city" onChange={handleChangeCity} required></input>
        </div>
        <div className='settings__form-container'>
            <p className='settings__form-title'>Дата заселения</p>
            <input value={state.settings.date} className='settings__input' type={'date'}  name="date" onChange={handleChangeDate} required></input>
        </div>
        <div className='settings__form-container'>
            <p className='settings__form-title'>Количество дней</p>
            <input value={state.settings.days} className='settings__input' type={'number'} onChange={handleChangeDays} name="days" min={'1'} required></input>
        </div>
        <button className='settings__button' onClick={handleButtonClick}>Найти</button>
    </form>
  );
}

export default Settings;