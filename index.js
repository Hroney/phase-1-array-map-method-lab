const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((aSentence) => title(aSentence))
}

//The above can be abstracted even further
//  
// const titleCased = (anArray) => {
//   return anArray.map((aSentence) => title(aSentence))
// }
// 
// this will allow any elements within an array to be title cased. However, this fails the tests for this lab
// 

function title(aString) {
  const arr = aString.split(" ");
  const arr2 = [];
  for (const word of arr) {
    arr2.push(word[0].toUpperCase() + word.slice(1));
  }
  return arr2.join(" ")
}