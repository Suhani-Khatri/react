import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Page from './App';
// import ShoppingList from './App';
// import MyButton from './App';
// import MyApp from './App';
// import Board from './Game';
// import App from './filterableProduct';
// import Board from './Tic-tac-toe';
// import Gallery from './Gallery';
// import Profile from './props';
// import PackingList from './Condition';
// import List from './renderingList';
// import App from './Toolbar';
// import Counter from './Queue';
// import Gallery from './state';
// import Form from './fixStuck';
// import MovingDot from './Position';
// import Form from './updatingObject';
// import Form from './quizForm';
// import App from './preserveState';
// import ScoreBoard from './resettingState';
// import Messengers from './ressetingForm';
// import TaskApp from './TaskApp';
// import AppTask from './AppTask';
// import Page from './context/Main';
// import GalleryApp from './Gallery/GalleryApp';
// import TaskApp from './ReducerContext/TaskApp';
// import TaskApp from './contextReducer/App';
import ContextContainer from './ContextExample/ContextContainer';
import './style.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <Page/> */}
    {/* <ShoppingList /> */}
  {/* <MyButton/> */}
  {/* <MyApp /> */}
  {/* <Board/> */}
  {/* <FilterableProductTable/> */}
  {/* <App/> */}
  {/* <Board/> */}
  {/* <Gallery/> */}
  {/* <Profile/> */}
  {/* <PackingList/> */}
  {/* <List/> */}
  {/* <App/> */}
  {/* <Counter/> */}
  {/* <Gallery/> */}
  {/* <Form/> */}
  {/* <MovingDot/> */}
  {/* <Form/> */}
  {/* <App/> */}
  {/* <ScoreBoard/> */}
  {/* <Messengers/> */}
  {/* <TaskApp/> */}
  {/* <AppTask/> */}
  {/* <App/> */}
  {/* <Page/> */}
  {/* <GalleryApp/> */}
  {/* <TaskApp/> */}
  <ContextContainer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
