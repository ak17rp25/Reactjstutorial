import { useParams } from "react-router-dom";
const User = () => {
    const {id} = useParams();
    console.log();
  return <div>user : {id}</div>;
};

export default User;
