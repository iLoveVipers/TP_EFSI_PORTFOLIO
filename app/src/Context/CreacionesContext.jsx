import React from 'react';

export const CreacionesContext = React.createContext();

const CreacionesProvider = (props) => {
    const [creaciones, setCreaciones] = React.useState([{
        id: 1,
        nombre: 'Acuario',
        descripcion: 'Desarrollo de una pagina para una Acuario donde se podria tener una vista previa y reservar turnos mediante la web.',
        leguaje: 'C#',
        fecha: 'Fines de 2022',
        respositorio: 'https://github.com/iLoveVipers/tp_09',
        imagen: null
      },
      {
        id: 2,
        nombre: 'Reciclaje plus',
        descripcion: 'Una pagina que busca concientizar sobre la distribucion de los residuos de manera responsable.',
        leguaje: 'JS',
        fecha: 'Septiembre 2023',
        respositorio: 'https://github.com/MatheoYaco240/TP09--EFSI',
        imagen: null
      },
      {
        id: 3,
        nombre: 'Challenge React Native',
        descripcion: 'Consigna de la pagina alkemy, consiste en extraer la data de una API y mostrarla en un servicio de menu.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/soficacharo/DAIChallenge',
        imagen: null
      },
      {
        id: 4,
        nombre: 'Citas',
        descripcion: 'Iniciacion a React Native.',
        leguaje: 'JS',
        fecha: 'Junio 2023',
        respositorio: 'https://github.com/iLoveVipers/EFSI_CITAS_GUYCACHARO',
        imagen: null
      },
      {
        id: 5,
        nombre: 'Personajes y Pelis',
        descripcion: 'Servicios de una API que recolecta y recopila datos sobre personajes y peliculas y los muestra mediante llamadas al servicio de la API',
        leguaje: 'JS',
        fecha: 'Junio 2023',
        respositorio: 'https://github.com/iLoveVipers/TP_DAI_Personajes/tree/main/src/service',
        imagen: null
      },
      {
        id: 6,
        nombre: 'Portfolio',
        descripcion: 'Esta página.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/iLoveVipers/TP_EFSI_PORTFOLIO',
        imagen: null
      },
      {
        id: 7,
        nombre: 'Lista de Tareas',
        descripcion: 'Lista de tareas que permita agregar y mostrar tareas, permite marcarlas como resueltas y borrarlas.',
        leguaje: 'JS',
        fecha: 'Agosto 2023',
        respositorio: 'https://github.com/iLoveVipers/TP_RN/blob/main/App.js',
        imagen: null
      },{
        id: 8,
        nombre: 'Acuario',
        descripcion: 'Desarrollo de una pagina para una Acuario donde se podria tener una vista previa y reservar turnos mediante la web.',
        leguaje: 'C#',
        fecha: 'Fines de 2022',
        respositorio: 'https://github.com/iLoveVipers/tp_09',
        imagen: null
      },
      {
        id: 9,
        nombre: 'Reciclaje plus',
        descripcion: 'Una pagina que busca concientizar sobre la distribucion de los residuos de manera responsable.',
        leguaje: 'JS',
        fecha: 'Septiembre 2023',
        respositorio: 'https://github.com/MatheoYaco240/TP09--EFSI',
        imagen: null
      },
      {
        id: 10,
        nombre: 'Challenge React Native',
        descripcion: 'Consigna de la pagina alkemy, consiste en extraer la data de una API y mostrarla en un servicio de menu.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/soficacharo/DAIChallenge',
        imagen: null
      },
      {
        id: 11,
        nombre: 'Citas',
        descripcion: 'Iniciacion a React Native.',
        leguaje: 'JS',
        fecha: 'Junio 2023',
        respositorio: 'https://github.com/iLoveVipers/EFSI_CITAS_GUYCACHARO',
        imagen: null
      },
      {
        id: 12,
        nombre: 'Personajes y Pelis',
        descripcion: 'Servicios de una API que recolecta y recopila datos sobre personajes y peliculas y los muestra mediante llamadas al servicio de la API',
        leguaje: 'JS',
        fecha: 'Junio 2023',
        respositorio: 'https://github.com/iLoveVipers/TP_DAI_Personajes/tree/main/src/service',
        imagen: null
      },
      {
        id: 13,
        nombre: 'Portfolio',
        descripcion: 'Esta página.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/iLoveVipers/TP_EFSI_PORTFOLIO',
        imagen: null
      },
      {
        id: 14,
        nombre: 'Lista de Tareas',
        descripcion: 'Lista de tareas que permita agregar y mostrar tareas, permite marcarlas como resueltas y borrarlas.',
        leguaje: 'JS',
        fecha: 'Agosto 2023',
        respositorio: 'https://github.com/iLoveVipers/TP_RN/blob/main/App.js',
        imagen: null
      },
      {
        id: 15,
        nombre: 'Acuario',
        descripcion: 'Desarrollo de una pagina para una Acuario donde se podria tener una vista previa y reservar turnos mediante la web.',
        leguaje: 'C#',
        fecha: 'Fines de 2022',
        respositorio: 'https://github.com/iLoveVipers/tp_09',
        imagen: null
      },
      {
        id: 16,
        nombre: 'Reciclaje plus',
        descripcion: 'Una pagina que busca concientizar sobre la distribucion de los residuos de manera responsable.',
        leguaje: 'JS',
        fecha: 'Septiembre 2023',
        respositorio: 'https://github.com/MatheoYaco240/TP09--EFSI',
        imagen: null
      },
      {
        id: 17,
        nombre: 'Challenge React Native',
        descripcion: 'Consigna de la pagina alkemy, consiste en extraer la data de una API y mostrarla en un servicio de menu.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/soficacharo/DAIChallenge',
        imagen: null
      },
      {
        id: 18,
        nombre: 'Citas',
        descripcion: 'Iniciacion a React Native.',
        leguaje: 'JS',
        fecha: 'Junio 2023',
        respositorio: 'https://github.com/iLoveVipers/EFSI_CITAS_GUYCACHARO',
        imagen: null
      },
      {
        id: 19,
        nombre: 'Personajes y Pelis',
        descripcion: 'Servicios de una API que recolecta y recopila datos sobre personajes y peliculas y los muestra mediante llamadas al servicio de la API',
        leguaje: 'JS',
        fecha: 'Junio 2023',
        respositorio: 'https://github.com/iLoveVipers/TP_DAI_Personajes/tree/main/src/service',
        imagen: null
      },
      {
        id: 20,
        nombre: 'Portfolio',
        descripcion: 'Esta página.',
        leguaje: 'JS',
        fecha: 'Octubre 2023',
        respositorio: 'https://github.com/iLoveVipers/TP_EFSI_PORTFOLIO',
        imagen: null
      },
      {
        id: 21,
        nombre: 'Lista de Tareas',
        descripcion: 'Lista de tareas que permita agregar y mostrar tareas, permite marcarlas como resueltas y borrarlas.',
        leguaje: 'JS',
        fecha: 'Agosto 2023',
        respositorio: 'https://github.com/iLoveVipers/TP_RN/blob/main/App.js',
        imagen: null
      },
    ])

    return <CreacionesContext.Provider value={{creaciones, setCreaciones}}>{props.children}</CreacionesContext.Provider>
}

export default CreacionesProvider;