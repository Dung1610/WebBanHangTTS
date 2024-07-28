import React from "react";
import { danhSachNguoiDung } from "../Services/adminService";

const login = async() =>{
  const list = danhSachNguoiDung("nguoi-ban")
}

export const ListUser = () => {
  {login}
  return (
    <div className="flex flex-col">
      <div className=" overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="relative  text-gray-500 focus-within:text-gray-900 mb-4">
            {/* seach */}
            <form className="flex flex-col md:flex-row gap-3">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-green-500 focus:outline-none focus:border-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
                >
                  Search
                </button>
              </div>
              <select
                id="pricingType"
                name="pricingType"
                className="w-30 h-10 border-2 border-green-500 focus:outline-none focus:border-green-500 text-green-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
              >
                <option value="Id" selected>
                  Id
                </option>
                <option value="Name">Name</option>
                <option value="Email">Email</option>
              </select>
            </form>
          </div>
          {/* list */}
          <div className="overflow-hidden rounded-xl">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th
                    scope="col"
                    className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    User Id
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    Password
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    Registration Date
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    Actions
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 ">
                <tr className="bg-white transition-all duration-500 hover:bg-gray-50">
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                    1
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    Hanh
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    <div className="w-full max-w-[16rem]">
                      <div className="relative">
                        <input
                          id="npm-install-copy-button"
                          type="text"
                          className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value="Hanh123@gmail.com"
                          disabled
                        />
                        <button
                          data-copy-to-clipboard-target="npm-install-copy-button"
                          data-tooltip-target="tooltip-copy-npm-install-copy-button"
                          className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
                        >
                          <span id="default-icon">
                            <svg
                              className="w-3.5 h-3.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 20"
                            >
                              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                            </svg>
                          </span>
                          <span
                            id="success-icon"
                            className="hidden inline-flex items-center"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 16 12"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5.917 5.724 10.5 15 1.5"
                              />
                            </svg>
                          </span>
                        </button>
                        <div
                          id="tooltip-copy-npm-install-copy-button"
                          role="tooltip"
                          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                        >
                          <span id="default-tooltip-message">
                            Copy to clipboard
                          </span>
                          <span id="success-tooltip-message" className="hidden">
                            Copied!
                          </span>
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    hanh12345
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    16/12/24
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                  <td className=" p-5 ">
                    <div className="flex items-center gap-1">
                      <button className="p-2  rounded-full  group transition-all duration-500  flex item-center">
                        <svg
                          className="w-[44px] h-[44px] text-gray-800 dark:text-white"
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
                            stroke-linejoin="round"
                            stroke-width="1.3"
                            d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
