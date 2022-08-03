import { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Nav extends Component {
    render() {
        return(
            <div>
                <ul className="nav">
                    <li className="btn"><NavLink to="/">Home</NavLink></li>
                    <li className="btn"><NavLink to="/contact">Contact</NavLink> </li>
                    <li className="btn"><NavLink to="/inst">Inst</NavLink></li>
                    <li className="btn"><NavLink to="/post">Post</NavLink></li>

                    
                </ul>
        
            </div>
        )
    }
}