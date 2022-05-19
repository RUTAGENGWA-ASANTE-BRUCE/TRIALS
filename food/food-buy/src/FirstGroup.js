import React from 'react';
import RightIcon from "@heroicons/react/outline/ChevronLeftIcon"
import MinusIcon from "@heroicons/react/outline/MinusIcon"
import PlusIcon from "@heroicons/react/outline/PlusIcon"

function FirstGroup ()
{
    return <div className=''>
        <div className=' flex flex-col w-80 ml-8 bg-rose-400 h-max mt-10 justify-center rounded-2xl whitespace-nowrap '>
            <img className='  h-96   relative left-4  bottom-7' alt="" src='chef.png' />
            <div className='w-64 px-5 bg-white h-56 bottom-7  text-center left-7 relative  border-2 rounded-2xl'>
                <div className='ml-10 '>

                    <div className='h-1 w-1 bg-black rounded-2xl  ml-8 mt-6'></div>
                    <div className='h-1 w-1 bg-black rounded-2xl  ml-12 relative bottom-1'></div>
                    <div className='h-1 w-5 bg-rose-500 rounded-2xl  ml-16 relative bottom-2'></div>
                </div>

                <h2 className='text-2xl font-bold'>Quick delivery at</h2>
                <h2 className='text-2xl font-bold ml-5'>Your <span className='text-rose-500'>Doorstep</span></h2>
                <div className='mt-2 opacity-60'>

                    <p className='text-sm '>Home delivery and online reservation </p>
                    <p className='text-sm'>System for restaurant and cafe</p>
                </div>

                <button className='h-11 bg-rose-400 border-2 rounded-3xl w-32 mt-3'>Get Started</button>
            </div>
        </div>

        <div className='flex flex-col w-80 ml-8 bg-gray-100 h-max mt-10 justify-center rounded-2xl '>
            <div className='flex flex-row mt-10 ml-5'>

                <RightIcon className='h-4 mt-2' />
                <h1 className='text-md font-bold ml-28 '>My Order</h1>
            </div>
            <div className='flex flex-col'>

                <div className=' flex flex-row ml-4 mr-4 bg-white rounded-2xl mt-5'>
                    <img src='pie.png' alt='' className='' />
                    <div className='flex flex-col ml-3'>
                        <p className='text-sm mt-1 font-bold'>Melting cheese</p>
                        <p className='text-sm font-bold opacity-20'>Pizza bar</p>
                        <p className='text-sm font-bold '><span className='text-orange-300'>$</span> 9.65</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-sm mt-1 font-bold opacity-60 ml-8'>$ 25.00</h1>
                        <div className='flex flex-row ml-7 mt-4'>
                            <MinusIcon className='bg-orange-600 h-4 rounded-sm text-white' />
                            <h1 className='text-sm font-bold ml-2'>2</h1>
                            <PlusIcon className='bg-orange-600 rounded-sm h-4 ml-2 text-white' />
                        </div>
                    </div>
                </div>

                <div className=' flex flex-row ml-4 mr-4 bg-white rounded-2xl mt-5'>
                    <img src='pie2.png' alt='' className='' />
                    <div className='flex flex-col ml-3'>
                        <p className='text-sm mt-1 font-bold '>Spagheti Shrimp </p>
                        <p className='text-sm font-bold opacity-20'>Pizza bar</p>
                        <p className='text-sm font-bold '><span className='text-orange-300'>$</span> 9.65</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-sm mt-1 font-bold opacity-60 ml-8'>$ 25.00</h1>
                        <div className='flex flex-row ml-7 mt-4'>
                            <MinusIcon className='bg-orange-600 h-4 rounded-sm text-white' />
                            <h1 className='text-sm font-bold ml-2'>2</h1>
                            <PlusIcon className='bg-orange-600 rounded-sm h-4 ml-2 text-white' />
                        </div>
                    </div>
                </div>

                <div className=' flex flex-row ml-4 mr-4 bg-white rounded-2xl mt-5'>
                    <img src='pie3.png' alt='' className='' />
                    <div className='flex flex-col ml-3'>
                        <p className='text-sm mt-1 font-bold '>Chiken salad </p>
                        <p className='text-sm font-bold opacity-20'>Pizza bar</p>
                        <p className='text-sm font-bold '><span className='text-orange-300'>$</span> 9.65</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-sm mt-1 font-bold opacity-60 ml-8'>$ 25.00</h1>
                        <div className='flex flex-row ml-7 mt-4'>
                            <MinusIcon className='bg-orange-600 h-4 rounded-sm text-white' />
                            <h1 className='text-sm font-bold ml-2'>2</h1>
                            <PlusIcon className='bg-orange-600 rounded-sm h-4 ml-2 text-white' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>;
}

export default FirstGroup;
