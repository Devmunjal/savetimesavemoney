import React,{useState} from "react";
import { Form } from "semantic-ui-react";
import Navigation from "../Navigation";
const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  return (
    <div>
    <Navigation />
    <Form>
        <div style={{fontSize:"18px",marginTop:"20px"}}>Email</div>
        <input onChange={(e)=>setemail(e.target.value)} className="ui input" placeholder="Enter Your EmailId" type="email" />
        <div style={{fontSize:"18px",marginTop:"20px"}}>Password</div>
        <input onChange={(e)=>setpassword(e.target.value)} className="ui input" placeholder="Enter Your Password" type="password" />
        <button  className="ui primary button" style={{marginTop:"20px"}}> 
            Login
        </button>
    </Form>
    </div>
  );
};

export default Login;
