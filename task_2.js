// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
  }



const obj = { a: 1, b: 2 };
console.log(hasProperty(obj, 'a')); // true
console.log(hasProperty(obj, 'c')); // false