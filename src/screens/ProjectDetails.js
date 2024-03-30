
import { useParams } from 'react-router-dom';

import { projects } from "../localData/projectsData";

export const ProjectDetails = () => {
    const { id } = useParams();

    const obtenerProyecto = (idProject) => {
        return projects.find( project => project.id === parseInt(idProject));
    }
    
    const proyecto = obtenerProyecto(id);

    const arrayImgs = proyecto.imgsDetails;

  
    const changeImg = (imgId) => {

        const currentImg = arrayImgs.find( item => item.id === parseInt(imgId));  
        // console.log(currentImg)
        document.getElementById("galeria").src=currentImg.img;
    }

  return (
    <div className=''>

      <div className=''>

            <div className='flex justify-center'>
              <img alt={proyecto.txtAltImage} src={proyecto.imgProject} className='rounded shadow max-h-96'/>
            </div>
            <div className='flex my-4 flex-col justify-center items-center'>

              <div className='w-1/2 my-2'>
                <div className='text-center'>
                  <h2 className='font-bold'>Proyecto: <a className='font-normal hover:underline' href={proyecto.url} target='_blank' rel='noreferrer'>{proyecto.title}</a></h2>
                </div>
                <ul className='flex flex-col gap-2 overflow-y-auto p-4'>
                  {proyecto.details.map((detail,index) => (
                    <li key={index}>
                      • {detail.detail}
                    </li>
                  ))}
                </ul>
              
                </div>
            </div>

            <div className='flex justify-center items-center flex-col'>
              <h2 className='font-bold'>Galeria: </h2>
              <span className='font-bold'>imagenes extraidas de: <a className='font-normal hover:underline' href={proyecto.url} target='_blank' rel='noreferrer'>{proyecto.title}</a></span>
              <div className='w-auto h-96 mt-4 mb-6'>

                  <img id="galeria" src={arrayImgs[0].img} alt='img-detail' className='rounded-md h-full object-cover'/>
              </div>
              <ul className='listDetails'>
                {proyecto.imgsDetails.map((item) => (
                  <li onClick={ () => changeImg(item.id) } ><img src={item.img} alt={item.name} className='rounded'/></li>
                ))}
          
              </ul>
            </div>

      </div>
        
    </div>
  )
}
