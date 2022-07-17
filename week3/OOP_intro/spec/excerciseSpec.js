
describe("Document class", function () {
  it("should create an object with an attribute called - EmployeeName and it should be initialized in the constructor", function () {
    let doc = new Document("elevation");
    expect(doc.EmployeeName).toEqual("elevation");
  });
});

describe("Employee class", function () {
  it("should create an object with an attribute called - name and it should be initialized in the constructor", function () {
    let employee = new Employee("elevation");
    expect(employee.name).toEqual("elevation");
  });
  it("should have a function called - work", function () {
    let employee = new Employee("elevation");
    expect(employee.work).toEqual(jasmine.any(Function));
  });
});

describe("Manager class", function () {

  var manager;

  beforeEach(function () {
    manager = new Manager("elevation");
  });

  it("should create an object with an attribute called - name and it should be initialized in the constructor", function () {
    expect(manager.name).toEqual("elevation");
  });
  it("should create an object with an attribute called - employees that is initialized with an empty array", function () {
    expect(manager.employees).toEqual(jasmine.any(Array));
  });
  it("should have a function called - hireEmployee that pushes a new employee to the employees array", function () {
    manager.employees.length = 0;
    manager.hireEmployee("Hadas");
    expect(manager.employees[0].name).toEqual("Hadas");
  });
  it("should have a function called - hireEmployee that pushes a new employee to the *end* of the employess array", function () {
    manager.employees.length = 0;
    manager.hireEmployee("Hadas");
    manager.hireEmployee("Brandon");
    manager.hireEmployee("Omer");
    expect(manager.employees[0].name).toEqual("Hadas");
    expect(manager.employees[1].name).toEqual("Brandon");
    expect(manager.employees[2].name).toEqual("Omer");
  });
  it("should have a function called - askEmployeesToWork that invokes each employee's work function", function () {
    manager.employees.length = 0;
    manager.hireEmployee("Hadas");
    manager.hireEmployee("Brandon");

    manager.employees[0].work =  manager.employees[1].work = jasmine.createSpy("'work'");
    
    manager.askEmployeesToWork();
    
    expect(manager.employees[0].work).toHaveBeenCalled();
    expect(manager.employees[1].work).toHaveBeenCalled();

  });
});


describe("Cleaner class", function () {
  it("should create an object with an attribute called - name and it should be initialized in the constructor", function () {
    let cleaner = new Cleaner("elevation");
    expect(cleaner.name).toEqual("elevation");
  });
  it("should have an function called - clean and it should console.log 'Clean'", function () {
    let cleaner = new Cleaner("elevation");

    console.log = jasmine.createSpy("log");
    var person = cleaner.clean();

    expect(console.log).toHaveBeenCalledWith("Clean");
  });
});


describe("Office class", function () {

  var office;

  beforeEach(function () {
    office = new Office();
  });

  it("should create an object with an attribute called - documents that is initialized with an empty array", function () {
    expect(office.documents).toEqual(jasmine.any(Array));
  });
  it("should create an object with an attribute called - managers that is initialized with an empty array", function () {
    expect(office.managers).toEqual(jasmine.any(Array));
  });
  it("should create an object with an attribute called - cleaners that is initialized with an empty array", function () {
    expect(office.cleaners).toEqual(jasmine.any(Array));
  });
  it("should have a function called - hireManager that pushes a new manager to the managers array", function () {
    office.hireManager("elevation");
    expect(office.managers[0].name).toEqual("elevation");
  });
  it("should have a function called - hireCleaner that pushes a new cleaner to the cleaners array", function () {
    office.hireCleaner("bob");
    expect(office.cleaners[0].name).toEqual("bob");
  });
});


describe("Employee class", function () { 
  it("should have a function called - work. that pushes 10 new documents to the office's documents array.", function () {
    let office = new Office();
    let employee = new Employee("elevation");
    employee.work(office);
    expect(office.documents.length).toEqual(10);
  });
  it("should have a function called - work. The new documents created by the employee should have the employee name on it", function () {
    let office = new Office();
    let employee = new Employee("elevation");
    employee.work(office);
    expect(office.documents[0].EmployeeName).toEqual("elevation");
    expect(office.documents[9].EmployeeName).toEqual("elevation");
  });
});

describe("Office class", function () {
  it("should have a function called - startWorkDay that will start the working day - after this function invokation the office's documents array should have 10 * (the number of total employees) new documents", function () {
    let office = new Office();
    office.hireManager("elevation");
    office.hireManager("elevation");

    office.managers[0].hireEmployee("Hadas");
    office.managers[1].hireEmployee("Brandon");
    office.managers[1].hireEmployee("Omer");

    office.startWorkDay();

    expect(office.documents.length).toEqual(30);

    expect(office.documents[0].EmployeeName).toEqual("Hadas");
    expect(office.documents[9].EmployeeName).toEqual("Hadas");
    expect(office.documents[10].EmployeeName).toEqual("Brandon");
    expect(office.documents[19].EmployeeName).toEqual("Brandon");
    expect(office.documents[20].EmployeeName).toEqual("Omer");
    expect(office.documents[29].EmployeeName).toEqual("Omer");
  });
});



