import { connect } from "react-redux"
import Card from "../Card/Card";
import style from '../Cards/Cards.module.css'


const Favorites = ({myFavorites}) => { 

    return(

         <div className={style.div}>
            {
              myFavorites?.map(({id, name, image}) => {
                return (
                   <Card 
                       key={id}
                       id={id}
                       name={name}
                       image={image}
                    />
                )
             }
             
          )
            }
         </div>
    );

};

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites,
    }

};



export default connect(mapStateToProps, null)(Favorites)