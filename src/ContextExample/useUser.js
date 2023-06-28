import { createContext, useContext, useState } from "react";

const UserContext =  createContext(null);

export const UserContextProvider = ({children,...rest}) => {
    console.log(rest)
    
    const [state,setState] = useState({name: 'Suhani'})

    return <UserContext.Provider value={{state,setState,rest}}>
        {children}
    </UserContext.Provider>
}

export const useUser = () => useContext(UserContext)

