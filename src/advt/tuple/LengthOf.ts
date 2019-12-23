/**
 * Get length of Tuple
 */
export type LengthOf<Tuple extends any[]> = Tuple["length"];


// type Test = LengthOf<[1, 2, 3, true, false]>;   //5