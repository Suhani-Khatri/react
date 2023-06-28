import { useContext, useState } from 'react';
import { TasksDispatchContent } from './TaskContent';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContent);
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
       dispatch({
         type: 'added',
         id: nextId++,
         text: text,
       })
      }}>Add</button>
    </>
  )
}

let nextId = 3;

