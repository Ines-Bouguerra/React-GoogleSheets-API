import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  // form states
  const [name, setName] = useState("");
  const [age, setAge] = useState("");


  // submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age);

    // our object to pass
    // const data = {
    //   name,
    //   age,
    //   designation,
    //   salary,
    // };
    // axios
    //   .post(
    //     "https://sheet.best/api/sheets/e7a8bead-e947-4de5-9421-8e17433a3fff",
    //     data
    //   )
    //   .then((response) => {
    //     // console.log(response);
    //     setName("");
    //     setAge("");
    //     setDesignation("");
    //     setSalary("");
    //   });
  };
  return (
    <div className="container">
      <br></br>
      <h1>Save Form Data in Google Sheets using React</h1>
      <br></br>
      <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br></br>
        <label>Age</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
       
        <br></br>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
