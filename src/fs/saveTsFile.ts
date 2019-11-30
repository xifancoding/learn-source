import { writeFile } from "fs-extra";

//save file
export const save = () => {
    console.log("save file");
    writeFile("./fs-output/myclass.ts", `
    class myclass {
        public b: number;
        public c: number;
        public test():void{
            console.log("xxxxxa");
        }
        public get d(): boolean {
            return true;
        }
    }`
    );
}


