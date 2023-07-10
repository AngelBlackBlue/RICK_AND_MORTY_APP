import style from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.divContainer}>
         <button onClick={()=>{onClose(id)}} className={style.Button}>X</button>
         <div>
            <img src={image} alt='' className={style.imagen}/>
         </div>
         <div className={style.nameDiv}>
           <Link to={`/detail/${id}`} > <h2>{name}</h2> </Link>
         </div>
      
      </div>
   );
}

// export default function Card(props) {
//    return (
//       <div>
//          <button onClick={props.onClose}>X</button>
//          <h2>{props.name}</h2>
//          <h2>{props.status}</h2>
//          <h2>{props.species}</h2>
//          <h2>{props.gender}</h2>
//          <h2>{props.origin}</h2>
//          <img src={props.image} alt='' />
//       </div>
//    );
// }
