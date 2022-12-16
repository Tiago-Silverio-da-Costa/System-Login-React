import React from "react";
import Routering from './routes'
import UserService from "../Services/UserService";

const userService = new UserService()

const ProtectedRoutes = ({children}) => {
    const userAuth = userService.userAuth()
    console.log('userAuth', userAuth)
    return userAuth ? children : <Routering />
}
 
export default ProtectedRoutes;