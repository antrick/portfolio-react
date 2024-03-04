import React from 'react'
import '../styles.css'; 
import imgReact from '../assets/icon-react.png';
import imgTailwind from '../assets/icon-tailwind.png';

const Footer = () => {
  return (
    <footer className='mt-2 pb-1 '>
        <div className='container mx-auto text-center '>
            <div className='flex justify-center items-center '>
                <img src={imgReact} alt='imgReact' className='size-8 scale-95'/>
                <img src={imgTailwind} alt='imgTailwind' className='w-10 h-5 hover:scale-125'/>
            </div>
            <p className='text-footer'>Creado con React JS & Tailwind.</p>
        </div>
    </footer>
  )
}

export default Footer;