

import { useContext } from "react"
import UserContexts from "../context/UserContexts";
function Profile() {
    const {user}= useContext(UserContexts);
    if(!user) return(<>Please Login</>);
    return(
        <div>
            {user.username}
        </div>
    )
}

export default Profile