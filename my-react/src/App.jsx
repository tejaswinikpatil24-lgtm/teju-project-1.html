
// task 1


import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  // // let count = 0;
   

  // const [inputValue, setInputValue] = useState("Hello");

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: ""
  // });
  //  const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  



  return (
    <div style={{ textAlign: "center", color: "black" }}>
      {/* <h1>{count}</h1>

      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increament
      </button> */}


      {/* task 2 */}
      {/* <h1>{inputValue}</h1>

      <input type="text" placeholder="Enter some text" value={inputValue}  
      onChange={(e)=>{setInputValue(e.target.value)}}/> */}

     
 {/* task 3 */}
  
  
      {/* <h1>Simple Form</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button>Submit</button>
    
  
 */}

   {/* task 4 */}

  {/* <h1>Simple Form</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <button>Submit</button>
     */}


         
    </div>
  );
}

export default App;


 
