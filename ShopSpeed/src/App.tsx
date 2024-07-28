import React, { useEffect, useState } from "react";
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
import { Main } from "./Content/Main.tsx";
import { NotFound } from "./Content/NotFound.tsx";
import { Category } from "./Content/Category.tsx";

export const App = () => {
  const getToken = sessionStorage.getItem("Token")
  return (
    <>
      <BrowserRouter>
        <Routes>
          {getToken ? 
            <Route path="/" element={<Admin />}>
            <Route index element={<Main />} />
            <Route path="category" element={<Category />} >
            </Route>
            <Route path="user" element={<ListUser />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit" element={<ChangeProfile />} />
          </Route>
           : 
            <Route path="/" element={<Login />} />
          }
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
