import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import axios from "axios";

export const Login = () => {

    let [email, setEmail] = useState("eevvv@gmail.com")
    let [password, setPassword] = useState("12345678")
    let [message, setMessage] = useState()


    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password
        };

        await axios.post(`http://localhost:3001/login`, {user})
            .then(res => {
                console.log(res);
                console.log(res);
                console.log(res.headers['authorization'])
                setMessage(res.data.status.message);
            })
            .catch(res => {
                setMessage(res.response.data);
                console.log(res.response)
            })
    }
    return (
        <div >
            <div>
                <h1>Login Page</h1>
                <div>Email</div>
                <div>
                    <input
                        type={"text"}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>Password</div>
                <div>
                    <input
                        type={"password"}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button onClick={handleSubmit} style={{marginTop: "10px"}}>Submit</button>
                <div>
                  <p>{message}</p>
                </div>
            </div>
        </div>
    )
}
