import React from "react";
import Login from "../pages/Login/index"
import ProtectedRoutes from "./protectedRoutes";
import Register from "../pages/Register/index"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
    return ( 
        <Router>
            <Routes>
                <Route path="*" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/home" element={
                    <ProtectedRoutes >
                        <h1>Home</h1> 
                    </ProtectedRoutes>
                    
                } 
                />
            </Routes>
        </Router>
     );
}
 
export default Routering;