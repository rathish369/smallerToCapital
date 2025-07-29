import  React,{ useState } from "react"



export default function Form(props) {
    const[text,setText]=useState("enter text here")
    const handleClick=()=>{
        console.log("Uppercase was clicked");
        setText("you have clicked on handleClick")
        console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("Uppercase was clicked");
        setText(event.target.value);
    }
   
  return (
    <form className="row g-3">

  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>pune</option>
      <option>mumbai</option>
      <option>hyderbad</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">{props.zip}</label>
    <input type="number" className="form-control" id="inputZip"/>
  </div>
  
  <div className="col-12">
    <h1>{props.Data}</h1>
    <textarea type="textarea" className="form-control" onChange={handleOnChange}value={text}id="inputArea" rows="3"placeholder="write u r opion"></textarea>
    <button className="btn btn-primary" onClick={handleClick}>convert to upperclass</button>
  </div>
  
  
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>

</form>
  )
}
