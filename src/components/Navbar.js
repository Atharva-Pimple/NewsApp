import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
    
    render() {
        let selectedIdx=1;
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className={selectedIdx===1 ? "nav-item active":"nav-item"} onClick={()=>{selectedIdx=1}}>
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className={selectedIdx===2 ? "nav-item active":"nav-item"} onClick={()=>{selectedIdx=2}}>
                                    <Link className="nav-link" to="/business">business</Link>
                                </li>
                                <li className={selectedIdx===3 ? "nav-item active":"nav-item"} onClick={()=>{selectedIdx=3}}>
                                    <Link className="nav-link" to="/entertainment">entertainment</Link>
                                </li>
                                <li className={selectedIdx===4 ? "nav-item active":"nav-item"} onClick={()=>{selectedIdx=4}}>
                                    <Link className="nav-link" to="/health">health</Link>
                                </li>
                                <li className={selectedIdx===5 ? "nav-item active":"nav-item"} onClick={()=>{selectedIdx=5}}>
                                    <Link className="nav-link" to="/science">science</Link>
                                </li>
                                <li className={selectedIdx===6 ? "nav-item active":"nav-item"} onClick={()=>{selectedIdx=6}}>
                                    <Link className="nav-link" to="/sports">sports</Link>
                                </li>
                                <li className={selectedIdx===7 ? "nav-item active":"nav-item"} onClick={()=>{selectedIdx=7}}>
                                    <Link className="nav-link" to="/technology">technology</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
