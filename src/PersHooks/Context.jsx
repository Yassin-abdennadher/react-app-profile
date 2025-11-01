import { createContext } from 'react'

export const Context= createContext ({
    isLogged:false,
    setIsLogged : ()=>{},
    currentUser:null,
    setCurrentUser:()=>{}
});
