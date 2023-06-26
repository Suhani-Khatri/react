import { useState } from "react";
import { sculptureList } from "./galleryData";

//multiple state variable
export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    let hasPrev = index > 0;
    let hasNext = index < sculptureList.length-1;

function  handlePrevClick() {
    if(hasPrev){
        setIndex(index-1);
    }
}


function handleNextClick(){
    setIndex(index + 1);  //0+1 = 1
    console.log(index);
}

function handleMoreClick(){
    setShowMore(!showMore);
}


let sculpture = sculptureList[index];
return (
    <>
        <button onClick={handlePrevClick}
                disabled={!hasPrev}
        >
            Previous
        </button>
        <button onClick={handleNextClick}
                disabled={!hasNext}
        >Next</button>
        <h2>
            <i>{sculpture.name}</i>
            by {sculpture.artist}
        </h2>
        <h3>({index +1} of {sculptureList.length})</h3>
        <button onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
        {showMore && <p>{sculpture.description}</p>}
        <br/><br/>
        <img 
            src = {sculpture.url}
            alt = {sculpture.alt}
        />
    </>
);

}

