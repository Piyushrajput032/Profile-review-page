// import "./styles.css";
// import {useState} from "react"
// export default function App() {
//   const [count,setCount]=useState(0);
//   const handlebutton=(e)=>{
   
//    e.stopPropagation();
//    setCount(count+1)
    
    
   
//   }
//   return (
//     <div   className="App">
//       <div onMouseDown={()=>setCount(()=>count-1)}
//       style={{position:'absolute',backgroundColor:'red',height:"100vh",width:'100vw',zIndex:"-1"}}
//       ></div>
//       <button style={{marginTop:'20px',}} onClick={handlebutton}>Counter</button>
//       <Counter data={count}/>
      
//     </div>
//   );

// }

// const Counter=(props)=>{
//   return(
//     <div>
//       <h1 >{props.data}</h1>
      
//       <button onClick={(e)=>{e.stopPropagation()}} >Decrement</button>
//     </div>
//   )
// }

// //write a Counter component in React 
// //which has an increment button. On clicking 
// //the increment button, the count should increase 
// //and the count should be shown on the UI.