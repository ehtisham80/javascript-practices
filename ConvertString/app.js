//#Source https://bit.ly/2neWfJ2
const ConvertStringCamelCase = (str, separator = "_") =>
  str
    .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
    .toLowerCase();

console.log(ConvertStringCamelCase("someDatabaseFieldName", " "));
console.log(ConvertStringCamelCase("someLabelThatNeedsToBeCamelized", "-"));
console.log(ConvertStringCamelCase("someJavascriptProperty", "_"));
