// module Bigeminy.Store.Counter, generated by purescript-tsd-gen 0.3.0.0
import * as Bigeminy_Redux from "../Bigeminy.Redux";
export type /*data*/ Action = { "$$pursType": "Bigeminy.Store.Counter.Action"; "$$pursTag": "Increment"; "$$abstractMarker": never } | { "$$pursType": "Bigeminy.Store.Counter.Action"; "$$pursTag": "Decrement"; "$$abstractMarker": never } | { "$$pursType": "Bigeminy.Store.Counter.Action"; "$$pursTag": "Reset"; "$$abstractMarker": never };
export const increment: Bigeminy_Redux.Action< Action >;
export const decrement: Bigeminy_Redux.Action< Action >;
export const reset: (_: number) => Bigeminy_Redux.Action< Action >;
export const reducer: Bigeminy_Redux.Reducer< Action, number >;
export {};
