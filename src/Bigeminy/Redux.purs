module Bigeminy.Redux where

import Prelude
import Data.Maybe
import Data.Nullable (Nullable, toMaybe)
import Data.Function.Uncurried (Fn2, mkFn2)

newtype Action action = Action { type :: String
                               , purs :: action
                               }

newtype Reducer action state = Reducer (Fn2 (Nullable state) (Action action) state)

foreign import mkAction :: ∀ action r. action -> Action action

mkReducer :: ∀ action state. (action -> state -> state) -> state -> Reducer action state
mkReducer reducer initialState = Reducer <<< mkFn2 $
  \state (Action action) ->
    case (toMaybe state) of
      Nothing  -> initialState
      (Just x) -> reducer action.purs x

