const developer = name => {
    return {
        name,
        type: 'Developer',
        hi: () => {
            console.log(`Hello, my name is ${name} i am a developer.`)
        }
    }
}

const tester = name => {
    return {
        name,
        type: 'Tester',
        hi: (name) => {
            console.log(`Hello, my name is ${name} i am a tester.`)
        }
    }
}

const EmployeeFactory = (name, type) => {
    const employeesByType = {
        test: tester,
        dev: developer
    };

    return employeesByType[type](name);
};;

const employees = [];

const employeeFactory = EmployeeFactory();

const pedroEmployee = employeeFactory('Pedro', 'dev');

pedroEmployee.hi()