import React from 'react'
import bgCards from '../assets/shadow-2.svg'

const SkillCard = (Props) => {
    const { text, icon, experience = '' } = Props;
  return (
    <>
        <div className="flex flex-col justify-center items-center p-4 rounded-lg shadow-lg opacity bg-center mx-1.5 my-1.5" style={{ backgroundImage: `url(${bgCards})` }}>
            <img src={icon} alt="Imagen" loading='lazy' className='size-20 max-auto h-auto'/>
            <p className="text-center ">{ text }</p>
            <p className="text-center ">{experience}</p>
        </div>
    </>
  )
}

export default SkillCard;