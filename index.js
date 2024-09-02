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
  // map each tutorial in the array of tutorials
  return tutorials.map((tutorial) => {
    // Capitalize the first word of each sentence, each word is separated by a space
    return tutorial.split(' ')
      .map(word => word[0].toUpperCase() + word.substring(1))
      // join the words back together after capitalization with spaces
      .join(' ')
  });
};
