import style from './SearchBar.module.css'
// import {useState} from 'react'

export default function SearchBar({onSearch}) {
   // const [id, setId] = useState('');
   // const handleChange = (event) => {setId(event.target.value) }
   return (
      <div>
         <input type='search' className={style.input} />
         <button onClick={onSearch} className={style.myButton}>Agregar</button>
      </div>
   );
}


// import style from './SearchBar.module.css'

// export default function SearchBar({onSearch}) {
//    return (
//       <div className={style.nav}>
//          <input type='search' className={style.input}/>
//          <button onClick={onSearch} className={style.myButton}>Agregar</button>
//       </div>
//    );
// }