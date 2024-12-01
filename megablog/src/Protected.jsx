import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

const Protected = ({children})=>{
    const navigate = useNavigate();
    const [loader,setLoader] = useState(true);
    const authStatus = useSelector(state=>state.auth.status);
    useEffect(()=>{
        if(!authStatus){
            navigate('/login');
        }else{
            navigate('/');
        }
        setLoader(false);
    },[authStatus, navigate]);
    if(loader){
        return <div>Loading...</div>
    }else{
        return(<>{children}</>)
    }
};

export default Protected;