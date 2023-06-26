import {useState} from 'react';

export default function Form(){
    const [person, setPerson] = useState({
        firstName: 'Suhani',
        lastName: 'Khatri',
        email: 'isuhanikhatri@gmail.com'
    })

    function handleFirstnameChange(e){
        setPerson({
            ...person,
            firstName: e.target.value, // New first name from the input

          });
    }

    function handleLastnameChange(e){
        setPerson({
            ...person,
            lastName: e.target.value, // New first name from the input

          });
    }

    function handleEmailChange(e){
        setPerson({
            ...person,
            email: e.target.value
          });
    }

    return (
        <>
            <label>
                First Name:
                <input 
                    value={person.firstName}
                    onChange={handleFirstnameChange}
                />
            </label><br/><br/>
            <label>
                Last Name:
                <input 
                    value={person.lastName}
                    onChange={handleLastnameChange}
                />
            </label><br/><br/>
            <label>
                Email:
                <input 
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label><br/><br/>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                {person.email}{' '}
            </p>
        </>
    );
}