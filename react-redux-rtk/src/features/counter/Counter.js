import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    // <div>
    //   <h3>Counter</h3>
    //   <p >{count}</p>
    //   <button onClick={() => dispatch(increment())}>+</button>
    //   <button onClick={() => dispatch(decrement())}>-</button>
    // </div>
    <div>

      <h3 className="title">Counter</h3>
      <p className="counter">{count}</p>
      <button className="counter-button" onClick={() => dispatch(increment())} >+</button>
      <button className="counter-button" onClick={() => dispatch(decrement())} >-</button>

    </div>
  );
}
