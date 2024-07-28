import { useState } from "react";
import "flowbite";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Login } from "./Content/Login";
import { TestTable } from "./Content/TestTable";

const Admin = () => {
  const [open, setOpen] = useState(true);

  const navigation = useNavigate();

  const LogOut = () => {
    sessionStorage.removeItem("Token");
    navigation("/");
  };

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src="../src/image/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="../src/image/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Speed Shop
          </h1>
        </div>
        <ul className="pt-6">
          <li
            data-collapse-toggle="dropdown-sileBar-category"
            className="flex py-5 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4"
          >
            <svg
                className="w-6 h-6 text-white-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
                />
              </svg>
            <span className={`${!open && "hidden"} origin-left items-center inline-flex`}>
              <span>List</span>
              <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
            </span>
          </li>
          {/* menu list */}
          <ul id="dropdown-sileBar-category" className={`${!open && "hidden"} hidden py-2 space-y-2`}>
            <Link to={'user'} className="flex py-5 pl-6 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
              <svg
                className="w-6 h-6 text-white-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
                />
              </svg>
                User
            </Link>
            <li className="flex py-5 pl-6 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
              <svg
                className="w-6 h-6 text-white-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
                />
              </svg>
                Sale
            </li>
            <li className="flex py-5 pl-6 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
              <svg
                className="w-6 h-6 text-white-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
                />
              </svg>
                Admin
            </li>
          </ul>

          <li
            data-dropdown-toggle="dropdownAvatarName"
            className="flex rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4"
          >
            <img
              className="w-10 h-10 rounded-full"
              src="../src/image/avatar.jpg"
            />
            <button
              className={`${
                !open && "hidden"
              } flex py-5 rounded-md cursor-pointer text-gray-300 text-sm items-center gap-x-4`}
              type="button"
            >
              {sessionStorage.getItem("name")}
            </button>
          </li>
          <div
            id="dropdownAvatarName"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <div className="px-4 py-3 flex items-center text-sm text-gray-900 dark:text-white">
              <svg
                className="w-6 h-6 mr-2 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
              <div className="truncate">{sessionStorage.getItem("email")}</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
            >
              <Link
                to={"profile"}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Profile
              </Link>
              <Link
                to={"edit"}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Change Profile
              </Link>
            </ul>
            <div className="py-2">
              <a
                onClick={LogOut}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </ul>
      </div>
      <div className="h-screen flex-1 p-7 bg-green-300">
        <Outlet />
      </div>
    </div>
  );
};
export default Admin;
