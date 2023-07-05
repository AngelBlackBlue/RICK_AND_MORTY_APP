
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import style from './components/FondoHTML/FondoHTML.module.css'
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail/Detail';



function App() {
   
   const [characters, setCharacters] = useState([]);
   const onClose = (id) =>{setCharacters(characters.filter(character => character.id !== Number(id)))}
   const repeatedObject = (id) => { return !!(characters.find(character =>  character.id === Number(id))) }
   const onSearch = (id) => {
      
      if (repeatedObject(id)) { window.alert("Ya existe ese personaje"); return };
      if (!id) { window.alert("!Digite ID!"); return };

    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({data}) => {
         if(data.name) {
            setCharacters((oldChars) => [...oldChars, data])
         } else {
            window.alert("No existe un personaje con ese ID")
         }
      })
      .catch((error) => {
         window.alert("No existe un personaje con ese ID ERROR")
      })

   } 
   
   return (
      <div className='App'>
         <div className={style.fondo}>
            <Nav onSearch={onSearch} />
            <Routes>
               <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/> 
               <Route path='/about' />
               <Route path='/detail/:id' element={<Detail/>} />
            </Routes>  
         </div>
      </div>
   );
}

export default App;
