import { useState, useEffect } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect( () => {
    async function fetchData(){
      const API = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';
      const data = await (await fetch(API)).json();
      setProducts(data);
    }
    fetchData();
  }, [])

  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }

  const removeFromCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter( item => item.id !== payload)
    })
  }

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    products,
    state
  }
}

export default useInitialState;