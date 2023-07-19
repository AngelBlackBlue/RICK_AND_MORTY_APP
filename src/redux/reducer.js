import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-type";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

export const reducer = (state=initialState, {type, payload}) => { 
    switch (type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.myFavorites, payload],   
                allCharacters:[...state.allCharacters, payload],
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites : state.myFavorites.filter(fav=> fav.id != payload)
            }   
        case FILTER:
            return{
                ...state,
                myFavorites : state.allCharacters.filter(Character=> Character.gender == payload)
            }
        case ORDER:
            let orden = state.allCharacters;
            if(payload === "A"){ orden = orden.sort((a, b) => a.id - b.id);};
            if(payload === "D"){ orden = orden.sort((a, b) => b.id - a.id);};             
            return{
                ...state,
                myFavorites: orden               
            } 
        default:
            return {...state}
    }

}


export default reducer;


