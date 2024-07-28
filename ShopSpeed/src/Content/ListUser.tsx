import React, { useEffect, useState } from "react";
import { danhSachNguoiDung } from "../Services/adminService";
import LoadingLayout from "./LoadingLayout";

// type list
type ListUser = {
  createdAt: "";
  name: "";
  email: "";
  phone: "";
  avatar: "";
  status: 0;
  address: "";
};
export const ListUser = () => {
  const [list, setlist] = useState<ListUser[]>();
  useEffect(() => {
    listUser();
  }, []);

  const listUser = async () => {
    setlist(await danhSachNguoiDung("nguoi-ban"));
  };

  const updateStatus = async (email: string, phone: string, status: any) => {
    let res;
    if (status == 0) {
      res = await updateStatus(email, phone, 1);
    } else {
      res = await updateStatus(email, phone, 0);
    }
    if (res != null) {
      return alert("loi api");
    }
    return listUser();
  };

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
                <option value="Id">Id</option>
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
                    list.map((item) => {
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
                                None
                              </span>
                            )}
                          </td>
                          <td className=" p-5 ">
                            <div className="flex items-center gap-1">
                              <button
                                className="p-2 rounded-full  group transition-all duration-500  flex item-center"
                                onClick={() =>
                                  updateStatus(
                                    item.email,
                                    item.name,
                                    item.status
                                  )
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
    </div>
  );
};
