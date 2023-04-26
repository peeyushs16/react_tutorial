import React from 'react'

export default function Navbar(props){

    const changeColor = (str) => {
        console.log('check',str);
    }
    
return(
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}  style={props.myStyle}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">About Us</a>
                    </li>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}

                <div className={`form-check form-switch text-${props.mode === 'dark'?'light':'dark'}`}>
                    <input className="form-check-input" onChange={props.toggleTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
                </div>
{/* 
                <button className="btn btn-success" onClick={props.changeTheme('green')}>Switch to Green Color</button>
                <button className="btn btn-warning" onClick={props.changeTheme('yellow')}>Switch to Yellow Color</button>
                <button className="btn btn-danger" onClick={props.changeTheme('red')}>Switch to Red Color</button> */}

                <button className="btn btn-success" onClick={props.changeTheme}>Switch to Green Color</button>
                {/* {/* <button className="btn btn-warning" onClick={props.changeTheme}>Switch to Yellow Color</button> */}
                <button className="btn btn-danger" onClick={()=>changeColor('hello')}>Switch to Red Color</button>


                <div>
                    Select Theme Color
                    <input type="color" id="colorpicker" onChange={props.handleColor}></input>

                </div>

                </div>
            </div>
            </nav>
    </>
)
}