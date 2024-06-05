import React from 'react'

const Category = ({ params }: { params: any }) => {
    return (
        <div>{params.category}</div>
    )
}

export default Category