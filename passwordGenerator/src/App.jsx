import { useState, useCallback } from "react";

function App() {

  const [length, setLength] = useState(8);
  const [nuberAllowed, setNumberAllowed] = useState(false);
  const [specialAllowed, setSpecialAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const generatePassword = useCallback(()=> {

      let password = "";
      let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if(nuberAllowed) string += "0123456789";
      if(specialAllowed) string += "!@#$%^&*()_+~`|}{[]:;?><,./-=";


      for (let i = 0; i <= array.length; i++) {


        let char = Math.floor(Math.random() * string.length + 1);

        password = string.charAt(char);
      }

      statePassword(password);




  }, [length, nuberAllowed, specialAllowed, setPassword]) 
 

  return (
    <>
       <div className = "w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  text-orange-500 bg-gray-800">

          <div className = "flex shadow rounded-lg overflow-hidden mb-4">


            <input type = "text"
                   value = {password}
                   className = "outline-none w-full px-3 py-1"
                   placeholder = "Your password"
                   readOnly
            />

              <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Copy
              </button>
          
          </div>


       </div>
    </>
  )
}

export default App
