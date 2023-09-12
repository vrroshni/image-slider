import React from 'react'
import { links } from '../../utils/data'

const Navlinks = ({ setNav, nav }) => {
    return (
        <>
         {/* Map through links and render navigation items */}
            {links.map(({ link, name }) => (
                <li key={link} className='px-4 cursor-pointer  capitalize py-3  hover:scale-105 duration-200 hover:text-brandcolor'>
                    <a onClick={() => {
                        if (nav) {
                            setNav(false)
                        }
                    }} href={link}
                        target='_blank'>{name}</a>
                </li>
            ))}
        </>
    )
}

export default Navlinks