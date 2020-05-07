import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// redux stuff
//store - stores data, think of state
//reducer - function that used to update store
// two arguments - state,action
//state - old state/state before update
//action - what hapenned/what update
//return updated or old state
import {createStore} from 'redux';
import reducer from './reducer';
//react redux - provider - wraps app, conect - used in components
import { Provider } from "react-redux";
//dispatch method - send actions to the store
//actions(object) - must have type property - what kind of action
//dont mutate the state - redux built on inmutability copy 

//store
const store = createStore(reducer);




function App() {
  // cart setup
  return (
    <Provider store={store} >
      <Navbar cart={store.getState} />
      <CartContainer  />
    </Provider>
  );
}

export default App;
