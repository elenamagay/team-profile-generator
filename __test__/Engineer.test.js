const Engineer = require ("../lib/Engineer");

describe("Engineer", ()=> {
    describe ("function getGithub", ()=> {
        it("should return an engineer's GitHub name", () => {
            const engineer = new Engineer ("Elena", "1", "elenamagay1985@gmail.com", "elenamagay");
            const myGithub = engineer.getGithub();
            expect(myGithub).toEqual("elenamagay");
        })
    })
});