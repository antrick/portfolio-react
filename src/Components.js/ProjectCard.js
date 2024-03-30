import React from 'react'
import { Link } from 'react-router-dom';

const ProjectCard = (Props) => {
    const { id, imgProject, imageAlt, title, text, tools = [] } = Props;
  return (
  <div className='p-2 m-2 hover:shadow rounded-lg transition duration-300 ease-in-out hover:scale-110' key={id}>
    
      <Link to={`/project/${id}`}>
      <div className=''>
        <img src={imgProject} alt={imageAlt} loading='lazy' className="mx-auto rounded object-contain h-48 w-96" />
      </div>
        <div className="card-body text-center mt-1">
          
            <h5 className="card-title font-bold">{title}</h5>
            <div className='flex justify-center'>
            {tools.map((tool, index) =>
              <div key={tool.name+index}>
              <img key={tool.name+index} src={tool.img} alt={tool.name} loading='lazy' className='size-8 max-auto h-auto'/>
              </div>
            )}
            </div>
            <span className="card-text">{text}</span>
        </div>
        </Link>
      
  </div>
  )
}

export default ProjectCard;