import React from 'react';
 // ./는 현재 파일이 있는 폴더

 function Food({fav}){
   
   return<h1>I love {fav}</h1>
 }
function App() {
  return(
    <div>
      <h1>hello</h1>
      <Food fav="kimch"/>
      <Food fav="ramen"/>
      <Food fav="samgiopsal"/>
    </div>
  );    
}

export default App;
