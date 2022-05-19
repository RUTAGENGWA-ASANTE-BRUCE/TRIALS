import React from 'react';
import RightIcon from "@heroicons/react/outline/ChevronRightIcon"
function house ()
{
    return (
        <div className="flex grid border-2 border-orange-50 mt-40 mb-20  rounded-3xl w-screen sm:w-80   border-orange-100   ml-3 bg-orange-100 group flex
         ">
            <div className='space-x-1 whitespace-normal pb-8 pl-5 max-h-96 mt-20 sm:px-6 '>

                <h1 className=' text-4xl font-bold py-1'>The Perfect </h1>
                <h1 className='text-4xl font-bold py-1'>Dream House </h1>
                <h1 className='text-4xl font-bold py-1'>For You</h1>
            </div>

            <p className='pl-5 text-sm sm:px-6'>A smart house with advanced features that </p>
            <p className='pl-5 text-sm sm:px-6' >You can control with mobile app</p>
            <RightIcon className='h-7  relative left-60 top-64 border-2 bg-orange-100 rounded-2xl' />
            <img className=' pt-7 rounded-2xl border-1 border-orange-100 h-80' width={"100%"} height={"50%"} src='house.jpg' alt='' />
        </div>
    )
}

export default house;

