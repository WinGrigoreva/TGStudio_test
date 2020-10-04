import React from "react";
import { Link } from "react-router-dom";

export class Btn extends React.Component {
    render () {
        return (
            <div>
                <Link to={this.props.link || "#"} onClick={this.props.handleClick}><img src={this.props.btnView} alt="button"/></Link>
            </div>  
        )
    }
}