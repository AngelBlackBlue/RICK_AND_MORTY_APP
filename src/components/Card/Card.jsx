import style from './Card.module.css';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.divContainer}>
         <button onClick={()=>{onClose(id)}} className={style.Button}>X</button>
         <img src={image} alt='' className={style.imagen}/>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
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
