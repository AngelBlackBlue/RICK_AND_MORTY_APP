import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import style from './components/FondoHTML/FondoHTML.module.css'
import { useState } from 'react';
import axios from 'axios';

// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };

function App() {
   const [characters, setCharacters] = useState([]);
   // const onSearch = ()=> {setCharacters([...characters, example])};
   
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{
      const charactersFilter = characters.filter(character => character.id !== Number(id));
      setCharacters(charactersFilter)
   }

   return (
      <div className='App'>
         <div className={style.fondo}>
            <Nav onSearch={onSearch} />
            <Cards characters={characters} onClose={onClose}/>
         </div>
      </div>
   );
}

export default App;
