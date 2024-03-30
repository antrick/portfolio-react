import imgScreenLoginMindcan from "../assets/mindcan-login.webp"
import imgScreenProgram from "../assets/program.png"
import imgScreenLoginCmr from "../assets/screen-login-cmr.jpeg"
import imgLaravel from "../assets/icon-laravel.png"
import imgFlutter from "../assets/icon-flutter.png"
import iconBootstrap from '../assets/icon-bootstrap.png';
import iconJs from '../assets/icon-js.png';
import iconJquery from '../assets/icon-jquery.png';
import icoReact from "../assets/react.png"

import imgCmr1 from "../assets/screen-menu-cmr.jpeg";
import imgCmr2 from "../assets/screen1-cmr.jpeg";
import imgCmr3 from "../assets/screen2-cmr.jpeg";
import imgCmr4 from "../assets/screen3-cmr.jpeg";

import imgProgramApp1 from "../assets/programApp1.webp"
import imgProgramApp2 from "../assets/programApp2.webp"
import imgProgramApp3 from "../assets/programApp3.webp"

import imgProgram1 from "../assets/program1.png"
import imgProgram2 from "../assets/program2.png"
import imgProgram3 from "../assets/program3.png"

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

  const imgDetailsCmr = [
    {id: 1, img: imgCmr1, name: 'cmr1'},
    {id: 2, img: imgCmr2, name: 'cmr2'},
    {id: 3, img: imgCmr3, name: 'cmr3'},
    {id: 4, img: imgCmr4, name: 'cmr4'}
  ]

  const imgDetailsProgramApp = [
    {id: 1, img: imgScreenLoginMindcan, name: 'programApp1'},
    {id: 2, img: imgProgramApp1, name: 'programApp2'},
    {id: 3, img: imgProgramApp2, name: 'programApp3'},
    {id: 4, img: imgProgramApp3, name: 'programApp4'}
  ]

  const imgDetailsProgram = [
    {id: 1, img: imgScreenProgram, name: 'program1'},
    {id: 2, img: imgProgram1, name: 'program2'},
    {id: 3, img: imgProgram2, name: 'program3'},
    {id: 4, img: imgProgram3, name: 'program4'}
  ]

  const detailsErpProgram = [
    {
        detail: `Desarrolle un modulo (backend y frontend) para el seguimiento (rastreo) de detalles puntuales de un proyecto, con la capacidad de agregar campos personalizados (texto, numerico, fecha, archivo, selectores con opciones personalizables y campos con la capacidad de vincular con un registro o tabla dentro del sistema).
         Todo esto dentro de una tabla dinamica con la finalidad de que usuario pueda llevar un control de ciertos proyectos.`,
    },
    {
        detail: `Participe en la implementacion de tablas con la biblioteca DHTMLX utilizando Treegrid puntualmente en las pantallas de registros almacenados.`,
    },
    {
        detail: `Realice modificaciones dentro de un modulo donde se encontraba implementado el Gantt de la biblioteca DHTMLX.`,
    },
    {
        detail: `Modificaciones en el Dashboard con secciones ToDo y tablas de registros con filtros por fecha y prioridad.`,
    },
    {
        detail: `Agregue otras funcionalidades como: recuperacion de contraseña en dos pasos (con token de confirmacion), modulo para envio correos personalizados a usuarios del sistema con el editor Trumbowyg.`,
    }
];

const detailsProgramApp = [
    {
        detail: `Se agregan nuevos campos, etiquetas y funcionalidades menores a pantallas de la Aplicación`,
    },
    {
        detail: `Se desarrollo una funcionalidad para validar y conectar dinamicamente a un endpoint al leer un codigo QR que contiene una licencia`,
    },
    {
        detail: `Se agregan nuevos componentes para nuevas secciones en pantallas`,
    },
    {
        detail: `Se Agregan nuevos endpoints en las API del sistema`,
    },
    {
        detail: `Modificaciones de endpoints en las API del sistema`,
    }
];

const detailsCmrApp = [
    {
        detail: `Se crean nuevas pantallas (botones, campos y etiquetas) para la primera version de la aplicacion, se agregan formularios necesarios y funcionalidades`,
    },
    {
        detail: `Se crean nuevos endpoints en la API del sistema`,
    },
    {
        detail: `Modificaciones de endpoints en las API del sistema`,
    }
];


export const projects = [
    {
        id: 1,
        title: "System Program +",
        imgProject: imgScreenProgram,
        txtAltImage: "program +",
        url: "https://www.mindcaninc.com/program/",
        tools: toolsSystemProgram,
        description: "Sistema ERP con modulos desarrollados a medida",
        details: detailsErpProgram,
        imgsDetails: imgDetailsProgram
    },
    {
        id: 2,
        title: "Program + App",
        imgProject: imgScreenLoginMindcan,
        txtAltImage: "app program",
        url: "https://play.google.com/store/apps/details?id=com.pmpgomobile&pcampaignid=web_share",
        tools: toolsProgramApp,
        description: "Aplicación móvil para seguimiento y actualizacion procesos",
        details: detailsProgramApp,
        imgsDetails: imgDetailsProgramApp
    },
    {
        id: 3,
        title: "CMR App",
        imgProject: imgScreenLoginCmr,
        txtAltImage: "app cmr",
        url: "#",
        tools: toolsCmrApp,
        description: "Aplicación móvil para seguimiento procesos de clientes",
        details: detailsCmrApp,
        imgsDetails: imgDetailsCmr
    },
]

