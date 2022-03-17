/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}
// console.log(getRandomNumber(6))
const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}
// console.log(sortByNumber([2,5,3,8,1,4]))
/*******************
 * YOUR CODE BELOW *
 *******************/
//ALL d6 images by class && id
let d6ImgAll = document.querySelectorAll("img.d6.roll");
let d6Img = document.querySelector("#d6-roll");
let d6Img1 = document.querySelector("#double-d6-roll-1");
let d6Img2 = document.querySelector("#double-d6-roll-2");
//D12Image
let d12Img = document.querySelector("#d12-roll")
//d20 Image
let d20Img = document.querySelector("#d20-roll")
//averages
let mean6 = document.querySelector('#d6-rolls-mean')
let median6 = document.querySelector('#d6-rolls-median')
let mode6 = document.querySelector('#d6-rolls-mode')

let mean6Dbl = document.querySelector('#double-d6-rolls-mean')
let median6Dbl = document.querySelector('#double-d6-rolls-median')
let mode6Dbl = document.querySelector('#double-d6-rolls-mode')

let mean12 = document.querySelector('#d12-rolls-mean')
let median12 = document.querySelector('#d12-rolls-median')
let mode12 = document.querySelector('#d12-rolls-mode')

let mean20 = document.querySelector('#d20-rolls-mean')
let median20 = document.querySelector('#d20-rolls-median')
let mode20 = document.querySelector('#d20-rolls-mode')
/*******************
 * EVENT LISTENERS *
 *******************/
const d6 = document.querySelector('#d6-button');
// console.log(d6)
d6.addEventListener('click', ()=> {
  // console.log(e)
  roll6()
  console.log(sixes)
  mean6.textContent = `${avg(sixes)}`
  median6.textContent = `${middle(sixes)}`
  mode6.textContent = `${most(sixes)}`
  
});
const doubleD6 = document.querySelector('#double-d6-buttons');
// console.log(d6)
doubleD6.addEventListener('click', ()=> {
  rollDbl6()
  mean6Dbl.textContent = `${avg(doubleSixes)}`
  median6Dbl.textContent = `${middle(doubleSixes)}`
  mode6Dbl.textContent = `${most(doubleSixes)}`
});

const d12 = document.querySelector('#d12-button');
// console.log(d6)
d12.addEventListener('click', ()=> {
  roll12()
  mean12.textContent = `${avg(twelves)}`
  median12.textContent = `${middle(twelves)}`
  mode12.textContent = `${most(twelves)}`
});

const d20 = document.querySelector('#d20-button');
// console.log(d6)
d20.addEventListener('click', ()=> {
  roll20()
  mean20.textContent = `${avg(twenties)}`
  median20.textContent = `${middle(twenties)}`
  mode20.textContent = `${most(twenties)}`
});

const reset = document.querySelector('#reset-button');
// console.log(d6)
reset.addEventListener('click', ()=> {
    resetAll()
});
/******************
 * RESET FUNCTION *
 ******************/
const resetAll = () => {
  //empt all arr.
  mean6.textContent='NA'
  median6.textContent='NA'
  mode6.textContent='NA'

  mean6Dbl.textContent='NA'
  median6Dbl.textContent='NA'
  mode6Dbl.textContent='NA'

  mean12.textContent='NA'
  median12.textContent='NA'
  mode12.textContent='NA'

  mean20.textContent='NA'
  median20.textContent='NA'
  mode20.textContent='NA'
  // doubleSixes = [];
  // twelves = [];
  // twenties = [];
  //RESET IMAGES BELOW
  for(let i= 0 ; i < d6ImgAll.length ; i++) {
    d6ImgAll[i].src= 'images/start/d6.png'
  }
  d12Img.src = 'images/start/d12.jpeg'
  d20Img.src = 'images/start/d20.jpg'

}
resetAll()

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

const roll6 = () => {
  let rand = getRandomNumber(6)
  //change image to new image
  d6Img.src = `images/d6/${rand}.png`
  //add to pertinent arr
  sixes.push(rand)
}
// roll6()
const rollDbl6 = () => {
  let rand1 = getRandomNumber(6)
  let rand2 = getRandomNumber(6)
  // console.log(rand)
  d6Img1.src = `images/d6/${rand1}.png`
  d6Img2.src = `images/d6/${rand2}.png`
  doubleSixes.push(rand1,rand2)
}
const roll12 = () => {
  let rand = getRandomNumber(12)
  //change image to new image
  d12Img.src = `images/numbers/${rand}.png`
  twelves.push(rand)
}
const roll20 = () => {
  let rand = getRandomNumber(20)
  //change image to new image
  d20Img.src = `images/numbers/${rand}.png`
  twenties.push(rand)
}


// avg6(sixes)
/****************
 * MATH SECTION *
 ****************/

// let sample = [1,2,4,6]
const avg = (arr) => {
  let sum = 0;
  for(let num of arr) {
    sum += num
  }
  return sum/arr.length
}
const middle = (arr) => {
  let sorted = sortByNumber(arr)
  let middleIdx = Math.floor(sorted.length/2)

  if(arr.length% 2 ===1 ) {
    return sorted[middleIdx]
  } else {
    return (sorted[middleIdx -1] + sorted[middleIdx]) /2
  }
  
  // console.log(sorted)
  
}
const most = (arr) => {
  let count = {}
  for(let i = 0 ; i < arr.length ; i++) {
    // console.log(count[arr[i]])
    if (count[arr[i]] === undefined) {
      count[arr[i]] = 0
    } else {
      count[arr[i]] ++;
    }
  }
  let max = 0
  // console.log(count)
  for(let num in count) {
    if (count[num] > max) {
      max = num
    }
  }
  return max
}
// console.log(most([2,5,8,1,4,7,7]))
// console.log(sixes)