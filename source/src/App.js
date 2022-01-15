import "./App.css";
import React from "react";
import Header from "./components/Header";
import Text from "./components/Text";
import Features from "./components/Features";
import data from "./components/data";
import CallToAction from "./components/CallToAction"
import Contact from "./components/Contact"

function App() {
  const [myDate, setMyData] = React.useState(data);
  const [isOn, setIsOn] = React.useState(false)
  const [formData, setFormData] = React.useState(
    {email: ""}
)
  const features = myDate.map((element) => {
    return (
      <Features key={element.id} name={element.name} image={element.image} />
    );
  });
  function handleToggle(){
    setIsOn(prevValue => !prevValue)
  }




function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}

  return (
    <div className="uber-container">
      <Header />
      <Text />
      <div className="features-holder">{features}</div>
      {isOn && <div className="modal-container">
      <form className="form-container">
        
            <label>First Name: <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
            /></label>

        </form>
        <button onClick={handleToggle}>Thank You!</button>
        </div>}
      <CallToAction />
      <Contact handleToggle={handleToggle} />
    </div>
  );
}



export default App;
