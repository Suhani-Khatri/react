// function Profile() {
//     return(
//         <img 
//             src="https://i.imgur.com/MK3eW3As.jpg"
//             alt="pic"
//         />
//     );
// }

// export default function Gallery() {
//     return(
//         <section>
//             <h1>Amaxing Scientist</h1>
//             <Profile/>
//         </section>
//     );
// }

// const today = new Date();

// function formatDate(date){
//     return new Intl.DateTimeFormat(
//         'en-US',
//         { weekday  : 'long'}
//     ).format(date);
// }

// export default function ToDoList() {
//     return (
//         <h1>To DO List For {formatDate(today)}</h1>
//     );
// }

// export default function Profile() {
//     return(
//         <Avatar 
//             person={{name: 'Lin Laying',imageId: '1bx5q16'}}
//             size = {100}

//         />
//     );
// }

// function Avatar({person, size}) {
//     return (
//     <img 
//         className = "avatar"
//        alt = {person.name}
//        width = {size}
//        height = {size}
//     /> 
//     )
// }

function Item ({name, isPacked}) {
    return <li className="item">{name}</li>
}

export default function PackingList() {
    return(
        <section>
            
        </section>
    );
}
