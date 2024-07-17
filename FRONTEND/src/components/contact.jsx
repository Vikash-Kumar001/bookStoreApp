/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
function contact() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="py-28 items-center justify-center">
                    <div className="max-w-lg mx-auto px-4">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4 dark:bg-slate-900 dark:text-white">
                            How can we help you
                        </h2>
                        <p className="text-gray-700 mb-8 dark:bg-slate-900 dark:text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis velit
                            eget nisi lobortis dignissim.
                        </p>
                        <form className="bg-white rounded-lg px-6 py-8 shadow-md ">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name" type="text" placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" type="email" placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
                                <textarea
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message" rows="6" placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contact
