/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Cards from './cards'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
function course() {
    const [book, setBook] = useState([])
    if (!book) {
        return null;
    }
    useEffect(() =>{
        const getBook = async() =>{
            try{
                const res = await axios.get("http://localhost:4001/book");
                setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])
    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
                <div className="py-28 items-center justify-center text-center">
                    <h1 className=" text-2xl md:text-4xl">We're delighted to have you{" "} <span className="text-pink-500">Here! :)</span></h1>
                    <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti deserunt incidunt nostrum assumenda beatae voluptas, voluptatibus illo cum impedit voluptatem quas harum atque, at illum vero molestias provident? Obcaecati expedita perferendis deleniti amet totam ab iste minus, soluta blanditiis et harum repudiandae, labore aliquid animi culpa molestiae asperiores? Accusamus.</p>
                    <Link to="/">
                        <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {
                        book.map((item) => (
                            <Cards key={item.i} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default course
