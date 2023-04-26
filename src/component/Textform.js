import React, {useState} from "react";

export default function Textform(props){

    const [text, setText] = useState('Enter you text');

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
                <button className="btn btn-primary" onClick={convertToUpper}>Upper Case</button>        
                <button className="btn btn-primary" onClick={convertToLower}>Lower Case</button>        
                <button className="btn btn-primary" onClick={clearBox}>Clear</button>     
            </div>   

            <div className="container">
                <h1>Details</h1>
                <p>Total Character {text.length}</p>
                <p>Total Word {wordCount()}</p>
            </div>    
        </>
    )
}