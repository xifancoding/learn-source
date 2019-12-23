//Snippet
export type Snippet = {
    body: Array<string | Snippet>;
    append: typeof append;
    indent: typeof indent;
};

//Snippet body type
type SnippetBody = Snippet["body"];

//append
function append(this: Snippet, ...lines: SnippetBody): Snippet {
    this.body.push(...lines);
    return this;
}

//indent
function indent(this: Snippet, body: Snippet): Snippet {
    this.append(body);
    return this;
}

//create Snippet
export const create = (...body: SnippetBody): Snippet => ({ body, append, indent });

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
//affix class
export const affixClass2 = (body: Snippet, name: string) => create(`class ${name} {`).indent(body).append("}");

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
        if (typeof currt === "string") {
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

// /**
//  * @description indent
//  * @author xfy
//  * @param {string} code
//  * @returns {string}  tab code
//  */
// export const indent = (code: string) => {

// };

//inner brace regexp
export const RegExpInnerBrace = /\{[^\{|\}]*\}/gm

//outter brace regexp
export const RegExpOutterBrace = /\{[^]*\}/gm