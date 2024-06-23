import React from 'react'
import { ClipLoader } from 'react-spinners'

const SpainerLoader = () => {
    return (
        <div className='w-full min-h-full flex items-center justify-center'>
            <ClipLoader color='#2563EB' />
        </div>
    )
}

export default SpainerLoader