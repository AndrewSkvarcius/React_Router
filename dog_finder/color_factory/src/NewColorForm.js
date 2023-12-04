import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import "./NewColorForm.css";

function NewColorForm ({addColor}) {
    const [form, setForm ] = useState({name:"", hex:"#ffffff"});
    const navigate = useNavigate()

function handleChange(event) {
    event.persist();
    setForm(f => ({ ...f, [event.target.name]: event.target.value}));
}

function handleSubmit(event) {
    event.preventDefault();
    addColor({ [form.name]:form.hex });
    navigate('/colors');
}

const {hex, name} = form;

return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={hex}
          />
        </div>
        <input type="Submit" value="Add this color" readOnly />
      </form>
    </div>
);
}

export default NewColorForm;
