import { HeadOf } from "./HeadOf";
import { ReverseOf } from "./ReverseOf";


/**
 * Get the last `T` of `Tuple`
 */
export type LastOf<Tuple extends any[]> = HeadOf<ReverseOf<Tuple>>;


// type Test = LastOf<[1, 2, 3]>;  //3