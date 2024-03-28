import Card from "./Card"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React from 'react'

const Testimonials = (props) => {
    let reviews = props.reviews[0];
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
        <Card reviews={reviews}></Card>

        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
            <button className='cursor-pointer hover:text-violet-500 '>
                <FiChevronLeft/>
            </button>

            <button className='cursor-pointer hover:text-violet-500 '>
                <FiChevronRight/>
            </button>
        </div>

        <div>
            <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 mt-6
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                Surprise Me
            </button>
        </div>

    </div>
  )
}

export default Testimonials