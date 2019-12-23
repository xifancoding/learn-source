import { ShiftOf } from "./ShiftOf_UnshiftOf";
import { ReverseOf } from "./ReverseOf";
import { ConactOf } from "./ConactOf";

/**
 * pop the last `T` of Tuple
*/
export type PopOf<Tuple extends any[]> = ReverseOf<ShiftOf<ReverseOf<Tuple>>>;

/**
 * append the last `T` of Tuple
*/
export type PushOf<T, Tuple extends any[]> = ConactOf<Tuple, [T]>;






// type Test = PopOf<[1, 2, 3]>;   //[1, 2]
// type Test1 = PushOf<4, [1, 2, 3]>;   //[1, 2, 3, 4]