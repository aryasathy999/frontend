import React from 'react';

function App() {
  const numbers=[1,2,3,4,5];
 return(
  <ul>
    {numbers.map((i) => (
      <li>{i}</li>
    ))}
  </ul>
 )
}

export default App;

// Syntax of map() in javascript:
// Array.map(callback(currentValue[, index[, array]])[, thisArg])

// Syntax for map() in reactjs:
// array.map((element, index) => {
//   Return a JSX element for each 'element' in the array
//   'index' is optional and can be used as a key
//   return <JSXElement key={uniqueKey}>{element.property}</JSXElement>;
// });

// Syntax of filter() in javascript:
// const newArray = array.filter(callback(element[, index[, array]])[, thisArg]);

// Syntax of filter() in reactjs:
// const newArray = originalArray.filter(callbackFunction(element, index, array));