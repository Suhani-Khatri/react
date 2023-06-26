// import { useState } from "react";
// import AddTask from "./AddTask";
// import TaskList from "./TaskList";
// import TaskReducer from "./TaskReducer";

// let initialState = [];

// let actions = [
//   {type: 'added', id: 1, text: 'Visit Kafka Museum'},
//   {type: 'added', id: 2, text: 'Watch a puppet show'},
//   {type: 'deleted', id: 1},
//   {type: 'added', id: 3, text: 'Lennon Wall pic'},
// ];

// let finalState = actions.reduce(, initialState)



// export default function TaskApp() {
//     function tasksReducer(tasks, action) {
//         if(action.type === 'added'){
//             return [
//                 ...tasks,
//                 {
//                     id : action.id,
//                     text: action.text,
//                     done: false,
//                 },
//             ];
//         }else if (action.type === 'changed') {
//             return tasks.map((t) => {
//               if (t.id === action.task.id) {
//                 return action.task;
//               } else {
//                 return t;
//               }
//             });
//         }else if(action.type === 'deleted'){
//             return tasks.filter((t) => t.id !== action.id);
//         }else{
//             throw Error('unknown action: ' + action.type);
//         }
//     }
// }

// function tasksReducer(tasks, action) {
//     switch(action.type) {
//         case 'added': {
//             return [
//                 ...tasks,
//                 {
//                     id : action.id,
//                     text: action.text,
//                     done: false,
//                 },
//             ];
//         }
//         case 'changed': {
//             return tasks.map((t) => {
//                 if (t.id === action.task.id) {
//                   return action.task;
//                 } else {
//                   return t;
//                 }
//             });
//         }
//         case 'deleted': {
//             return tasks.filter((t) => t.id !== action.id);
//         }
//         default: {
//             throw Error('unknown action: ' + action.type);
//         }
//     }
// }
// }

//     const[tasks,  setTasks] = useState(initialTasks);

//  function handleAddTask(text) {
//     setTasks([
//         ...tasks,
//         {
//             id: nextId++,
//             text: text,
//             done: false,

//         },
//     ]);
//   }

//   function handleChangetask(task) {
//     setTasks(
//         tasks.map((t) => {
//             if(t.id === task.id){
//                 return task;
//             }else{
//                 return t;
//             }
//         })
//     )
//   }

//   function handleDeletetask(taskId) {
//     setTasks(tasks.filter((t) => t.id!== taskId));
//   }

//   return (
//     <>
//         <h1>Prague itinerary</h1>
//         <AddTask onAddTask={handleAddTask} />
//         <TaskList 
//             tasks={tasks}
//             onChangeTask={handleChangetask}
//             onDeleteTask={handleDeletetask}
//         />
//     </>
//   );
//  }
    // let nextId = 3;
    // const initialTasks = [
    // {id: 0, text: 'Visit Kafka Museum', done: true},
    // {id: 1, text: 'Watch a puppet show', done: false},
    // {id: 2, text: 'Lennon Wall pic', done: false},
    // ];