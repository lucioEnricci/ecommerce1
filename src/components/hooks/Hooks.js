// /*########################################
//                     Importaciones
// ##########################################*/

// //Modulos

// import { useState, useEffect } from 'react';

// //Estilos
// import './Hooks.css';

// //Componentes
// //Core

// /*########################################
//                     Logica
// ##########################################*/

// const Hooks = () => {

//     //Hooks de estado
//     //constructor [estado, Funcion que actualiza el estado] = inicializacion del estado (valor por default del estado)
//     const [count,setCount] = useState(0);
//     //Hooks de efectos
//     //useEffect(funcion(inicio, fin)), variantes



//     useEffect( () => {
//         console.log("Componente iniciando")
//         return () => (
//             console.log("Componente finalizando")
//         )
//     });

//     const add = () => {
//         setCount(count + 1)
//     }

//     const res = () => {
//         setCount(count - 1)
//     }


//     return (
//         <div>

//             <button onClick ={add}>Sumar</button>

//             <p>{count}</p>

//             <button onClick ={res}>Restar</button>

//         </div>
// )
// };

// /*########################################
//                     Exportaciones
// ##########################################*/

// export default Hooks;