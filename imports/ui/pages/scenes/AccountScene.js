// @flow

import type { EdgeUiAccount, EdgeUiContext } from 'edge-login-ui-web'
import React, { Component } from 'react'
import ReactJson from 'react-json-view'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export type AccountProps = {
  account: EdgeUiAccount,
  context: EdgeUiContext,
  onLogout: () => mixed
}

export class AccountScene extends Component<AccountProps> {
    state={stage:""}
  openManageWindow = () => {
    this.props.account.openManageWindow({})
  }
    ConfirmEmail = () =>
    {

        this.setState({stage:"thankyou"})
        return;
        var options = {username:this._wallet,password:this._key,email:this.state.email}
        Accounts.createUser(options,(err)=> {
            if (err) {
                console.log(err)
            }
            Meteor.call( 'sendVerificationLink', ( error, response ) => {
                if ( error ) {
                    alert( error.reason, 'danger' );
                } else {
                }
            });
            this.setState({stage:"thankyou"})
        })
    }
    onChangeEmail = event => this.setState({email: event.target.value});
  render () {
      if(this.state.stage == "thankyou")
      {
            return (<div>
                <div className="mateSignInPageImgPart">
                    <div className="mateSignInPageImg">

                    </div>
                </div>

                <div className="mateSignInPageContent">
                    <div className="mateSignInPageGreet">
                        <h1>
                            Thank you
                        </h1>
                        <p>
                            Check your email for confirmation link
                        </p>
                    </div>
                </div>
            </div>)
      }else
      {
          return (
              <div id="content">
                  <p className="center">
                      <button onClick={this.openManageWindow}>Manage Settings</button>
                      <button className="secondary" onClick={this.props.onLogout}>
                          Logout
                      </button>
                  </p>
                  <h1>Account Information</h1>
                  <p>You are logged in as &quot;{this.props.account.username}&quot;.</p>
                  <h2>Keys</h2>
                  <div className="mateSignInPageContent">
                      <div className="mateSignInPageGreet">
                          <h1>
                              Confirm Email
                          </h1>
                          <p>
                              Enter your email and we send you a confirmation link.
                          </p>
                      </div>
                      <div className="mateSignInPageForm">
                          <div className="mateInputWrapper">
                              <TextField label="Enter your email" margin="normal" onChange={this.onChangeEmail}/>
                          </div>
                          <div className="mateLoginSubmit">
                              <Button variant="outlined" color="primary"  onClick={this.ConfirmEmail}>
                                  Confirm Email
                              </Button>
                          </div>
                      </div>

                      {/*<p className="homeRedirection">*/}
                      {/*Or go back to{' '}*/}
                      {/*<Link to="/">*/}
                      {/*<Button color="primary">Homepage</Button>*/}
                      {/*</Link>*/}
                      {/*</p>*/}
                  </div>
                  <ReactJson
                      collapsed={2}
                      displayDataTypes={false}
                      displayObjectSize={false}
                      name="walletInfos"
                      src={this.props.account.walletInfos}
                  />
              </div>
          )
      }

  }
}
