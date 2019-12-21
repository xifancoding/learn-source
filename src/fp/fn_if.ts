
type ParamType = () => void;
export const truue = (thn: ParamType) => (els: ParamType) => thn();
export const fallse = (thn: ParamType) => (els: ParamType) => els();
export type booolean = typeof truue | typeof fallse;
export const iff = (cond: booolean) => cond;


export const test_if = () => {
    const test = (flag: booolean, desc: string) => {
        iff(flag)(() => {
            console.log("truuuuuuuuuuuuuuuuuuuuuuuuuuuue", desc);
        })(() => {
            console.log("fallllllllllllllllllllllllllse", desc);
        });
    };

    test(truue, "111111");
    test(fallse, "222222");
};



