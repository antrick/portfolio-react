import React from 'react'
import bgCards from '../assets/shadow-2.svg'

const SkillCard = (Props) => {
    const { text, icon, experience = '' } = Props;
  return (
    <>
        <div class="flex flex-col justify-center items-center p-4 rounded-lg shadow-lg opacity bg-center mx-1.5 my-1.5" style={{ backgroundImage: `url(${bgCards})` }}>
            <img src={icon} alt="Imagen" className='size-20 max-auto h-auto'/>
            <p class="text-center ">{ text }</p>
            <p class="text-center ">{experience}</p>
        </div>
    </>
  )
}

export default SkillCard;