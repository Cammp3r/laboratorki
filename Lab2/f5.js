function fn() {
  const objConst = { name: "Heorhii" };
  let objLet = { name: "Gleb" };

  objConst.name = "George";
  objLet.name = "Glib";

  //objConst = { name: "Anna" };  // стається помилка
  objLet = { name: "Genna" };

  console.log("objConst:", objConst);
  console.log("objLet:", objLet);
}

fn();