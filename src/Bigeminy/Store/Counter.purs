module Bigeminy.Store.Counter (Action, increment, decrement, reset, reducer) where
  
import Prelude
import Bigeminy.Redux as Redux

type State = Int

data Action = Increment
            | Decrement
            | Reset Int

increment :: Redux.Action Action
increment = Redux.mkAction Increment

decrement :: Redux.Action Action
decrement = Redux.mkAction Decrement

reset :: Int -> Redux.Action Action
reset x = Redux.mkAction $ Reset x

initialState :: State
initialState = 0

reducer' :: Action -> State -> State
reducer' Increment = (_ + 1)
reducer' Decrement = (_ - 1)
reducer' (Reset x) = const x

reducer :: Redux.Reducer Action State
reducer = Redux.mkReducer reducer' initialState 
