import React from 'react'

import bgCards from '../assets/shadow-2.svg'

const CardsComponent = (Props) => {
    const { title, position, skills } = Props;
  return (
    <>

    <div className="flex flex-col rounded-lg shadow-md overflow-hidden md:max-w-lg aspect-ratio-square dark:bg-slate-800 bg-top mx-6 my-1.5" style={{ backgroundImage: `url(${bgCards})` }}>
        <div className="flex-1 p-6 ">
            <h2 className='font-bold'>{'<'} { title } {'/>'}</h2>
            <span className='font-bold'>{ position }</span>
            <ul className="flex flex-col gap-2 overflow-y-auto">
                {skills?.map((skill, index) => (
                        <li key={skill.text} className="mb-2">
                        { skill.text }
                        </li>
                    ))}
            </ul>
        
        </div>
    </div>
    </>
  )
}

export default CardsComponent;
