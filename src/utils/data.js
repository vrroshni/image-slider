export const links = [
    {
        id: 1,
        name: 'Image Slider',
        link: 'https://image-slider-red.vercel.app/'
    },
    {
        id: 2,
        name: 'D3 Project',
        link: 'https://data-visualization-xi.vercel.app/'
    },
    {
        id: 3,
        name: 'User Interface',
        link: 'https://user-interface-d285p410d-vrroshni.vercel.app/'
    },

]

import media1 from "../assets/media/media-1.jpeg";
import media2 from "../assets/media/media-2.jpeg";
import media3 from "../assets/media/media-3.jpeg";
import media4 from "../assets/media/media-4.jpeg";
import media5 from "../assets/media/media-5.jpeg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];