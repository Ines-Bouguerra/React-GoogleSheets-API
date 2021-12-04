import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      age,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/09e7ee0f-1511-4e65-9dae-0e1b7210d9a1",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setAge("");
      });
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
