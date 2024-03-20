import React from 'react'

const ProjectCard = (Props) => {
    const { imgProject, imageAlt, title, text, tools = [] } = Props;
  return (
  <div className='p-2 m-2'>
    <div className=''>
      <img src={imgProject} alt={imageAlt} loading='lazy' className="mx-auto rounded object-contain h-48 w-96" />
    </div>
      <div className="card-body text-center mt-1">
          <h5 className="card-title font-bold">{title}</h5>
          <div className='flex justify-center'>
          {tools.map((tool) =>
            <img src={tool.img} alt={tool.name} loading='lazy' className='size-8 max-auto h-auto'/>
          )}
          </div>
          <span className="card-text">{text}</span>
      </div>
  </div>
  )
}

export default ProjectCard;