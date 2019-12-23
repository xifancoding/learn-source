
/**
 * Shift the first `T` of Tuple
*/
export type ShiftOf<Tuple extends any[]> = ((...args: Tuple) => void) extends ((head: any, ...tails: infer R) => void) ? R : never;

/**
 * Unshift `T` into the Tuple at first position
*/
export type UnshiftOf<T, Tuple extends any[]> = ((_: T, ...tails: Tuple) => void) extends ((...args: infer R) => void) ? R : never;



// type Test = ShiftOf<[1, 2, 3]>; //[2, 3]
// type Test1 = UnshiftOf<1, [2, 3]>;  //[1, 2, 3]
