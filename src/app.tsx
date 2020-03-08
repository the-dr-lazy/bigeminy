import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as Store from './store'
import { Reset } from './reset'

export function App() {
  const state = useSelector(Store.getState)
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(Store.Counter.decrement)}>-</button>
      <span>{state}</span>
      <button onClick={() => dispatch(Store.Counter.increment)}>+</button>
      <Reset></Reset>
    </>
  )
}
