// Створюємо хеш-таблицю (об'єкт), де ключ — ім'я, а значення — телефон
const phoneBook = {
  'Heorhii': '+380123456789',
  'Gleb': '+380987654321',
  'Genna': '+380555555555'
};


function findPhoneByName(name) {
  return phoneBook[name] || null; 
}

// Приклад використання:
console.log(findPhoneByName('Gleb')); 
console.log(findPhoneByName('Ivan')); 