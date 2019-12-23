import { ShiftOf, UnshiftOf } from "./ShiftOf_UnshiftOf";
import { HeadOf } from "./HeadOf";
import { LengthOf } from "./LengthOf";
import { Cast } from "../common/Cast";


/**
 * Reverse the Tuple, Return [...Reverse(Tuple), ...Tails]
*/
type _ReverseOf<Tuple extends any[], Tails extends any[] = []> = {
    0: _ReverseOf<ShiftOf<Tuple>, UnshiftOf<HeadOf<Tuple>, Tails>>;
    1: Tails
}[LengthOf<Tuple> extends 0 ? 1 : 0];

/**
 * Reverse the Tuple, Return [...Reverse(Tuple), ...Tails]
 */
export type ReverseOf<Tuple extends any[], Tails extends any[] = []> = _ReverseOf<Tuple, Tails> extends infer R ? Cast<R, any[]> : never;



// type Test = ReverseOf<[1, 2, 3]>;  //[3, 2, 1]
// type Test2 = ReverseOf<[1, 2, 3], [4, 5]>;  //[3, 2, 1, 4, 5]
