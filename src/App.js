import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const startRedcliffeFlow = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(fields);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      await fetch("https://backend.aretehealth.tech/api/v1/customer/redcliffe", requestOptions);
      alert("Submitted.");
      setFields({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      alert("Failure! Try Again.");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="">
          <form className="form" onSubmit={startRedcliffeFlow}>
            <img
              className="logo"
              alt="redcliff logo"
              src="https://staticredcliffelabs.s3.amazonaws.com/media/gallary-file/None/bf8ae4e8-1f26-45a6-8011-938ad23ad65a.svg"
            />
            <input
              placeholder="Name"
              value={fields.name}
              onChange={(e) => setFields({ ...fields, name: e.target.value })}
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              value={fields.email}
              onChange={(e) => setFields({ ...fields, email: e.target.value })}
              className="input"
            />

            <input
              type="tel"
              placeholder="Whatsapp Number"
              value={fields.phone}
              onChange={(e) => setFields({ ...fields, phone: e.target.value })}
              className="input"
            />

            <input className="button" type="submit" />
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
