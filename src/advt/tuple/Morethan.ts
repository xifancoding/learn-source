
/**
 * more than 1 items
*/
export type Morethan1<Tuple extends any[]> = Tuple extends [] | [any] ? false : true;