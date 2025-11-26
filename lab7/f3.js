const nums = [67, 69, 52, 42, 42, 67];
function unique(array) {
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
}


console.log(unique(nums));