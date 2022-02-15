//Importar las actions
import { plus , less } from "../actions/index";

//InitialState contiene las mismas propiedades que el store
const initialState = {
  count: 0
};

function rootReducer(state = initialState, action) {

  //Verifaceremos segun el type cada una de las actions
  switch(action.type){
    case 'PLUS':{
      //Cambiamos las propiedades del stado
      return{
        ...state,
        count: (state.count + 1)
      }
    }break;
    case 'LESS':{
      return{
        ...state,
        count: (state.count - 1)
      }
    }break;
    default: {
      return state;
    }
  }
  
  
}

export default rootReducer;