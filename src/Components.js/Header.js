
import React, { useEffect, useState } from 'react'
import '../styles.css';
import { useTheme } from '../hooks/useTheme';

const Header = () => {

    const {darkMode,setDarkMode} = useTheme();
    // const [menuOpen, setMenuOpen] = useState(false);

    const handleChangeTheme = () => {
        setDarkMode(!darkMode);
    }

    // const toggleMenu = () => {
    //   setMenuOpen(!menuOpen);
    // };

    useEffect(() => {
      var htmlElement = document.querySelector('html');
        if(darkMode){
             htmlElement.classList.add('dark');
        }else{
             htmlElement.classList.remove('dark');
        }
    }, [darkMode])

    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='py-6 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 dark:bg-custom-dark '>

      <nav class="relative px-4 py-2 flex justify-between items-center rounded dark:bg-custom-dark border-b-2 dark:border-gray-600 w-full">
          {/* <h1 className="text-3xl ">{'{'} A.M. {'}'}</h1> */}
          <h1 className="text-3xl ">{'{ '}A.M. {'}'}</h1>


          <div className="ml-auto lg:flex lg:items-center hidden sm:flex">
            {/* <a href="" className=" block px-2 py-1 dark:text-white font-semibold rounded-xl hover:text-blue-900 dark:hover:text-hover-blue">Sobre mí</a> */}
            <a href="#experience" className=" mt-1 block px-2 py-1 dark:text-white font-semibold rounded-xl dark:hover:text-hover-blue sm:mt-0 sm:ml-2">Experiencia</a>
            <a href="#skills" className=" mt-1 block px-2 py-1 dark:text-white font-semibold rounded-xl dark:hover:text-hover-blue sm:mt-0 sm:ml-2">Contacto</a>
          </div>


        <div className='sm:hidden ml-auto'>

        <button onClick={() => setIsOpen(!isOpen)}  class="navbar-burger flex items-center  dark:text-white p-1" id="navbar_burger">
                <svg class="block h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Hamberger menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
        </button>
        
        </div>

        <button onClick={handleChangeTheme} className="block px-2 py-1 dark:text-white font-semibold rounded">
          <span className="material-symbols-outlined">
            {darkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

      </nav>

      <div class={`navbar-menu relative z-50 ${isOpen ? '' : 'hidden'}`}>
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50"></div>
        <nav class="fixed bg-white dark:bg-gray-600 top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">

            <div class="flex items-center mb-8">
                <a class="mr-auto text-2xl font-bold text-black text-violet-600 dark:text-gray-100"
                    href="https://tailwindflex.com/">
                    {'{'} A.M. {'}'}
                </a>

                <button className="navbar-close" onClick={() => setIsOpen(!isOpen)}>
                        <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                </button>
            </div>

            <div class=" relative mx-auto text-gray-600">
                

             

            </div>

        </nav>

      </div>

    </header>
  )
}

export default Header;