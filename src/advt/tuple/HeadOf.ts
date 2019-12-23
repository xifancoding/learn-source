import { LengthOf } from "./LengthOf";

/**
 * Get the first `T` of `Tuple`
 */
export type HeadOf<Tuple extends any[]> = LengthOf<Tuple> extends 0 ? never : Tuple[0];


// type Test = HeadOf<[1, 2, 3]>;      //1