const users = [
    {
        name: "Heorhii",
        phone: "1234567890"
    },
    {
        name: "Gleb",
        phone: "9876543210"
    },
    {
        name: "Genna",
        phone: "5555555555"
    }
]

function findPhoneByName(name) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      return users[i].phone;
    }
  }
  return "Not found";
}

console.log(findPhoneByName("Gleb"));
console.log(findPhoneByName("Ivan"));