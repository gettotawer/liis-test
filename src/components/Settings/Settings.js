import './Settings.css';
import { useDispatch, useSelector } from 'react-redux'
import { changeCity, changeDate, changeDays, getHotelsArray, changeLeavingDate, setDays, setCheckIn, setCity } from '../../redux/actions/actionCreator';

function Settings() {
    const dispatch = useDispatch();
    const state = useSelector(state => state)

    const handleChangeCity = (e) => {
        dispatch(changeCity(e.target.value))
    }

    const handleChangeDate = (e) => {
        const date = new Date(e.target.value);
        date.setDate(date.getDate() + Number(state.settings.days));
        dispatch(changeDate(e.target.value.split('.').reverse().join('-')))
        dispatch(changeLeavingDate(date.toLocaleDateString().split('.').reverse().join('-')))
    }

    const handleChangeDays = (e) => {
        const date = new Date(state.settings.date);
        date.setDate(date.getDate() + Number(e.target.value));
        dispatch(changeDays(e.target.value))
        dispatch(changeLeavingDate(date.toLocaleDateString().split('.').reverse().join('-')))
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        dispatch(getHotelsArray(state));
        dispatch(setDays(state.settings.days));
        dispatch(setCheckIn(state.settings.date));
        dispatch(setCity(state.settings.city));
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