import React from 'react'

const Heading = ({ className, text }) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center md:justify-start overflow-hidden'>
            <h1
                className={`inline-block w-full text-textcolor  capitalize ${className}`}

            >
                <span className='text-textcolor'>
                    {text}
                </span>

            </h1>
        </div>)
}

export default Heading