const createUser = (name, city) => {
  let outputName = {name: name}
  let outputCity = {city: city}

  return { ...outputName, ...outputCity };
};

console.log(createUser("Heorhii", "Kyiv"));