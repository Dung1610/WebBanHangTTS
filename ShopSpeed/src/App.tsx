import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import { Login } from "./Content/Login.tsx";
import { ListUser } from "./Content/ListUser.tsx";
import { Profile } from "./Content/Profile.tsx";
import { ChangeProfile } from "./Content/ChangeProfile.tsx";
import Admin from "./Admin.tsx";
import { Main } from './Content/Main.tsx';

export const App = () => {
  const Token = localStorage.getItem('Token')
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} >
          <Route index element={<Main />} />
          <Route path="user" element={<ListUser />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit" element={<ChangeProfile />} />
        </Route> 
      </Routes>
    </BrowserRouter>
    </>
  )
}
