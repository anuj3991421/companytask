import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Faker from 'faker';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Dashboard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            feeds: [],
            userImage: Faker.internet.avatar(),
            userName: Faker.internet.userName(),
            firstName: Faker.name.firstName(1),
            lastName: Faker.name.lastName(1), 
            userDetail: Faker.lorem.sentence(30), 
        }
    }

    componentWillMount() {
        for (let i = 0; i < 10; i++) {
          const feed = {
            title: Faker.lorem.word(),
            description: Faker.lorem.sentence(30),
          }
          this.setState(prevState => ({
            feeds: [...prevState.feeds, feed],
          }))
        }
    }

    render(){

        const {userData} = this.props;
        const {userImage, userName, firstName, lastName, userDetail, feeds} = this.state;
        return(
            <>  
                <Header location={this.props.location} username="1223"  />
                <div class="container-fluid">
                    <div class="row" style={{paddingTop: 25, paddingBottom: 25}}>
                        <div class="col-12 col-xl-2">
                            <div class="user-info" style={{textAlign: 'center', padding: 15, background: '#d2d2d2'}}> 
                                <div>
                                    <img style={{borderRadius: 10}} src={userImage} class="img-circle img-responsive" />
                                    <h2 style={{fontSize: 20, marginTop: 10}}>{firstName} {lastName}</h2>
                                    <h3 style={{fontSize: 20, marginTop: 10}}>Busy</h3>
                                    <p>{userDetail}</p>
                                </div>
                            </div>
                            <div class="list-box">
                                <div>
                                    <ul class="list-inline">
                                        <li>My Posts</li>
                                        <li>Account Settings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-7">
                            <div class="box-height">
                                <div>
                                    <div class="col-sm-3 col-md-3">
                                        <form class="navbar-form" role="search">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Search" name="q" />
                                                <div class="input-group-btn">
                                                    <button class="btn btn-default" type="submit">Go</button>
                                                </div>
                                            </div>  
                                        </form>
                                    </div>

                                    {feeds.map((feed, key) => {
                                        return(
                                            <>
                                                <div>
                                                    <h3>{feed.title}</h3>
                                                    <p>{feed.description}</p>
                                                </div>  
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-3">
                            AAAAAAAAAAa
                        </div>
                    </div>
                </div>
                <Footer location={this.props.location} username="1223"  />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    userData: state.userReducer.userData,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);