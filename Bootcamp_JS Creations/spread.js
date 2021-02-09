//Spread in Function Calls:
const nums = [9, 3, 2, 8];
Math.max(nums); //NaN
Math.max(...nums); //67, same as Math.max(9,3,2,8)

//Spread with Array Literals:
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
[...nums1, ...nums2]; //[1,2,3,4,5,6]
['a', 'b', ...nums2]; //["a", "b", 4, 5, 6]
[...nums1, ...nums2, 7, 8, 9]; //[1,2,3,4,5,6,7,8,9]

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Max', 'Bowser', 'Hunter'];

const allPets = [...cats, ...dogs];

//Spread with Objects:
const dataFromForm = {
    email: 'blue@gmail.com',
    password: 'password123',
    username: 'tfunke'
}
const newUser = {...dataFromForm, id: 2345, isAdmin: false }

//Rest Params:
function sumAll(...nums) {
    let total = 0;
    for(let n of nums) total += n;
    return total;
}