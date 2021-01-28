import React,{useState} from 'react'
import { Form, Modal } from 'semantic-ui-react'
import Navigation from '../Navigation';

function Signup() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState();
    const [password, setpassword] = useState("");
    const [confirmPass, setconfirmPass] = useState("");
    const [error, seterror] = useState(false);
    const [message, setmessage] = useState("");
    function register(){
        if(password!=confirmPass){
            seterror(true);
            setmessage("Please Enter Same Password")
        }
        else{
            fetch("https://savetimesavemoney.hasura.app/v1/graphql",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body:JSON.stringify({
                    query:`mutation{
                        insert_user(objects: {
                            email: "${email}", 
                            mobile: "${mobile}", 
                            name: "${name}", 
                            password: "${password}"}){
                            returning{
                              id
                            }
                            affected_rows
                          }
                    }`
                })
            }).then((resp)=>resp.json()).then((resp)=>console.log(resp))
        }
    }
    return (
        <div>
            <Navigation />
            <Form>
                <div style={{fontSize:"18px",marginTop:"20px"}}>Name</div>
                <input onChange={(e)=>setname(e.target.value)} type="text" className="ui input" placeholder="Enter Your Name" />
                <div style={{fontSize:"18px",marginTop:"20px"}}>Email</div>
                <input onChange={(e)=>{setemail(e.target.value)}} type="email" className="ui input" placeholder="Enter Your Email" />
                <div style={{fontSize:"18px",marginTop:"20px"}}>Mobile No.</div>
                <input onChange={(e)=>{setmobile(e.target.value)}} type="tel" className="ui input" placeholder="Enter Your Mobile No." />
                <div style={{fontSize:"18px",marginTop:"20px"}}>Password</div>
                <input onChange={(e)=>{setpassword(e.target.value)}} type="password" className="ui input" placeholder="Enter Your Password" />
                <div style={{fontSize:"18px",marginTop:"20px"}}>Confirm Password</div>
                <input onChange={(e)=>{setconfirmPass(e.target.value)}} type="password" className="ui input" placeholder="Confirm Password" />
                <button onClick={()=>{register()}} className="ui primary button " style={{marginTop:"20px"}}>
                        SignUp
                </button>
            </Form>
            {
                error&&<Modal open={error} closeIcon onClose={()=>seterror(false)}>
                    <div style={{textAlign:"center",padding:"40px",fontSize:"20px"}}>
                        {message}
                    </div>
                </Modal>
            }
       </div>
    )
}

export default Signup
