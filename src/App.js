import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ContextApi from "./contextApi/ContextApi.js"
import Login from "./login/Login.js"
import Register from "./register/Register.js"
import Perfil from "./transactions/Perfil.js";
import NewTransaction from "./newEntry/NewTransaction.js"
import Withdraw from "./newExit/Withdraw.js"

export default function App() {
    const [token, setToken] = useState("");
    const [name, setName] = useState('');
    const contextValue = {token, setToken , name , setName}

    console.log(token);

    return (
        <ContextApi.Provider value={contextValue}>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-in" element={<Login />}/>
                    <Route path="/sign-up" element={<Register />} />
                    <Route path="/transaction" element={<Perfil />} />
                    <Route path="/new-entry" element={<NewTransaction />} />
                    <Route path="/new-exit" element={<Withdraw />} />
                </Routes>
            </BrowserRouter>
        </ContextApi.Provider>
    )
}