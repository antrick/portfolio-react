import React from 'react'
import bgCards from '../assets/shadow-2.svg'

const ButtonContact = (Props) => {
    const { icon,  url='' } = Props;
  return (
    <>
          <a href={url} className='transition duration-300 ease-in-out hover:scale-110'>
              <div class="flex flex-col justify-center items-center p-4 rounded-lg shadow-lg opacity bg-center m-4" style={{ backgroundImage: `url(${bgCards})` }}>
                  <img src={ icon } alt="Imagen" className='size-8 max-auto h-auto'/>
             
              </div>
          </a>
    </>
  )
}

export default ButtonContact;