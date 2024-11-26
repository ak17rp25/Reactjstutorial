import React from "react";
import UserContexts from "./UserContexts";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContexts.Provider value={{user, setUser}}>
        {children}
        </UserContexts.Provider>
    )
}

export default UserContextProvider