// import React, { useState } from 'react';
// import './sidebar.css';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggleSubMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="sidebar">
//       <ul>
//         <li>
//           <a href="#">Filtros</a>
//           <ul className={`sub-menu ${isOpen ? 'open' : ''}`}>
//             <li><a href="#">cores</a></li>
//             <li><a href="#">tamanhos</a></li>
//             <li><a href="#">categorias</a></li>
//           </ul>
//           <button className="toggle-button" onClick={handleToggleSubMenu}>
//             {isOpen ? '-' : '+'}
//           </button>
//         </li>
//         <li>
//           <a href="#">Sobre</a>
//         </li>
//         <li>
//           <a href="#">Contato</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
