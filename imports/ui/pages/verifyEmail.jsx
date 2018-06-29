import React, { Component } from 'react';


export default class Template extends Component {
    constructor(props) {
        super(props);
         alert(props.match.params.token)
        Accounts.verifyEmail(props.match.params.token, (err) =>{
            if (err) {
                console.log(err.reason, 'danger');
            } else {
                this.props.history.push("/dashboard");
            }
        });
    }
    render() {
        return (
            <div className="container">

            </div>
        );
    }
}
