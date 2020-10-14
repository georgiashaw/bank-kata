// interface Vehicle {
//   make: string;
//   accelerate: () => void;
//   brake: () => void;
//   turn: () => void;
// }

class Vehicle {
    make: string;
    model: string;
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
      brake: () => void;
      turn: () => void;
    accelerate() {
        console.log("this accelerates")
    };
}


class Car extends Vehicle {
    constructor(make, model) {
        super(make, model)
      }
  accelerate() {
    console.log("this car accelerates");
  }
}

class Bus implements Vehicle {
    make: string;
    model: string;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    brake: () => void;
    turn: () => void;
    accelerate() { console.log("this bus accelerates")};
}

class Train implements Vehicle {
    make: string;
    model: string;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    turn: () => void;
    stop: () => void;
    brake: () => void;
    accelerate() { console.log("this train accelerates")};
}

export { Vehicle, Car, Bus, Train, Book }


// calculator

// addition and subtraction
// print result

class Calculator {
  constructor() {
    //
  }
 addTwoNumbers(a, b) {
  const calculation = new Calculation();
  const c = calculation.add(a, b)
  const printer = new Printer()
  printer.print(c)
 }
}

class Calculation {
  constructor() {
    //
  }
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
}

class Printer {
  constructor() {
    //
  }
  print(c) {
    console.log(c)
  }
}

const calc = new Calculator()
calc.addTwoNumbers(1, 3)

// library
// books, dvds, journals
// info on books (author, title, director)

class Library {
  borrowItem(item: Item) {

  }

  returnItem(item: Item) {

  }
}

class Item {
 protected title: string;
 protected catalogId: number;

  constructor(title, catalogId) {
    this.title = title;
    this.catalogId = catalogId;
  }

  printTitle() {
    console.log(this.title)
  }
}

class Book extends Item {
constructor(title, catalogId) { // constructor assigns parameters from Item
  super(title, catalogId)
}
printCatalogId() {
  console.log(this.catalogId)
}
}

class Dvd extends Item {
  constructor(title, catalogId) {
    super(title, catalogId)
  }
}

class Journal extends Item {
  constructor(title, catalogId) {
    super(title, catalogId)
  }
}

