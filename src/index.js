import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const defaultState = {
//   cash: 0,
// }

// const reducer = (state = defaultState, action) => {
//   switch(action.type){
//     case "ADD_CASH":
//       return {...state, cash: state.cash + action.payload};
//       case "GET_CASH":
//         return {...state, cash: state.cash - action.payload};
//     default:
//       return state;
//   }
// };

// const store = configureStore({reducer}, composeWithDevTools);

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
);