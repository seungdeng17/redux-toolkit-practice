import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as counterActions from '../store/modules/counter';
import type { NextPage } from 'next';
import Head from 'next/head';

const Counter: NextPage = () => {
  const dispatch = useDispatch();

  const value = useSelector(({ counter }) => counter.value);

  const plus = useCallback(
    ({ value }) => {
      dispatch(counterActions.increment({ value }));
    },
    [dispatch]
  );

  const minus = useCallback(
    ({ value }) => {
      dispatch(counterActions.decrement({ value }));
    },
    [dispatch]
  );

  return (
    <div>
      <Head>
        <title>Create Next App - Counter</title>
      </Head>

      <div>
        <h1>Counter</h1>
        <button onClick={() => minus({ value })}>-</button> <span>{value}</span>
        <button onClick={() => plus({ value })}>+</button>
      </div>
    </div>
  );
};

export default Counter;
