import React, { useEffect, useState } from "react";
import { danhSachNguoiDung, updateStatus } from "../Services/adminService";
import LoadingLayout from "./LoadingLayout";

// type list
type ListAdmin = {
  createdAt: "";
  name: "";
  email: "";
  phone: "";
  avatar: "";
  status: 0;
  address: "";
};
export const ListAdmin = () => {
  const [list, setlist] = useState<ListAdmin[]>();
  useEffect(() => {
    listUser();
    update;
  }, []);

  const listUser = async () => {
    setlist(await danhSachNguoiDung("quan-tri-vien"));
  };
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("Name");
  const update = async (email: string, phone: string, status: any) => {
    if (status == 0) {
      const res = await updateStatus(email, phone, 1);
      listUser();
    } else {
      const res = await updateStatus(email, phone, 0);
      listUser();
    }
  };
  return (
    <div className="flex flex-col">
      <div className=" overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="relative  text-gray-500 focus-within:text-gray-900 mb-4">
            {/* seach */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                  className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-green-500 focus:outline-none focus:border-green-500"
                />
                <span className="bg-green-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">
                  Search
                </span>
              </div>
              <select
                id="selectecSeach"
                name="selectecSeach"
                onChange={(event) => {
                  setSelected(event.target.value);
                }}
                className="w-30 h-10 border-2 border-green-500 focus:outline-none focus:border-green-500 text-green-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
              >
                <option value="Name">Name</option>
                <option value="Phone">Phone</option>
                <option value="Email">Email</option>
              </select>
            </div>
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
                    Avatar
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
                    Phone
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
              <LoadingLayout loading={!list}>
                <tbody
                  className="divide-y divide-gray-300 overflow-y-scroll"
                  style={{ height: "80vh;" }}
                >
                  {/* list danh sach lay tu api */}
                  {list ? (
                    list
                      .filter((val) => {
                        if (search == "") {
                          return val;
                        } else if (selected == "Name") {
                          if (val.phone != null) {
                            if (
                              val.name
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase())
                            ) {
                              return val;
                            }
                          }
                        } else if (selected == "Phone") {
                          if (val.phone != null) {
                            if (
                              val.phone.includes(search.toLocaleLowerCase()) &&
                              val.phone != null
                            ) {
                              return val;
                            }
                          }
                        } else if (selected == "Email") {
                          if (val.email != null) {
                            if (
                              val.email
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase())
                            ) {
                              return val;
                            }
                          }
                        }
                      })
                      .map((item) => {
                        return (
                          <tr className="bg-gray-50 transition-all hover:bg-gray-50 max-h-3">
                            <th
                              scope="row"
                              className="flex items-center w-50 h-50 px-6 py-4"
                            >
                              <img
                                className="w-16 h-16 rounded-full"
                                src={
                                  item.avatar == "" || item.avatar == null
                                    ? "../src/image/anh_mac_dinh.png"
                                    : item.avatar
                                }
                                alt=""
                              />
                            </th>
                            <td className="p-5 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.name}
                            </td>
                            <td className="p-5 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.email}
                            </td>
                            <td className="p-5 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.phone}
                            </td>
                            <td className="p-5 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.createdAt}
                            </td>
                            <td className="p-5 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.status == 0 ? (
                                <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">
                                  Actives
                                </span>
                              ) : (
                                <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">
                                  Lock
                                </span>
                              )}
                            </td>
                            <td className=" p-5 ">
                              <div className="flex items-center gap-1">
                                <button
                                // data-modal-target="popup-modal-lock" data-modal-toggle="popup-modal-lock"
                                  className="p-2 rounded-full  group transition-all duration-500  flex item-center"
                                  onClick={() =>
                                    update(item.email, item.name, item.status)
                                  }
                                >
                                  {item.status == 0 ? (
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
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.3"
                                        d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      className="w-6 h-6 text-gray-800 dark:text-white"
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
                                        stroke-width="2"
                                        d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M5 11h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                                      />
                                    </svg>
                                  )}
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                  ) : (
                    <th className="p-5 col-span-3 bg-white text-sm font-medium text-gray-900">
                      Null
                    </th>
                  )}
                </tbody>
              </LoadingLayout>
            </table>
          </div>
        </div>
      </div>

      {/* modal */}
      <div
        id="popup-modal-lock"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I'm sure
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
