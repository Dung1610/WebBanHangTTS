import React from 'react'

export const ChangeProfile = () => {
  return (
    <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4 py-10 my-auto h-full flex items-center bg-white">
        <div
            className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div className="">
                <h1
                    className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif text-center font-extrabold mb-2 dark:text-white">
                    Change Profile
                </h1>
                <form>
                    <div
                        className="w-full pt-6 pb-6 rounded-sm bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                        <div
                            className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('../src/image/avatar.jpg')] bg-cover bg-center bg-no-repeat">
                            <div className="bg-white/90 rounded-full w-10 h-10 text-center ml-20 mt-28">
                                <label>
                                        <svg data-slot="icon" className="w-10 h-7 mt-1 text-blue-700" fill="none"
                                            stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                            </path>
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                            </path>
                                        </svg>
                                <input type="file" name="profile" id="upload_profile" hidden/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile and Cover Image
                    </h2>
                        <div className="w-full mb-4 mt-4">
                            <label className="mb-2 dark:text-gray-300">Name</label>
                            <input type="text"
                                    className="w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="First Name"/>
                        </div>
                        <div className="w-full  mb-4 mt-4">
                            <label className=" dark:text-gray-300">Số Điện Thoại</label>
                            <input type="tel"
                                    className="w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Số Điện Thoại"/>
                        </div>
                        <div className="w-full  mb-4 mt-4">
                            <label className=" dark:text-gray-300">Email</label>
                            <input type="Email"
                                    className="w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Email"/>
                        </div>
                    <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                        <button type="submit" className="w-full p-4">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
