export const links = [
    {
        id: 1,
        name: 'Image Slider',
        link: '/'
    },
    {
        id: 2,
        name: 'D3 Project',
        link: '/D3 Project'
    },
    {
        id: 3,
        name: 'User Interface',
        link: '/User Interface'
    },

]

import media1 from "../assets/media/media-1.jpeg";
import media2 from "../assets/media/media-2.jpeg";
import media3 from "../assets/media/media-3.jpeg";
import media4 from "../assets/media/media-4.jpeg";
import media5 from "../assets/media/media-5.jpeg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];