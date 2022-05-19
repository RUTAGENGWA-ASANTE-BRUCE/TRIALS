import React from 'react';
import MoreIcon from '@heroicons/react/outline/MenuAlt2Icon'
import SunIcon from "@heroicons/react/outline/SunIcon"
import VolumeUpIcon from "@heroicons/react/outline/VolumeUpIcon"
import HeatersIcon from "@heroicons/react/outline/AdjustmentsIcon"
import FansIcon from "@heroicons/react/outline/SupportIcon"
import HomeIcon from "@heroicons/react/solid/HomeIcon"
import LightiningIcon from "@heroicons/react/solid/LightningBoltIcon"
import UserIcon from "@heroicons/react/solid/UserIcon"
import BookIcon from "@heroicons/react/solid/BookmarkIcon"

function Conditions ()
{
    return (<div className=' flex flex-col border-2 border-orange-50 rounded-3xl w-screen mr-3 bg-orange-100 sm:w-80 sm:ml-12   mt-56 relative ml-4 '>
        <div className='flex justify-between px-2 py-2 sm:px-5 sm:py-5'>

            <MoreIcon className='h-5 sm:h-8' />
            <img className='h-8 sm:h-8' alt='' src='avatar1.png' height={200} />
        </div>
        <div className='ml-4 mt-14 justify-between px-1 flex flex-row justify-between '>
            <div className='flex flex-col '>

                <h1 className='text-2xl font-bold'>Bedrooms</h1>
                <h3 className=' font-bold '>Today Usage</h3>
            </div>
            <button className='border-2 rounded-xl border-orange-100 bg-black p-5 h-2 py-5 pt-1 text-white mt-7 '>64KW</button>
        </div>
        <div className='flex flex-col sm:ml-3'>

            <div className='flex flex-row  whitespace-nowrap mt-5'>

                <div className='h-1 px-2 mt-14'>

                    <div className='flex' >
                        <div className='flex-col-reverse flex'>
                            <div className='h-6 border-orange-100 bg-black border-2 w-4 rounded-3xl  '></div>
                            <div className='h-2 border-orange-100 bg-black border-50% w-2 rounded-3xl ml-1 mb-1 '></div>
                        </div>

                        <div className='h-12 border-orange-100 bg-orange-300 border-2 w-4 rounded-3xl  mt-3 ml-2'></div>

                    </div>

                </div>

                <div className='h-1 px-2 mt-11'>

                    <div className='flex' >
                        <div className='flex-col-reverse flex '>
                            <div className='h-8  border-orange-100 bg-black border-2 w-4 rounded-3xl  '></div>
                        </div>

                        <div className='h-16 border-orange-100 bg-orange-300 border-2 w-4 rounded-3xl ml-2 mt-3'></div>

                    </div>

                </div>

                <div className='h-1 px-2 mb-20'>

                    <div className='flex' >
                        <div className='h-14 bg-black border-2 border-orange-100 w-4 rounded-3xl mt-16 '></div>
                        <div className='flex-col-reverse flex'>
                            <div className='h-24 bg-orange-300 border-orange-100 border-2 w-4 rounded-3xl ml-2 mt-3'></div>
                            <div className='h-2 bg-black border-50% w-2 border-orange-100 rounded-3xl ml-2  '></div>
                        </div>


                    </div>

                </div>

                <div className='h-1 px-2 mt-7'>

                    <div className='flex' >
                        <div className='flex-col-reverse flex'>
                            <div className='h-12 bg-black border-2 border-orange-100 w-4 rounded-3xl  '></div>
                        </div>

                        <div className='h-20 bg-orange-300 border-2 border-orange-100 w-4 rounded-3xl ml-2 mt-3'></div>

                    </div>

                </div>

                <div className='h-1 px-2 mt-8'>

                    <div className='flex' >
                        <div className='h-12 bg-black border-2 w-4 border-orange-100 rounded-3xl mt-10 '></div>
                        <div className='flex-col-reverse flex'>
                            <div className='h-16 bg-black border-2 w-4 border-orange-100 rounded-3xl  mt-3 ml-1'></div>
                            <div className='h-2 bg-black border-50% w-2 border-orange-100 rounded-3xl ml-2 mb-1 '></div>
                        </div>

                    </div>


                </div>
            </div>
            <p className='mt-10 px-2 text-sm'>
                <span className=''>10pm</span>
                <span className='px-1'>11pm</span>
                <span className='px-1'>12pm</span>
                <span className='px-1'>1am</span>
                <span className='px-1'>2am</span>
                <span className='px-1'>3am</span>
                <span className='px-1'>4am</span>
            </p>
        </div>

        <div className='flex flex-col mt-7 ml-3 sm:ml-6'>
            <div className='flex flex-row '>
                <div className='flex flex-row h-24'>
                    <div className='border-2 bg-black  w-32 rounded-2xl'>
                        <div className='mt-5 ml-10'>

                            <SunIcon className='h-4 text-white' />
                            <p className='text-white'>Light</p>
                        </div>
                    </div>
                    <div className='border-2 bg-black w-32 rounded-2xl ml-2'>
                        <div className='mt-5 ml-10'>

                            <VolumeUpIcon className='h-4 text-white' />
                            <p className='h-4 text-white'>Sound</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='felx flex-row pt-2'>
                <div className='flex flex-row h-24 '>
                    <div className='border-2 bg-black border-orange-100  w-32 rounded-2xl'>
                        <div className='mt-5 ml-10'>

                            <FansIcon className='h-4 text-white' />
                            <p className='text-white'>Fans</p>
                        </div>
                    </div>
                    <div className='border-2 bg-black w-32 rounded-2xl ml-2'>
                        <div className='mt-5 ml-10'>

                            <HeatersIcon className='h-4 text-white' />
                            <p className='text-white'>Heaters</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='flex flex-row justify-evenly mt-20 space-x-11 sm:mb-3'>
            <HomeIcon className='h-5' />
            <LightiningIcon className='h-5' />
            <UserIcon className='h-5' />
            <BookIcon className='h-5' />
        </div>


    </div>)
}

export default Conditions;
