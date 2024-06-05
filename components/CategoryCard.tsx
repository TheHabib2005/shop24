import React from 'react'

const CategoryCard = () => {
    return (
        <div className='w-[170px] h-[145px] border border-zinc-800 flex items-center  mb-5 justify-center hover:bg-[#2563EB] text-white flex-col gap-3 rounded-md transition-all duration-200 ease-linear'>
            <img src="./Category-CellPhone.png" alt="" />
            <h2 className='text-xl capitalize'>phones</h2>
        </div>
    )
}

export default CategoryCard