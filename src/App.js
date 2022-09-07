import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ContextApi from "./contextApi/ContextApi.js"

export default function App() {
    const [token, setToken] = useState("");
    const contextValue = { token, setToken}

    return (
        <ContextApi.Provider value={contextValue}>
            <BrowserRouter>
                <Routes>
                    <Route></Route>
                </Routes>
            </BrowserRouter>
        </ContextApi.Provider>
    )
}