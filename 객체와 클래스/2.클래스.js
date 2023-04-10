class Person {
  constructor(name, age, tax) {
    this.name = name;
    this.age = age;
    this.tax = tax;
  }

  taxCalcToUsd() {
    return this.tax * 0.00084;
  };

  taxCalcToKr() {
    return this.tax * 1.1;
  }
}

function PersonFn(name, age, tax) {
  this.name = name;
  this.age = age;
  this.tax = tax;
}

PersonFn.prototype.taxCalcToUsd = function () {
  return this.tax * 0.00084;
};

const sehumInfo = new Person("세훈", 20, 500);

sehumInfo.taxCalcToUsd();
sehumInfo.taxCalcToKr();