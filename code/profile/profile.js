
let femaleArray = [];
let maleArray = [];

for (let i = 1; i <= 9; i++) {
  femaleArray.push('/Images/avatars/female/' + i + '.png');
  maleArray.push('/Images/avatars/male/' + i + '.png');
}
console.log(femaleArray);
let randomPics = Math.ceil((Math.random() * 9));

document.getElementById('image').src = maleArray[randomPics];