
/**
 * T extends U ? T : U;
 */
export type Cast<T, U> = T extends U ? T : U;


// type Test1 = Cast<string, number>;  //number
// type Test2 = Cast<true, boolean>;  //true