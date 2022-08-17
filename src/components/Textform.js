import React, { useState } from 'react'
export default function Textform(props) {
    const handleUpclick = () => {
        // console.log("UpperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to uppercase', 'success')
    }
    const handleLowerclick = () => {
        // console.log("UpperCase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lowercase', 'success')
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard !", "success")
    }
    const [text, setText] = useState('Enter the text here');
    return (
        <>
            <div style={{ backgroungColor: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(46 84 147)', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <div>
                    <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpclick}>Convert to UpperCase</button>
                    <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLowerclick}>Convert to LowerCase</button>
                    <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy The Text</button>
                    {/* <button className='btn btn-primary mx-1' onClick={handle}>Convert to LowerCase</button> */}
                </div>
                <div className="container mb-2">
                    <h2>Preview</h2>
                    <p>{text.split().filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                </div>
                <div className="container">
                    <h2>Text Summary</h2>
                    <p>{text.length > 0 ? text : "Enter the text in above textbox to preview something"}</p>
                </div>
            </div>
        </>
    )
}
