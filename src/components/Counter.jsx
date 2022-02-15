import React ,{ Component } from 'react';
//Importar store
import store from '../store/index';
//Importar el connect
import {connect} from 'react-redux';
//Importar las actions que usaremos en este componente
import{ plus , less } from '../actions/index';

export class Counter extends Component{

  add(){
    this.props.plus();
  }

  less(){
    //Ejecutar la action action
    this.props.less();
  }

  render(){
    return(
      <div>
        <h1>{this.props.count}</h1>

        {/*Botones que aplicaran funcionalidades*/}
        <button onClick={() => this.add()}>Add</button><br />
        <button onClick={() => this.less()}>Less</button><br />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    //Asi es como queremos recibir los elementos del store
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //Las funcionalidades que este componente aplicaran al store
    plus: () => dispatch(plus()),
    less: () => dispatch(less())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
