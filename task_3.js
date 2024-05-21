// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.

// При возникновении проблем по ходу решения вы всегда можете обратиться к ментору в Slack. 




function createObjectWithoutPrototype() {
    return Object.create(null);
  }


const obj = createObjectWithoutPrototype();
    console.log(obj.__proto__); // undefined