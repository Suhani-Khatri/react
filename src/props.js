import { imageUrl } from "./utils";

function Avatar(person , size){
    return (
        <img 
            className = "avatar"
            src = {imageUrl(person)}
            alt = {person.name}
            width = {100}
            height = {100}
        />
    );
}
export default function Profile(){
    return (
        <Avatar
            person = {{name: 'Lanying', imageId: '1bX5QH6' }}
            size ={100}
        />
    );
}