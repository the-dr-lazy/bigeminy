// module Data.CommutativeRing, generated by purescript-tsd-gen 0.3.0.0
import * as Data_Ring from "../Data.Ring";
import * as Data_Unit from "../Data.Unit";
export type /*synonym*/ CommutativeRing<a> = { Ring0: (_: {}) => Data_Ring.Ring< a > };
// type CommutativeRingRecord :: Prim.RowList.RowList -> # Type -> # Type -> Type : unsupported kind
export const /*instance*/ commutativeRingInt: CommutativeRing< number >;
export const /*instance*/ commutativeRingNumber: CommutativeRing< number >;
export const /*instance*/ commutativeRingUnit: CommutativeRing< Data_Unit.Unit >;
export const /*instance*/ commutativeRingFn: <a, b>(_: CommutativeRing< b >) => CommutativeRing< (_: a) => b >;
export const /*instance*/ commutativeRingRecord: (_: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Prim"},ProperName {runProperName = "RowList"}])) (ProperName {runProperName = "RowToList"}))) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 28, sourcePosColumn = 49}, spanEnd = SourcePos {sourcePosLine = 28, sourcePosColumn = 52}},[]) "row")) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 28, sourcePosColumn = 53}, spanEnd = SourcePos {sourcePosLine = 28, sourcePosColumn = 57}},[]) "list") */) => (_: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "CommutativeRing"}])) (ProperName {runProperName = "CommutativeRingRecord"}))) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 28, sourcePosColumn = 81}, spanEnd = SourcePos {sourcePosLine = 28, sourcePosColumn = 85}},[]) "list")) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 28, sourcePosColumn = 86}, spanEnd = SourcePos {sourcePosLine = 28, sourcePosColumn = 89}},[]) "row")) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 28, sourcePosColumn = 90}, spanEnd = SourcePos {sourcePosLine = 28, sourcePosColumn = 93}},[]) "row") */) => CommutativeRing< {} >;
export const /*instance*/ commutativeRingRecordNil: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "CommutativeRing"}])) (ProperName {runProperName = "CommutativeRingRecord"}))) (TypeConstructor (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 34, sourcePosColumn = 60}, spanEnd = SourcePos {sourcePosLine = 34, sourcePosColumn = 66}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Prim"},ProperName {runProperName = "RowList"}])) (ProperName {runProperName = "Nil"})))) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 34, sourcePosColumn = 67}, spanEnd = SourcePos {sourcePosLine = 34, sourcePosColumn = 70}},[]) "row")) (REmpty (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 34, sourcePosColumn = 72}, spanEnd = SourcePos {sourcePosLine = 34, sourcePosColumn = 73}},[])) */;
export const /*instance*/ commutativeRingRecordCons: <focus>(_: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "Symbol"}])) (ProperName {runProperName = "IsSymbol"}))) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 37, sourcePosColumn = 19}, spanEnd = SourcePos {sourcePosLine = 37, sourcePosColumn = 22}},[]) "key") */) => (_: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Prim"},ProperName {runProperName = "Row"}])) (ProperName {runProperName = "Cons"}))) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 38, sourcePosColumn = 19}, spanEnd = SourcePos {sourcePosLine = 38, sourcePosColumn = 22}},[]) "key")) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 38, sourcePosColumn = 23}, spanEnd = SourcePos {sourcePosLine = 38, sourcePosColumn = 28}},[]) "focus")) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 38, sourcePosColumn = 29}, spanEnd = SourcePos {sourcePosLine = 38, sourcePosColumn = 39}},[]) "subrowTail")) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 38, sourcePosColumn = 40}, spanEnd = SourcePos {sourcePosLine = 38, sourcePosColumn = 46}},[]) "subrow") */) => (_: any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "CommutativeRing"}])) (ProperName {runProperName = "CommutativeRingRecord"}))) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 39, sourcePosColumn = 32}, spanEnd = SourcePos {sourcePosLine = 39, sourcePosColumn = 43}},[]) "rowlistTail")) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 39, sourcePosColumn = 44}, spanEnd = SourcePos {sourcePosLine = 39, sourcePosColumn = 47}},[]) "row")) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 39, sourcePosColumn = 48}, spanEnd = SourcePos {sourcePosLine = 39, sourcePosColumn = 58}},[]) "subrowTail") */) => (_: CommutativeRing< focus >) => any /* TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeApp (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (TypeConstructor (SourceSpan {spanName = "", spanStart = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}, spanEnd = SourcePos {sourcePosLine = 0, sourcePosColumn = 0}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Data"},ProperName {runProperName = "CommutativeRing"}])) (ProperName {runProperName = "CommutativeRingRecord"}))) (TypeApp (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 42, sourcePosColumn = 31}, spanEnd = SourcePos {sourcePosLine = 42, sourcePosColumn = 60}},[]) (TypeApp (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 42, sourcePosColumn = 31}, spanEnd = SourcePos {sourcePosLine = 42, sourcePosColumn = 48}},[]) (TypeApp (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 42, sourcePosColumn = 31}, spanEnd = SourcePos {sourcePosLine = 42, sourcePosColumn = 42}},[]) (TypeConstructor (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 42, sourcePosColumn = 31}, spanEnd = SourcePos {sourcePosLine = 42, sourcePosColumn = 38}},[]) (Qualified (Just (ModuleName [ProperName {runProperName = "Prim"},ProperName {runProperName = "RowList"}])) (ProperName {runProperName = "Cons"}))) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 42, sourcePosColumn = 39}, spanEnd = SourcePos {sourcePosLine = 42, sourcePosColumn = 42}},[]) "key")) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 42, sourcePosColumn = 43}, spanEnd = SourcePos {sourcePosLine = 42, sourcePosColumn = 48}},[]) "focus")) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 42, sourcePosColumn = 49}, spanEnd = SourcePos {sourcePosLine = 42, sourcePosColumn = 60}},[]) "rowlistTail"))) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 42, sourcePosColumn = 62}, spanEnd = SourcePos {sourcePosLine = 42, sourcePosColumn = 65}},[]) "row")) (TypeVar (SourceSpan {spanName = ".spago/prelude/v4.1.1/src/Data/CommutativeRing.purs", spanStart = SourcePos {sourcePosLine = 42, sourcePosColumn = 66}, spanEnd = SourcePos {sourcePosLine = 42, sourcePosColumn = 72}},[]) "subrow") */;
export {};