import React, { Component } from 'react';


export default class Signout extends Component {

    render() {
        Meteor.logout(()=>{
            window.location = "/";
        });

        return (
            <div className="container">
                <img src="/images/flow.png" width="100%"/>
            </div>
        );
    }
}
