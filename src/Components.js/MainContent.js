
import React from 'react'
// Imagenes
import imgProfile from '../assets/picture-blank.png'
import bgTools from '../assets/tools2.png'
// Componentes
import CardsComponent from './CardsComponent'
import SkillCard from './SkillCard'
import ScrollToTopButton from './ScrollToTopButton'
// Datos locales
import skillsArray from '../localData/skillsArray'
import { cmrSkills, hmsSkills } from '../localData/experienceData'

const MainContent = () => {  
  
  return (
    <main className='flex flex-col items-center p-4 '>
        <div className='container bg-zinc-100 dark:bg-slate-700  rounded-lg shadow bg-center'  style={{ backgroundImage: `url(${bgTools})`, backgroundSize: 'cover' }}>
          <section className=''>

              <div className='flex flex-col md:flex-row justify-center items-center '>
                <div className='flex flex-wrap md:w-1/3 text-justify p-2'>
                  <h1 className='font-bold'>¡Hola a todos!</h1>
                  <p>Mi nombre es Andy Mota Moreno soy ingeniero en sistemas computacionales con expecieriencia como desarrollador web, me gusta involucrarme en cada proyecto, aportar y aprender en cada uno de ellos. </p>
                </div>
              
                <div className=''>
                  <img src={imgProfile} alt='img-profile' className='rounded my-img ' />
                </div>
              </div>

          </section>

          
        </div>

        <div className='container rounded-lg my-4' id="experience">
            {/* Titulo de seccion */}
            <div className='flex flex-col justify-center items-center mb-2'>
              <p className='text-4xl font-bold '>Experiencia:</p>
            </div>
            <div className='flex flex-col md:flex-row  md:justify-center'>

              <CardsComponent title="2019 - 2021 | CMR Consultores" position="Desarrollador Web" skills={cmrSkills}/>
              
              <CardsComponent title="2021 - 2024 | HMS Sistemas de Información" position="Desarrollador Web" skills={hmsSkills}/>
    
            </div>
        </div>
  
        <div className='container rounded-lg my-4' id="skills">
          
            
            <div className='flex flex-col justify-center items-center w-full'>
              <p className='text-4xl font-bold'>Habilidades:</p>
            </div>
              <div className='flex justify-center items-center '>
                    <div className='flex flex-wrap rounded-lg  '>

                    {skillsArray.map(skill => (
                        <SkillCard key={skill.text} text={skill.text} icon={skill.icon} />
                      ))} 
                        
                    </div>
              </div>
          
        </div>

        <div>
      
      
    </div>
       <ScrollToTopButton/>

    </main>
  )
}

export default MainContent;
