function introduction(name) {
  return `Hi, my name is ${name}.`;
}

console.log(introduction("Aki")); // Output: Hi, my name is Aki.
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage("Aki", "Ember.js.")); // Output: Hi, my name is Aki and I am learning to program in Ember.js.
   
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional("Aki")); // Output: Hi, my name is Aki and I am learning to program in JavaScript.
console.log(introductionWithLanguageOptional("Aki", "Python")); // Output: Hi, my name is Aki and I am learning to program in Python.