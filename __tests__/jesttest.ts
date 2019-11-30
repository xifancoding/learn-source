import { jestTarget } from "../src/jest/jestTarget";

describe("this is a simple test", () => {
    test("check the do1 function", () => {
        expect(jestTarget(100))
        // .toEqual("hahahaha");
    });
});


