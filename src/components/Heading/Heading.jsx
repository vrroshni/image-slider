import React from 'react'


//custom component for heading
const Heading = ({ className="z-0", text }) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center md:justify-start overflow-hidden'>
            <h1
                className={`inline-block w-full   capitalize ${className}`}
            >
                <span className=''>
                    {text}
                </span>

            </h1>
        </div>
        )
}

export default Heading


                            