
// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// export default function MyApp() {
//   const [count, setCount] = useState(0);


//   function handleClick(){
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Counters that update Separatly</h1>
//       <MyButton count={count} onClick={handleClick}/>
//       <MyButton count={count} onClick={handleClick}/>

//     </div>
      
//   );
// }

// function MyButton({count, onClick}) {
//     return (
//       <button onClick={onClick}>
//         clicked {count} times
//       </button>
//     );
// }

/*-----------props------------ */
// function Avatar() {
//   return (
//     <img
//         className="avatar"
//         src = "https://i.imgur.com/1bX5QH6.jpg"
//         alt = "Lin Lanying"
//         width = {100}
//         height={100}
//       />
//   );
// }

// export default function Profile() {
//   return(
//     <Avatar />
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }


/* this is how we can display data (displaying data)*/
/* <img className="avatar" />

const user = {
  name : 'Hedy Lambarr',
  imageUrl : 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize : 90
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className = "avatar"
        src = {user.imageUrl}
        alt= {'photo of' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
} */

// let content;
// if(isLoggedIn){
//   content = <AdminPanel />
// }else{
//   content = <LoginForm />
// }
// return (
//   <div>{content}</div>
// );

// {/* <div>
//   {isLoggedIn ? (
//     <AdminPanel/>
//   ) : (
//     <Login/>
//   )}
// </div> */}


/* Rendering List */
// const products = [
//   {title: 'Cabbage', id: 1},
//   {title: 'Garlic', id: 2},
//   {title: 'Apple', id: 3}
// ]

// export default function ShoppingList() {
// const listitem = products.map(products => 
//     <li key={products.id}>
//       {products.title}
//     </li>
//   );
//   return (
//     <ul>{listitem}</ul>
//   );
// }

/* Responding to the event */

// export default function myApp() {
//   return (
//     <div>
//       <h1>Counter that Update separetly</h1>
//       <MyButton/>
//       <MyButton/>
//     </div>
//   );
// }

// function MyButton() {

//    const [count, setCount] = useState(0);

//     function handleClick(){
//       setCount(count + 1);
//       // alert('You clicked me!');
//     }
//     return (
//       <button onClick={handleClick}>
//         Clicked {count} times
//       </button>
//     );

// }

// export default function MyApp() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Counter that update together</h1>
//       <MyButton count={count} onClick={handleClick}/>
//       <MyButton count={count} onClick={handleClick}/>
//     </div>
//   );
// }

// function MyButton({count, onClick}) {
//     return (
//         <button onClick={onClick}>
//            Clicked {count} times
//         </button>
//     );
// }


// const product = [
//     {title: 'Cabbage', isFruit: false, id: 1},
//     {title: 'Garlic', isFruit: false, id: 2},
//     {title: 'Apple', isFruit: true, id: 3}
// ];

//   export default function ShoppingList(){
//     const listItems = product.map(product => 
//       <li
//         key={product.id}
//         style={{color: product.isFruit ? 'darkgreen' : 'magenta'}}
//       >
//         {product.title}
//       </li>
//     )
//   return(
//       <ul>{listItems}</ul>
//   );
//   }

//   export default function MyButton(){
//   function handleClick() {
//     alert("You Clicked me")
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   )
// }









