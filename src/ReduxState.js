
import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Action
const incrementAction = () => {
  console.log("Action: INCREMENT");
  return {
    type: 'INCREMENT'
  };
};

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  console.log("Reducer received action: ", action);
  switch (action.type) {
    case 'INCREMENT':
      console.log("Reducer: Incrementing count");
      return { count: state.count + 1 };
    default:
      return state;
  }
};

// old syntax:
// const store = createStore(counterReducer,middleware);

// Create store
const store = configureStore({
    reducer:counterReducer
    // middleware:saga/thunk
});

const Counter = () => {
  const count = useSelector((state) => state.count); // Get state from store
  const dispatch = useDispatch(); // Function to dispatch actions

  console.log("Component rendering with count:", count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
    </div>
  );
};

export {Counter, store};