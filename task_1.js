// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.



function logOwnProperties(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`Key: ${key}, Value: ${obj[key]}`);
      }
    }
  }
  
const myObj = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  logOwnProperties(myObj);