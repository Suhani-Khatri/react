import { useReducer,   createContext, useContext } from "react";

export const TaskContext = createContext(null);
export const TasksDispatchContent = createContext(null);

export function TaskProvider({children}) {
const[tasks,dispatch] = useReducer(tasksReducer, initialTasks)

return(
    <TaskContext.Provider value={{tasks,dispatch}}>
    <TasksDispatchContent.Provider value={{tasks,dispatch}}>
            {children}
        </TasksDispatchContent.Provider>
    </TaskContext.Provider>
);
}

export const useTask =() => useContext(TaskContext);

function tasksReducer(tasks, action){
    switch(action.type){
        case 'added': {
            return[...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed' : {
            return tasks.map(t => {
                if(t.id === action.task.id){
                    return action.task;
                }else{
                    return t;
                }
            });
        }
        case 'deleted' :{
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action ' + action.type);
        }
    }
}
let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
]   