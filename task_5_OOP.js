// Задание 5.

// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.


class ElectricalAppliance {
    constructor(name, power) {
      this.name = name;
      this.power = power; // мощность, Вт
      this.isOn = false;
    }
  
    switchOn() {
      this.isOn = true;
    }
  
    switchOff() {
      this.isOn = false;
    }
  }
  
  class DeskLamp extends ElectricalAppliance {
    constructor(color) {
      super('Настольная лампа', 15);
      this.color = color;
    }
  
    changeColor(newColor) {
      this.color = newColor;
    }
  }
  
  class Computer extends ElectricalAppliance {
    constructor(brand) {
      super('Компьютер', 200);
      this.brand = brand;
    }
  
    runProgram(programName) {
      console.log(`Запуск программы "${programName}"`);
    }
  }
  
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