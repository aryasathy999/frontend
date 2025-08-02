// import React from 'react';

// function App() {                //Add 2 to all numbers in the array and display them in the form of array
//   const numbers=[1,2,3,4,5];
//   return(
//     <ul>
//       {numbers.map((i) => (
//         <li>{i+2}</li>
//       ))}
//     </ul>
//   )
// }

// export default App;

// import React from "react";

// function App(){
//   const numbers=[1,2,3,4,5];
//   return(
//     <ul>
//       {numbers.filter((num) => num%2==0).map((evenNum) => (
//         <li>{evenNum}</li>
//       ))}
//     </ul>
//   )
// }

// export default App;

// import React from 'react';

// function App(){
//     const numbers=[1,2,3,4,5];
//     const evenNum = numbers.filter((num) => num%2==0).reduce((acc,currValue) => acc+currValue,0);
//     return(
//         <ul style={{listStyleType: "none"}}>
//             <li>{evenNum}</li>
//         </ul>
//     )
// }

// export default App;

import React from 'react';

function App(){
    const words=["malayalam","elephant","madam","thuglife","armstrong"];
    const palindromeWords=words.filter((word) => {
        const reversed=word.split('').reverse().join('');
        return word==reversed;
    })
    return(
        <>
        <h2>Palindrome Words</h2><ul>
            {palindromeWords.map((word, index) => (
                <li key={index}>{word}</li>
            ))}
        </ul>
        </>
    );
}

export default App;