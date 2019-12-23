import { ReverseOf } from "./ReverseOf";

/**
 * Return Tuple that conact Items, [...Tuple, ...Items]
 */
export type ConactOf<Tuple extends any[], Items extends any[]> = ReverseOf<ReverseOf<Tuple>, Items>;


// type Test = ConactOf<[1, 2, 3], [4, 5]>;    //[1, 2, 3, 4, 5]
