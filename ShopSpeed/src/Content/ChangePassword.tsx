import React from 'react'

export const ChangePassword = () => {
  return (
    <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4 py-10 my-auto h-full flex items-center bg-white">
        <div
            className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div className="">
                <h1
                    className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif text-center font-extrabold mb-2 dark:text-white">
                    Change Password
                </h1>
                        <div className="w-full  mb-4 mt-4">
                            <label className=" dark:text-gray-300">Password</label>
                            <input type="password"
                                    className="w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Password"/>
                        </div>
                        <div className="w-full  mb-4 mt-4">
                            <label className=" dark:text-gray-300">New Password</label>
                            <input type="password"
                                    className="w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="New Password"/>
                        </div>
                        <div className="w-full  mb-4 mt-4">
                            <label className=" dark:text-gray-300">New Confirm Password</label>
                            <input type="password"
                                    className="w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="New Confirm Password"/>
                        </div>
                    <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                        <button type="submit" className="w-full p-4">Submit</button>
                    </div>
            </div>
        </div>
    </div>
  )
}
