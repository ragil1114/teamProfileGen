const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "St. Vincent-St. Mary High School";
  const i = new Intern("Lebron", 1, "lebron@test.com", testValue);
  expect(i.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const i = new Intern("Raymond", 1, "raymond@test.com", "St. Vincent-St. Mary High School");
  expect(i.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "St. Vincent-St. Mary High School";
  const i = new Intern("James", 1, "james@test.com", testValue);
  expect(i.getSchool()).toBe(testValue);
});
