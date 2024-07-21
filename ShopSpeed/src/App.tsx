import { useState } from "react";
import "flowbite";
import { ManagerSalesman } from "./Content/ManagerSalesman";
import { Login } from "./Content/Login";
import { Register } from "./Content/Register";
import { ChangePassword } from "./Content/ChangePassword";
import { OOOOO } from "./Content/OOOOO";
import { ListUser } from "./Content/ListUser";
import { Profile } from "./Content/Profile";
import { ChangeProfile } from "./Content/ChangeProfile";

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src="./src/image/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/image/logo.png"
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
          <li className="flex py-5 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
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
                stroke-linecap="round"
                stroke-width="2"
                d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"
              />
            </svg>
            <button className={`${!open && "hidden"} origin-left duration-200`}>
              website information
            </button>
          </li>
          <li className="flex py-5 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
            <img src={`./src/image/User.png`} />
            <button className={`${!open && "hidden"} origin-left duration-200`}>
              seller information
            </button>
          </li>
          <li className="flex py-5 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
            <img src={`./src/image/User.png`} />
            <button className={`${!open && "hidden"} origin-left duration-200`}>
              Registration history
            </button>
          </li>
          <li className="flex py-5 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
            <img src={`./src/image/User.png`} />
            <button className={`${!open && "hidden"} origin-left duration-200`}>
              login information
            </button>
          </li>
          <li className="flex py-5 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
            <img src={`./src/image/User.png`} />
            <button className={`${!open && "hidden"} origin-left duration-200`}>
              Notification
            </button>
          </li>
          <li className="flex py-5 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
            <img src={`./src/image/User.png`} />
            <button className={`${!open && "hidden"} origin-left duration-200`}>
              User
            </button>
          </li>
          <li className="flex rounded-md  cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src="./src/image/avatar.jpg"
              alt=""
            />
            <button
              id="dropdownAvatarNameButton"
              data-dropdown-toggle="dropdownAvatarName"
              className={`${
                !open && "hidden"
              } flex py-5 rounded-md cursor-pointer text-gray-300 text-sm items-center gap-x-4`}
              type="button"
            >
              Bonnie Green
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
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
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
              <div className="truncate">name@flowbite.com</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Profile
                </a>
              </li>
            </ul>
            <div className="py-2">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </ul>
      </div>
      <div className="h-screen flex-1 p-7 bg-green-300">
        <ChangeProfile />
      </div>
    </div>
  );
};
export default App;
