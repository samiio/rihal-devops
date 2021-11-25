/******************************** Data objects *******************************/

class Record {
  static count = 0;
  constructor(name) {
    this.id = ++this.constructor.count;
    this.name = name;
  }
}

class Class extends Record {
  constructor(name) {
    super(name);
  }

  getCount(studentsTable) {
    return studentsTable.reduce((total, student) => {
      return (
        total +
        student.classId.reduce((sum, id) => {
          return sum + (this.id === id) ? 1 : 0;
        }, 0)
      );
    }, 0);
  }
}

class Country extends Record {
  constructor(name) {
    super(name);
  }

  getCount(studentsTable) {
    return studentsTable.reduce((total, student) => {
      return (
        total +
        student.countryId.reduce((sum, id) => {
          return sum + (this.id === id) ? 1 : 0;
        }, 0)
      );
    }, 0);
  }
}

class Student extends Record {
  constructor(name, dob) {
    super(name);
    this.dob = dob;
    this.classId = [];
    this.countryId = [];
  }

  getAge() {
    return moment().diff(this.dob, "years");
  }

  addClass(id) {
    if (!this.classId.includes(id)) this.classId.push(id);
  }

  removeClass(id) {
    if (this.classId.includes(id)) {
      this.classId = this.classId.filter((el) => el !== id);
    }
  }

  addCountry(id) {
    if (!this.countryId.includes(id)) this.countryId.push(id);
  }

  removeCountry(id) {
    if (this.countryId.includes(id)) {
      this.countryId = this.countryId.filter((el) => el !== id);
    }
  }
}

/******************************* Table objects *******************************/

class Table {
  constructor() {
    this.table = [];
  }

  add(newRecord) {
    this.table.push(newRecord);
  }

  remove(id) {
    if (this.table.includes(id)) {
      this.table = this.table.filter((el) => el.id !== id);
    }
  }

  getRecordById(id) {
    if (this.table.includes(id)) {
      return this.table.find((el) => el.id === id);
    }
    return null;
  }
}

class Classes extends Table {
  constructor() {
    super();
  }
}

class Countries extends Table {
  constructor() {
    super();
  }
}

class Students extends Table {
  constructor() {
    super();
  }

  getAverageAge() {
    const totalYears = this.table.reduce((total, student) => {
      return total + student.getAge();
    }, 0);
    return totalYears / this.table.length;
  }
}

// Classes
const bio = new Class("Biology");
const math = new Class("Mathematics");
const myClasses = new Classes();
myClasses.add(bio);
myClasses.add(math);

console.table(myClasses.table);

// Countries
const uk = new Country("United Kingdom");
const om = new Country("Oman");
const fr = new Country("France");
const countries = new Countries();
countries.add(uk);
countries.add(om);
countries.add(fr);

console.table(countries.table);

// Students
const mo = new Student("Mohammed", "click");
const jack = new Student("Jack", "click");
const ali = new Student("Ali", "click");

mo.addClass(bio.id);
mo.addCountry(om.id);

jack.addClass(bio.id);
jack.addCountry(uk.id);
jack.addCountry(fr.id);

ali.addClass(bio.id);
ali.addCountry(om.id);

const students = new Students();
students.add(mo);
students.add(jack);
students.add(ali);

console.table(students.table);

console.log(`Omani students: ${om.getCount(students.table)}`);
console.log(`British students: ${uk.getCount(students.table)}`);
console.log(`Biology students: ${bio.getCount(students.table)}`);

students.remove(2);
console.table(students.table);
