import { useState } from 'react';
import Product from "../models/Product";
import User from "../models/User";
import { getAllProduct } from "../remote/ProductAPI";
import AppRoutes from "../routes/AppRoutes";



const LoginComponent:React.FC = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[user, setUser] = useState(new User("", "NONE"));

    return(<div>
        <input type= 'text' placeholder="username" onChange={(e)=>{setUsername(e.target.value);}}></input>
        <br></br>
        <br></br>
        <input type= 'text' placeholder="password" onChange={(e)=>{setPassword(e.target.value);}}></input>
        <br></br>
        <br></br>
        <button onClick={async()=>{
            let inputUser:User =new User(username, "", password);
            let result:Product[] = await getAllProduct(inputUser);
            
            if(result.length){
                setUser(inputUser);

        }
    }}>Login</button>
        
            <br></br>
            <br></br>
            <br></br>
            {
                
            }

        <AppRoutes user={user}></AppRoutes>

    </div>)
}

export default LoginComponent;
