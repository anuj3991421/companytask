import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pathname: this.props.location.pathname,
            username: this.props.username
        }   
    }
    render(){
        const {pathname, username} = this.state;
        return(
            <div className="bs-example">
                <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark footer-nav">
                    
                </nav>
            </div>
        )
    }
}

export default Footer;

