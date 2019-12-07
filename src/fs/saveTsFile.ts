import { create, output, affix } from './../snippets/snippets';
import { writeFile } from "fs-extra";

//save file
export const save = () => {
    const body = create(
        "public abc1: string;",
        "public bcd1: number;",
        "public cde1: boolean;",
        "public test():void{",
        create(
            "const a = 10;",
            "const b = 20;",
            "console.log(a+b);"
        ),
        "}",
        "public test2():void{",
        create(
            "const a = 10;",
            "const b = 20;",
            "const c = () => {",
            create(
                "console.log(a + b);"
            ),
            "}",
            "c();"
        ),
        "}"
    );



    const entity = affix(body, "myclass", "myns");
    writeFile("./fs-output/myclass.ts", output(entity));
}


