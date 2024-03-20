import React from 'react'

const ProjectCard = (Props) => {
    const { imgProject, imageAlt, title, text, tools = [] } = Props;
  return (
    <div className="card h-64 p-2 m-2 rounded-xl">
      <img src={imgProject} alt={imageAlt} className="mx-auto rounded w-38 h-full" />
        <div className="card-body text-center mt-1">
          <h5 className="card-title font-bold">{title}</h5>
          <div className='flex justify-center'>
          {tools.map((tool) =>
            <img src={tool.img} alt={tool.name}  className='size-8 max-auto h-auto'/>
          )}
          </div>
          <span className="card-text">{text}</span>
        </div>
  </div>
  )
}

export default ProjectCard;