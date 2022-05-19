import React from 'react';
import MenuIcon from "@heroicons/react/outline/MenuIcon"
import SearchIcon from "@heroicons/react/outline/SearchIcon"
import HandIcon from "@heroicons/react/solid/HandIcon"
function SecondGroup ()
{

    return <div className=' flex flex-col w-96 ml-12  bg-white h- mt-32 justify-center rounded-2xl whitespace-nowrap '>
        <div className='flex flex-row justify-between mt-10 w-96 px-3'>
            <MenuIcon className='h-6' />
            <SearchIcon className='h-4 bg-rose-600 w-8 p-1 text-white shadow-lg shadow-rose-600 shadow rounded-2xl h-8' />
        </div>
        <div className='flex flex-row mt-8'>

            <h1 className='text-md  text-rose-300 pl-3'>
                Hi Rakib
            </h1>
            <HandIcon className='text-yellow-500 h-5 ml-2' />
        </div>
        <h1 className='text-2xl ml-2 font-semibold'>Find your food</h1>
        <div className='mt-8 w-11/12 bg-rose-200 h-28 ml-3 rounded-2xl'>
            <img src='mountain.png' alt='' className='opacity-50 h-24 mt-4   w-48  rounded-xl  ' />
            <img src='transporter.png' alt='' className='h-36 ml-3 relative bottom-36 -mt-0.5 ' />
            <div className='relative -top-64 mt-3 ml-52'>
                <h1 className='text-xl font-semibold mt-2'>Free Delivery</h1>
                <p className='opacity-80 text-sm mt-2'>April 26 -May10</p>
                <button className='w-20 ml-3 mt-2 p-1 bg-rose-500 rounded-2xl text-sm'>Order Now</button>
            </div>
        </div>
        <div>
            <div className='border border-4 border-rose-700 rounded-2xl w-16 h-14  '>
                <div className=' rounded-2xl  w-24 h-10 '>
                    <img src='bugger.png' className='h-16 w-32 relative right-5 bottom-1' alt='' />
                    <p className='text-xs -mt-1 ml-0.5 font-bold '>Fast Fodd</p>
                </div>
            </div>
        </div>
    </div>


}

export default SecondGroup;
