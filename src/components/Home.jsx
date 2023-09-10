import React from 'react'
import Heading from './Heading/Heading'
import Button from './buttons/Buttons'
import { AiOutlineContacts } from 'react-icons/ai';
import ImageSlider from './ImageSlider';


const Home = () => {
    return (
        <main id='home' className=' relative flex items-center text-dark w-full h-auto md:pt-2 mt-28 scroll-mt-28'>
            <div className="inline-block z-0  bg-light p-8 md:px-16 md:pt-1 pt-0 w-full">
                <div className='flex flex-row items-center justify-between w-full'>
                    <div className="w-full mt-0 md:mt-16 flex flex-col items-center justify-center  self-center  px-4 md:px-0">
                        <Heading text='Image Slider with Parallax Effect' className='!text-4xl md:!text-5xl !text-center font-bold  ' />
                        <div className='flex items-center justify-center  mt-24'>
                            <ImageSlider />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home