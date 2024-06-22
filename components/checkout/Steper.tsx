import React from 'react'
import { RiHome2Line } from 'react-icons/ri'

const Steper = () => {
    return (
        <div className='flex items-center gap-3 flex-wrap text-zinc-800 dark:text-white'>


            <p className='flex items-center gap-x-2 capitalize font-semibold ' > <span className='text-blue-800'>Information</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </p>
            <p className='flex items-center gap-x-2 capitalize font-semibold' > <span className='text-zinc-400'>confirm-order</span>
            </p>



        </div>
    )
}

export default Steper