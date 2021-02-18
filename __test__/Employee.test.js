const Employee = require ("../lib/Employee");

describe("Employee", ()=> {
    describe ("function getName", ()=> {
        it("should return an employee's name", () => {
            const employee = new Employee ("Elena", "1", "elenamagay1985@gmail.com");
            const myName = employee.getName();
            expect(myName).toEqual("Elena");
        })
    });

    describe ("function getId", ()=> {
        it("should return an employee's name", () => {
            const employee = new Employee ("Elena", "1", "elenamagay1985@gmail.com");
            const myId = employee.getId();
            expect(myId).toEqual("1");
        })
    })

    describe ("function getEmail", ()=> {
        it("should return an employee's name", () => {
            const employee = new Employee ("Elena", "1", "elenamagay1985@gmail.com");
            const myEmail = employee.getEmail();
            expect(myEmail).toEqual("elenamagay1985@gmail.com");
        })
    })
})