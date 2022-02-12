const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const name = 'John';
    const id = 1;
    const email = 'JohnDoe@gmail.com'
    const employee = new Employee(name, id, email);
    expect(typeof employee).toBe('object');
});

test('correctly gets the employee name', () => {
    const name = 'John';
    const id = 1;
    const email = 'JohnDoe@gmail.com'
    const employee = new Employee(name, id, email);
    expect(employee.getName()).toBe(name);
});

test('correctly gets the employee id', () => {
    const name = 'John';
    const id = 1;
    const email = 'JohnDoe@gmail.com'
    const employee = new Employee(name, id, email);
    expect(employee.getId()).toBe(id);
});

test('correctly gets the employee role', () => {
    const name = 'John';
    const id = 1;
    const email = 'JohnDoe@gmail.com'
    const employee = new Employee(name, id, email);
    expect(employee.getRole()).toBe('Employee');
});



