import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    let [isAuthenticated, setAuthenticated] = useState(false);
    let [currentUser, setCurrentUser] = useState({})
    let [currentUserName, setCurrentUserName] = useState()
    let [currentUserDetails, setCurrentUserDetails] = useState({});
    let [packageDetails, setPackageDetails] = useState({});

    // REGISTER 
    const register = async (name, age, email, password, role, address, contact) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({name, age, email, password, role, address, contact})
        console.log(body)
        setCurrentUser({ name, email });
        setCurrentUserName({name});
        try {
            const res = await axios.post('http://localhost:8181/user/sign-up', body, config)
            // localStorage.setItem('token', res.data.token);
            setAuthenticated(true)
        }
        catch (err) {
            console.log(err);
            console.log(err.response.data.errors[0])
            return err.response.data.errors[0].message;
        }
    }

    // LOGIN
    const login = async (email, password) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({
            email: email,
            password: password
        });


        setCurrentUser({ email, password });
        try {
            const res = await axios.post('http://localhost:8181/user/login', body, config);
            setCurrentUserName(res.data.objectData.name)
            setCurrentUser(res.data.objectData);
            console.log(res.data)
            setAuthenticated(true)
            return res.data;
        }
        catch (err) {
            console.log(err);
            console.log(err.response.data.errors[0].message)
            return err.response.data.errors[0].message
        }

    }

    const getPackage = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('http://localhost:8181/user/get-package');
            console.log(res)
            setPackageDetails(res.data.objectData)
            
            return res.data;
        }
        catch (err) {
            console.log(err);
            console.log(err.response.data.errors[0].message)
            return err.response.data.errors[0].message
        }

    }

    useEffect(()=>{
        getPackage();
    },[])


    const handleLogout = () => {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                register,
                handleLogout,
                packageDetails,
                isAuthenticated,
                currentUserName,
                currentUser,
            }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;