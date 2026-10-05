import CustomButton from "./components/CustomButton";
import Employee from "./components/Employee";
import Item from "./components/Item";
import Student from "./components/Student";
import Teacher from "./components/Teacher";


function App(){


  let a = 10;
  let b = "labib"
  let c = true;
  let d = null;
  let e = "undefined";
  let array = [10,20,30,40,50];
  let array2 = ["labib","shuvo","sabbir","shakil"];

  
  return (
       <div>{ 
        
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


         <h1 className="text-green-800">Tailwind test</h1>
       </div>
  );
}

export default App;

// every evaluation (js) stays in the curly bracket
// only printing a and b for c and d we have stringify it by default it will not show 
// afte json.stringify it will still not print undefined for undefined wwe have to make it a string  at the  time of declaration
// for looping the array in react we can use map function and we have to return the value in the map function and we can use index as well as value in the map function, for loop etc will not work her 