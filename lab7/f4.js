const nums1 = [67, 69, 52, 42];
const nums2= [69, 52, 1, 2, 3];

function dif(array1, array2) {
    return array1.filter(num => !array2.includes(num));
}
console.log(dif(nums1, nums2));