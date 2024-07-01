import React from 'react'
// import{Route,BrowserRouter as Router ,Routes} from 'react-router-dom'
import { useState } from 'react'
import Login from './UserComp/Login';
import Dashboard from './UserComp/Dashboard'

function Users() {

  const [user,setUser]=useState({});
  const [success,setSucess]=useState(false);
  return (
    <>
      {console.log(user, success)};
      {success ?<Dashboard/>:<Login setUser={setUser} setSucess={setSucess}/> }
    </>
  )
}

export default Users