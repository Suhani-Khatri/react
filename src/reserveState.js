import {useState} from 'react'

export default function App() {
    const[showB, setShowB] = useState(true);

    return(
        <div>
            <Counter/>
            {showB && <Counter/>}
            <label>
                <input
                    type="checkbox"
                    checked={showB}
                    onChange={e => {
                        setShowB(e.target.checked)
                    }}
                />
                Render the second counter
            </label>
        </div>
    );
    // const counter = <Counter/>
    // return(
    //     <div>
    //         {counter}
    //         {counter}
    //     </div>
    // )
}

function Counter() {
    const[score, setScore] = useState(0);
    // const[hover, setHover] = useState(false);

    let className = 'counter';
   

    return (
        <div
            className = {className}
            // onPointerEnter = {() => setHover(true)}
            // onPointerLeave = {() => setHover(false)}
        >
        <h1>{score}</h1>
        <button onClick={() => setScore(score+1)}
        >Add one</button>
        </div>
       
    );
}