import Card from "./components/Card";
import CustomButton from "./components/CustomButton";
import Employee from "./components/Employee";
import Item from "./components/Item";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import { useState } from "react";


function App(){


  let a = 10;
  let b = "labib"
  let c = true;
  let d = null;
  let e = "undefined";
  let array = [10,20,30,40,50];
  let array2 = ["labib","shuvo","sabbir","shakil"];

  const [counter,setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  }

  const subValue = () => {
    setCounter(counter - 1);
  }

  
  return (
       <div className="grid place-items-center h-screen">{ 
        
        array.map((value,index)=>{
             return (<h1>{index}:{value}</h1>)
          }
        )
}
         


        {a}
        {b}
        {JSON.stringify(c)}
        {JSON.stringify(d)}
        {e}
          <h1>Hello World</h1>
         <Teacher />
         <Student />
         <Student />
         <Employee name="labib" position="developer"/>
         <CustomButton color="red"/>
         <Item Item = {array2}/>


         <h1 className="bg-amber-950 text-green-800 p-4 rounded-r-xl inline-block bg-center">Tailwind test</h1>
          <Card userName="labib" />

        <button onClick={addValue} className="bg-green-500 p-4 rounded-lg m-2">Add</button>
        <button onClick={subValue} className="bg-red-500 p-4 rounded-lg m-2">Sub</button>
        <h1>{counter}</h1>





       </div>
  );
}

export default App;

// every evaluation (js) stays in the curly bracket
// only printing a and b for c and d we have stringify it by default it will not show 
// afte json.stringify it will still not print undefined for undefined wwe have to make it a string  at the  time of declaration
// for looping the array in react we can use map function and we have to return the value in the map function and we can use index as well as value in the map function, for loop etc will not work her 