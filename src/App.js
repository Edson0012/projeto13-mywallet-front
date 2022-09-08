import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ContextApi from "./contextApi/ContextApi.js"
import Login from "./login/Login.js"
import Register from "./register/Register.js"

export default function App() {
    const [token, setToken] = useState("");
    const contextValue = { token, setToken}

    return (
        <ContextApi.Provider value={contextValue}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </ContextApi.Provider>
    )
}