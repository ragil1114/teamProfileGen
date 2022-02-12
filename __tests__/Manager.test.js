const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const m = new Manager("Billy", 1, "billy@test.com", testValue);
  expect(m.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const m = new Manager("Bob", 1, "bob@test.com", 100);
  expect(m.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const m = new Manager("Joe", 1, "joe@test.com", testValue);
  expect(m.getOfficeNumber()).toBe(testValue);
});
