import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'
import {NavLink} from 'react-router-dom';

export default function Nav({onSearch}) {
   return (
      <div className={style.nav} >
         <button className={style.myButton}>
            <NavLink to={'/home'} className={style.navLink} >Home</NavLink>
         </button>
         <button className={style.myButton}>
            <NavLink to={'/about'} className={style.navLink} >About</NavLink>
         </button>
         <button className={style.myButton}>
            <NavLink to={'/'} className={style.navLink} >Log out</NavLink>
         </button>
         <SearchBar onSearch={onSearch}/>
      </div>
   );
}
