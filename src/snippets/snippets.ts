//Snippet
export type Snippet = {
    body: Array<string | Snippet>;
};

//create Snippet
export const create = (...body: Snippet["body"]): Snippet => ({ body });

//affix class and namespace
export const affix = (body: Snippet, className: string, nsName?: string) => {
    const classBody = affixClass(body, className)
    return nsName ? affixNamespace(classBody, nsName) : classBody;
}

//affix class
export const affixClass = (body: Snippet, name: string) => create(
    `class ${name} {`,
    body,
    `}`
);

//affix namespace
export const affixNamespace = (body: Snippet, name: string) => create(
    `namespace ${name} {`,
    body,
    `}`
);

//output
export const output = (snpt: Snippet, tab: string = "") => {
    const childTab = `${tab}\t`;
    const code = snpt.body.reduce((prev, currt) => {
        if(typeof currt === "string") {
            return `${prev}\n${tab}${currt}`
        }
        return `${prev}${output(currt, childTab)}`;
    }, "");
    return code;
};


/**
 * @description linefeed format
 * @author xfy
 * @param {string} code
 * @returns {string}  linefeed code
 */
export const linefeed = (code: string) => code.replace(/(?<=[\{|\}|;])|(?=\})/gm, "\n");

/**
 * @description indent
 * @author xfy
 * @param {string} code
 * @returns {string}  tab code
 */
export const indent = (code: string) => {

};

//inner brace regexp
export const RegExpInnerBrace = /\{[^\{|\}]*\}/gm

//outter brace regexp
export const RegExpOutterBrace = /\{[^]*\}/gm




// a(?=b) 匹配后面有 b 的 a。
// a(?!b) 匹配后面没有 b 的 a。
// (?<= a) b 匹配前面有 a 的 b。
// (? <!a) b 匹配前面没有 a 的 b。


export const test = () => {
    let code = "namespace myns {class A {a: string;b: number;test1(){console.log(this.a,this.b);if(true){console.log('hahahaah');};}test2(){this.a =  this.b;}}class B {a: string;b: number;test1(){console.log(this.a,this.b);}test2(){this.a =  this.b;}}}";
    code = linefeed(code);
    // console.log(code);
    

    // const reg = /\{[\s\S]+?\}(?![\s\S]*\})/gm;
    // const reg = /(?<=[\}]*[^]*)\{/gm;

    // console.log(code.replace(reg, "#"));
    
    const reg = RegExpInnerBrace;

    console.log(code.replace(reg, "@"));
    console.log(code.replace(reg, "@").replace(reg, "@"));


};