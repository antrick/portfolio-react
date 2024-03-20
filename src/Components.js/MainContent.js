import React from "react";
// Imagenes
import imgProfile from "../assets/picture-blank.png";
import bgTools from "../assets/tools2.png";
import icoLinkedin from "../assets/icon-linkedin.png"
import icoWhatsapp from "../assets/icon-whatsapp.png"
import icoGmail from "../assets/icon-gmail.png"
import icoReact from "../assets/react.png"
import icoTailwind from "../assets/tailwind.png"
import icoJava from "../assets/java.png"
import iconGithub from "../assets/icon-github.png"
import iconTypescript from "../assets/typescript.png"
import imgScreenLoginMindcan from "../assets/mindcan-login.webp"
import imgScreenLoginCmr from "../assets/screen-login.jpeg"
import imgScreenProgram from "../assets/program.png"
import imgLaravel from "../assets/icon-laravel.png"
import imgFlutter from "../assets/icon-flutter.png"
import iconBootstrap from '../assets/icon-bootstrap.png';
import iconJs from '../assets/icon-js.png';
import iconJquery from '../assets/icon-jquery.png';
// Componentes
import CardsComponent from "./CardsComponent";
import SkillCard from "./SkillCard";
import ScrollToTopButton from "./ScrollToTopButton";
// Datos locales
import skillsArray from "../localData/skillsArray";
import { cmrSkills, hmsSkills } from "../localData/experienceData";
import ButtonContact from "./ButtonContact";
import ProjectCard from "./ProjectCard";

const toolsCmrApp = [
  {img: imgLaravel, name: 'laravel'},
  {img: imgFlutter, name: 'flutter'},
];

const toolsProgramApp = [
  {img: imgLaravel, name: 'laravel'},
  {img: icoReact, name: 'react'},
];

const toolsSystemProgram = [
  {img: imgLaravel, name: 'laravel'},
  {img: iconBootstrap, name: 'bootstrap'},
  {img: iconJquery, name: 'jquery'},
  {img: iconJs, name: 'javascript'},
];

const MainContent = () => {
  return (
    <main className="flex flex-col items-center p-4 ">
      <div
        className="container bg-zinc-100 dark:bg-slate-700  rounded-lg shadow bg-center"
        style={{ backgroundImage: `url(${bgTools})`, backgroundSize: "cover" }}
      >
        <section className="">
          <div className="flex flex-col md:flex-row justify-center items-center ">
            <div className="">
              <img
                src={imgProfile}
                alt="img-profile"
                className="rounded my-img "
              />
            </div>

            <div className="flex flex-wrap md:w-1/3 text-justify p-2">
              <h1 className="font-bold">¡Hola a todos!</h1>
              <p>
              Mi nombre es Andy Mota Moreno, soy Ingeniero en Sistemas Computacionales con experiencia como desarrollador web. Me apasiona involucrarme en cada proyecto, aportar y aprender en cada uno de ellos.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="container rounded-lg my-4" id="experience">
        {/* Titulo de seccion */}
        <div className="flex flex-col justify-center items-center mb-2">
          <p className="text-4xl font-bold ">Experiencia:</p>
        </div>
        <div className="flex flex-col md:flex-row  md:justify-center">
          <CardsComponent
            title="2019 - 2021 | CMR Consultores"
            position="Desarrollador Web"
            skills={cmrSkills}
          />

          <CardsComponent
            title="2021 - 2024 | HMS Sistemas de Información"
            position="Desarrollador Web"
            skills={hmsSkills}
          />
        </div>
      </div>

      <div className="container rounded-lg my-4" id="experience">
          <div className="flex flex-col justify-center items-center mb-2">
            <p className="text-4xl font-bold ">Participacion en Proyectos:</p>
          </div>
          <div className="flex flex-wrap md:flex-row  md:justify-center items-center py-10">
            <ProjectCard title="System Program +" tools={toolsSystemProgram} text="Creacion y Actualizacion de funcionalidad en modulos y pantallas" imgProject={imgScreenProgram} imageAlt="program" />
            <ProjectCard title="CMR App" tools={toolsCmrApp} text="Desarrollo de pantallas para la primera version de la aplicación" imgProject={imgScreenLoginCmr} imageAlt="screen-cmr" />
            <ProjectCard title="Program + App" tools={toolsProgramApp} text="Actualizacion de funcionalidad y diseño en pantallas" imgProject={imgScreenLoginMindcan} imageAlt="screen-mindcan" />
            
          </div>

          
      </div>

      <div className="container rounded-lg my-4" id="skills">
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-4xl font-bold">Habilidades:</p>
          <span>Mayor experiencia: </span>
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex flex-wrap rounded-lg  ">
            {skillsArray.map((skill) => (
              <SkillCard key={skill.text} text={skill.text} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>

      <div className="container rounded-lg my-6" id="skills">
        <div className="flex flex-col justify-center items-center w-full">
          <span>Basico: </span>
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex flex-wrap rounded-lg  ">
            
              <SkillCard text="Flutter" icon={imgFlutter} />
              <SkillCard text="React" icon={icoReact} />
              <SkillCard text="Typescript" icon={iconTypescript} />
              <SkillCard text="Tailwind" icon={icoTailwind} />
              <SkillCard text="Java" icon={icoJava} />
            
          </div>
        </div>
      </div>

      <div className="container" id="contact">
        <div className="flex flex-col justify-center items-center mb-2">
          <p className="text-4xl font-bold ">Contacto:</p>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          <ButtonContact icon={icoLinkedin} url="https://www.linkedin.com/in/andy-mota-moreno/" />
          <ButtonContact icon={icoWhatsapp} url="https://wa.me/529511621262"/>
          <ButtonContact  icon={icoGmail} url="mailto:andy.mota.moreno@gmail.com"/>
          <ButtonContact  icon={iconGithub} url="https://github.com/antrick"/>
        </div>

      </div>
      <ScrollToTopButton />
    </main>
  );
};

export default MainContent;
