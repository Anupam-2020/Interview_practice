import { createContext } from "react";

export const Context = createContext({
    userList: []
});

export const UserProvier = ({children}) => {
    const userList = [
            {id: 1, name: 'S1'},
            {id: 2, name: 'S2'},
            {id: 3, name: 'S3'},
            {id: 4, name: 'S4'}
    ]

    return(
        <Context.Provider value={{userList}}>{children}</Context.Provider>
    )
}