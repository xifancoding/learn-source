

//function type
export type FunctionOf<P extends any[], R> = (...args: P) => R;



//return type
export type ReturnOf<T extends Function> = T extends (...args: any) => infer R ? R : never;

//params type
export type ParamsOf<T extends Function> = T extends (...args: infer P) => any ? P : never;



