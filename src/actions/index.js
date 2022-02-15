//Traer las peliculas desde la api
export function plus(){
  console.log('plus')
  return{
    type: 'PLUS' , payload: {}
  }
}

export function less(){
  console.log('less')
  return{
    type: 'LESS' , payload: {}
  }
}