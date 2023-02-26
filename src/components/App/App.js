import React from 'react';
import './App.css';
import Login from '../Login/Login';
import MainPage from '../MainPage/MainPage';
import { Route, Routes, Navigate} from "react-router-dom";
import { useSelector } from 'react-redux'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const state = useSelector(state => state)

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<ProtectedRoute/>}>
            <Route exact path='/' element={<MainPage/>}/>
        </Route>
        <Route exact path="/login" element={
          state.user.isLoggedIn ? <Navigate replace to="/" /> : <Login/>
        } />
      </Routes>
    </div>
  );
}

export default App;
