// Задание 4.

// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
// Общие требования:

// Имена функций, свойств и методов должны быть информативными.
// Соблюдать best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
// использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.


// Родительская функция (конструктор)
function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power; // мощность, Вт
  this.isOn = false;

  // Методы включения/выключения прибора
  this.switchOn = function () {
    this.isOn = true;
  };

  this.switchOff = function () {
    this.isOn = false;
  };
}

// Делегирующая связь [[Prototype]] для двух конкретных приборов
function DeskLamp(color) {
  this.color = color;
}
DeskLamp.prototype = new ElectricalAppliance('Настольная лампа', 15);

function Computer(brand) {
  this.brand = brand;
}
Computer.prototype = new ElectricalAppliance('Компьютер', 200);

// Собственные методы для каждого прибора
DeskLamp.prototype.changeColor = function (newColor) {
  this.color = newColor;
};

Computer.prototype.runProgram = function (programName) {
  console.log(`Запуск программы "${programName}"`);
};

// Создание экземпляров каждого прибора
const lamp = new DeskLamp('белый');
const computer = new Computer('Asus');

// Включение приборов
lamp.switchOn();
computer.switchOn();

// Вызов собственных методов
lamp.changeColor('желтый');
computer.runProgram('Chrome');

// Функция для подсчета потребляемой мощности
function calculatePowerConsumption(devices) {
  let totalPower = 0;
  for (let device of devices) {
    if (device.isOn) {
      totalPower += device.power;
    }
  }
  return totalPower;
}

// Массив с приборами и подсчет потребляемой мощности
const devices = [lamp, computer];
console.log(`Потребляемая мощность в данный момент: ${calculatePowerConsumption(devices)} Вт`);