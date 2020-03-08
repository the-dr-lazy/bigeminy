import * as Redux from 'redux'

import Counter from '../output/Bigeminy.Store.Counter/index'

export { Counter }

const reducer = Counter.reducer

export function createStore() {
  return Redux.createStore(reducer)
}

// This is `id` in fact
export function getState(state: number) {
  return state
}
