"use strict";
// Реализовать иерархию:
// ПассажирскийТранспорт (PassengerTransport) =>ТранспортноеСредство (Vehicle) (3-4 свойства, 1-2 метода)
// ГрузовойТранспорт (FreightTransport) =>ТранспортноеСредство (Vehicle).

// Для базового класса Vehicle реализовать:
// - свойства:
// --- dimensions - габариты (объект с длиной, шириной, высотой),
// --- brand - марка,
// --- model - модель,
// --- manufactureDate - дата производства (использовать встроенный объект Date).
// - методы:
// --- getMaxSize() - возвращает максимальный габаритный размер,
// --- getAge() - возвращает количество лет со дня производства.

// Дочерний класс PassengerTransport расширяется:
// - свойствами:
// --- passengerLimit - максимальное количество пассажирских мест,
// --- passengerCount - количество занятых пассажирских мест,
// - методом addPassenger() для добавления еще одного пассажира с проверкой возможности добавления (есть ли еще незанятые места) - возвращает истину (если пассажир добавлен) или ложь (если не добавлен).

// Дочерний класс FreightTransport расширяется:
// - свойством:
// --- capacity - грузоподъемность,
// - методом checkLoadingPossibility(weight) - для проверки возможности погрузки массы weight. Возвращает булеан.

// Создать объекты всех классов иерархии, протестировать работу методов.

class Vehicle {
  constructor(brand, model, year, length, width, height) {
    this.dimensions = length * width * height;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.manufactureDate = new Date().getFullYear();
  }
  getMaxSize() {
    return this.dimensions;
  }

  getAge() {
    return this.manufactureDate - this.year;
  }
}

const car = new Vehicle("bmw", "x6", 2017, 3, 1.5, 2);

console.log("Габариты авто:>>", car.getMaxSize(), "м³");
console.log("Возраст авто", car.getAge(), "лет");

class PassengerTransport extends Vehicle {
  constructor(
    brand,
    model,
    year,
    length,
    width,
    height,
    passengerLimit,
    passengerCount
  ) {
    super(brand, model, year, length, width, height);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  addPassenger(pas) {
    if (this.passengerCount + pas <= this.passengerLimit) {
      return true;
    } else {
      return false;
    }
  }
}

const passenger = new PassengerTransport(
  "Neoplan",
  "BlueLight",
  2014,
  2.5,
  3,
  7,
  30,
  29
);

console.log("Пассажир добавлен >>", passenger.addPassenger(1));
console.log("Возраст авто", passenger.getAge(), "лет");
console.log("Габариты авто:>>", passenger.getMaxSize(), "м³");

class FreightTransport extends Vehicle {
  constructor(brand, model, year, length, width, height, capacity) {
    super(brand, model, year, length, width, height);
    this.capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    if (weight <= this.capacity) {
      return true + `${" << Масса груза не привышает грузоподъемность авто!"}`;
    } else {
      return false + `${" << Вы привысили грузоподъемность авто!"}`;
    }
  }
}

const freightCar = new FreightTransport("Man", "T300", 2015, 6, 2, 3, 2000);

console.log(freightCar.checkLoadingPossibility(2000));
console.log("Возраст авто", freightCar.getAge(), "лет");
console.log("Габариты авто:>>", freightCar.getMaxSize(), "м³");
