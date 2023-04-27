import React, {useState} from "react";

export default function Textform(props){

    const [text, setText] = useState('');

    const handleText = (event) => {
        setText(event.target.value)
    }

    const convertToUpper = () => {
        setText(text.toUpperCase());
        props.showAlert('Text converted to upper case', 'success');
    }

    const convertToLower = () => {
        setText(text.toLowerCase());
        props.showAlert('Text converted to lower case', 'success');
    }

    const clearBox = () => {
        setText('');
        props.showAlert('Text cleared', 'success');
    }

    const copyText = () => {
        var copyText = document.getElementById("mybox");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);     
        document.getSelection().removeAllRanges();
        props.showAlert('Text copied to clipboard', 'success');
    }

    const removeExtraSpace = () => {
        setText(text.split(/[ ]+/).join(" "));
    }

    const wordCount = () => {
        let wc = text.split(" ").length;
        text.split(" ").forEach((word) => {
            if(!word.length){
                wc -= 1;  
            }
        });
        return wc;
    }


    return(
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleText} value={text} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={convertToUpper}>Upper Case</button>        
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={convertToLower}>Lower Case</button>        
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={clearBox}>Clear Text</button>     
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={copyText}>Copy Text</button>     
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={removeExtraSpace}>Remove Extra Space</button>     
            </div>   

            <div className="container">
                <h2>Your Text Summary</h2>
                <p>Total Character {text.length}</p>
                <p>Total Word {wordCount()}</p>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <p>{text === ''?'Nothing to preview':text}</p>
            </div>
        </>
    )
}