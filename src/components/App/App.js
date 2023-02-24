import React from 'react';
import './App.css';
import Login from '../Login/Login';
import MainPage from '../MainPage/MainPage';
import { Route, Routes} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state)

  return (
    <div className="App">
      <Routes>
        {/* <Route path="*" element={<NotFound/>}/> */}
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
