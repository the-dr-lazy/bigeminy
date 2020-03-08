import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import * as Store from './store'

export function Reset() {
  const [text, setText] = useState('0')
  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value),
    [setText]
  )

  const dispatch = useDispatch()
  return (
    <div>
      <input
        type="number"
        min="0"
        onChange={onInputChange}
        value={text}
      ></input>
      <button onClick={() => dispatch(Store.Counter.reset(parseInt(text)))}>
        Reset
      </button>
    </div>
  )
}
