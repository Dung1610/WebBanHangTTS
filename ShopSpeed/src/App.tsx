import { useState } from "react";
import { ManagerSalesman } from "./Content/ManagerSalesman";
import { Login } from "./Content/Login";
import { Register } from "./Content/Register";
import { ChangePassword } from "./Content/ChangePassword";
const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
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
            Designer
          </h1>
        </div>
        <ul className="pt-6">
            <li
              className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
              <img src={`./src/image/User.png`} />
              <button className={`${!open && "hidden"} origin-left duration-200`}>
              Accounts
              </button>
            </li>
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <ChangePassword/>
      </div>
    </div>
  );
};
export default App;
