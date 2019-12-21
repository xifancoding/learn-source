







// 1.处理 advanced type， 完成 advanced type markdown， 并以curry和compose为例子 （index里的curry 有问题）
// 3.继续fn markdown， 以promise为例




class Container<T> {
    //value
    public get value(): T {
        return this._value;
    }
    protected _value: T;

    //constructor
    public constructor(value: T) {
        this._value = value;
    }

    //map functor
    public map<U>(fn: (value: T) => U) {
        return new Container(fn(this.value));
    }
}


type PromiseExecutor<T> = (resolve: (value: T) => void, reject?: (reason?: any) => void) => void;

//SimplePromise
class SimplePromise<T> extends Container<T> {

    private _callBack: () => any;

    //constructor
    constructor(executor: PromiseExecutor<T>) {
        super(undefined);
        executor(val => {
            this._value = val;
            this._callBack && this._callBack();
        })
    }

    public map<U>(fn: (val: T) => U) {
        return new SimplePromise<U>(resolve => {
            this._callBack = () => resolve(fn(this._value))
        });
    }
}

export function testFn() {
    return;

    const lg = <T>(val: T, flag: boolean = true) => {
        console.log(val, flag ? "xxxxxxxxxxxxxxxx" : "@@@@@@@@@@@@@@@");
        return val;
    }

    const sp = new SimplePromise<number>(
        resolve => {
            let i = 10000;
            setInterval(() => {
                console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

                resolve(i++)
            }, 2000);
        }
    );

    sp.map(val => lg(val.toString()))
        .map(val => lg([val]))
        .map(val => lg(val.length))

    sp.map(val => lg(val.toString(), false))
        .map(val => lg([val], false))
        .map(val => lg(val.length, false))

}


class PJust<T> extends Container<T> {
    //callbacks
    private readonly _callbacks: Array<() => any> = [];

    //constructor
    public constructor(executor: PromiseExecutor<T>) {
        super(undefined);
        const resolve = (value: T) => {
            this._value = value;
            this._callbacks.forEach(cb => cb());
        };
        executor(resolve);
    }

    public map<U>(fn: (val: T) => U) {
        return new PJust<U>(resolve => {
            this._callbacks.push(() => resolve(fn(this.value)));
        });
    }

}

