import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import ShoppingList from './App';
// import MyButton from './App';
// import MyApp from './App';
// import Board from './Game';
import App from './filterableProduct';
// import Board from './Tic-tac-toe';
import './style.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ShoppingList /> */}
  {/* <MyButton/> */}
  {/* <MyApp /> */}
  {/* <Board/> */}
  {/* <FilterableProductTable/> */}
  <App/>
  {/* <Board/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
