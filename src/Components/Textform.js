import React, { useState } from 'react';
// eslint-disable-next-line react-hooks/rules-of-hooks



export default function Texrform(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <div className="container">
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className={"btn btn-primary mx-1"} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className={"btn btn-primary mx-2"} onClick={handleLoClick}>Convert to LowerCase</button>
                <div className="container">
                    <h2>Your Text Summary</h2>
                    <p>{text.split("").length} words  and {text.length} characters</p>
                    <p>{0.008 * text.split("").length} Minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}