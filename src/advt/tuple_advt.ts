//length of Tuple <T>
export type LengthOf<T extends any[]> = T["length"];

//is mutiple tuple of <T>;      (T["lenght"] > 1)
export type MultiOf<T extends any[]> = LengthOf<T> extends 0 ? false : (LengthOf<T> extends 1 ? false : true);



//head type of Tuple <T>
export type HeadOf<T extends any[]> = T extends [infer U, ...any[]] ? U : never;

//shift head type of Tuple <T>
export type ShiftOf<T extends any[]> = ((...args: T) => any) extends ((_: any, ...tails: infer P) => any) ? P : never;

//unshift tuple
export type UnshiftOf<T extends any[], U> = ((_: U, ...args: T) => any) extends ((...args: infer P) => any) ? P : never;


//reverse Tuple <T>;
export type ReverseOf<T extends any[]> = _ReverseOf<T>;
type _ReverseOf<T extends any[], U extends any[] = [], N extends number = LengthOf<T>> = {
    0: _ReverseOf<ShiftOf<T>, UnshiftOf<U, HeadOf<T>>, N>;
    1: U;
}[LengthOf<U> extends N ? 1 : 0];



type TTT<T> = T extends Array<infer R> ? R : T;

type Flp<T> = T extends [infer A, infer B] ? [B, A] : never;

type D = Record<0, [1, 2, 3]>;


//last type of Tuple <T>;
export type LastOf<T extends any[]> = ReverseOf<T> extends (infer U)
    ? HeadOf<U extends any[] ? U : []>
    : never;

//pop last type of Tuple <T>;
export type PopOf<T extends any[]> = ReverseOf<T> extends (infer U)
    ? (U extends any[]
        ? ReverseOf<ShiftOf<U>>
        : never)
    : never;

//push type 
export type PushOf<T extends any[], U> = {

};





// export type PushOf<T extends any[], U> = [U, ...T] extends infer R ? R : never;

// type P1 = PushOf<[1, 3], true>;


// //slice tuple from Start to End
// type _SliceOf<T extends any[], Start extends number, End extends number = LengthOf<T>, U extends any[] = []> = {
//     0: _SliceOf<ShiftOf<T>, Start, End, UnshiftOf<U, any>>;
//     1: T;
// }[
//     LengthOf<U> extends Start ? 1 : 0
// ];

// //slice tuple from Start to End
// export type SliceOf<T extends any[], Start extends number, End extends number = LengthOf<T>> = _SliceOf<T, Start, End>;

// type D1 = SliceOf<[boolean, true, boolean, string], 1>



// type H = LastOf<[1]>;



// export type PopOf<T extends any[], U extends any[] = []> = {
//     0: PopOf<ShiftOf<T>, UnshiftOf<U, HeadOf<T>>>;
//     1: U;
// }[
//     LengthOf<T> extends 1 ? 1 : 0
// ];