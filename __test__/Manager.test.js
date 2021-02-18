const Manager = require ("../lib/Manager");

describe("Manager", ()=> {
    describe ("function getOfficeNumber", ()=> {
        it("should return a manager's office number", () => {
            const manager = new Manager ("Elena", "1", "elenamagay1985@gmail.com", "1111111");
            const myNumber = manager.getOfficeNumber();
            expect(myNumber).toEqual("1111111");
        })
    })
});
