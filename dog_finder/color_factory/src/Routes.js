import React, {useState, useEffect} from "react";
import {Routes, Route, Navigate, BrowserRouter, useParams} from "react-router-dom";
import Color from "./Color";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";

const Routing = () => {
    const intlColor = JSON.parse(localStorage.getItem("colors")) || {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF" 
    };
    
    const [colors, setColors] = useState(intlColor);

    useEffect(
        () => localStorage.setItem("colors", JSON.stringify(colors)),
        [colors]
    );
function handleAdd(newColor){
    setColors(prevColor => ({...prevColor, ...newColor}));
};

const CurrColor= (props) => {
    const {color} = useParams();
    const hex = colors[color];
    return <Color {...props} hex={hex} color={color} />
}
return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={handleAdd} />} />
        <Route path="/colors/:color"  element={<CurrColor />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing