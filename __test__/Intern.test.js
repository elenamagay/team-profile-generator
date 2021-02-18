const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should return the school name an intern graduated from", () => {   
    const intern = new Intern ("Elena", "1", "elenamagay1985@gmail.com", "UNC");
    const mySchool = intern.getSchool();
    expect(mySchool).toEqual("UNC");
    })
});
