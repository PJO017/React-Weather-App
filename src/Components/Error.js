import {React, useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom';

export const Error = () => {
   
   function redirect() {
        console.log("hrllo");
        return <Redirect to="/today"></Redirect>
    }

    return (
        <div className="error-page">
           <h1>Oops! Page not found!</h1> 
           <button onClick={() => redirect}>Return</button>
        </div>
    )
}
