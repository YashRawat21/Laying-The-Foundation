{/* <div id = "parent"> --Parent
 <div id = "child"> --Child 
    <h1>I am h1 tag</h1> --Child
    <h2> I am h2 tag </h2> --sibling of h1 -- now we will make array for h1 and h2;
 </div>
</div> */}

import React from "react";
import  ReactDOM  from  "react-dom";
import logo from "./logo.png";
import user from "./user icon.png"
// React.createElement => ReactElement js Object => HTML ELement(render)
// const parent = React.createElement("div" , {id: "parent"}, React.createElement("div" , {id: "child"} ,[

//     React.createElement("h1" , {}, "I am h1 tag"), React.createElement("h2" , {} , "i am h2 tag")]));
 
//*This is how we create a react element using core React ....
//*Now to make this easier JSX was introduced

//!JSX  => Transpiled to => React.createElement => ReactElement js Object => HTML ELement(render)
//!(jsx ccode is transpiled before reaching to javascript engine) -Parcel - Babel

// React Element 

// const jsxHeading = (<h1 className="heading">
//     Namaste React EP 3 🚀
//     </h1>)

// //* React functional component 
//  const Title = () => {
//     return <h3>Namaste component 😊 </h3>
//  }
 
//  const title2 = <h2>hi react</h2>
//  const number = 10000;
 
//  const HeadingComponent = () => (
//     //React fragment behaves as empty tag 
//           <> 
//           <div id = "container-1">
//                <Title />
//                {title2} 
//                {number}
//               <h1>Namaste React Functional Component 🚀</h1>
//           </div>
//           <div id="container-2">   </div>

//           </>
//     )
//  const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>); 


//? to create heading using JSX
//*? const jsxHeading = <h1 className="heading">Namaste React EP 3 </h1> 
//*? This is how we can create a react elemenmt  using JSX...

const Header = () => {
   return(
      <>
       <div className="wrapper">
         <div className="left">
            <img src = {logo} alt = "" className="logoImg"/>
         </div>
         <div className="middle">
            <input type="search" className="searchInput" placeholder="enter your text here"/>
            <button type="submit" className="submitBtn">Submit</button>
         </div>
         <div  className="right">
         <img src = {user} alt = "" className="userImg"/>
            
         </div>
       </div>
      </>
   )
}
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Header/>); 
