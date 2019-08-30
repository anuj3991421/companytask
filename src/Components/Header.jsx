import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
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
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <a className="navbar-brand">{username}</a>

                    <div>
                        <div className="navbar-nav ml-auto">
                            <Link to="/login">
                                <div>Logout</div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;

