
import type { EdgeUiAccount, EdgeUiContext } from 'edge-login-ui-web'
import { makeEdgeUiContext } from 'edge-login-ui-web'
import React, { Component } from 'react'
import { render } from 'react-dom'
//
import { AccountScene } from './scenes/AccountScene.js'
import { WelcomeScene } from './scenes/WelcomeScene.js'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export type RootProps = {}
export type RootState = {
    account: EdgeUiAccount | void,
    context: EdgeUiContext | void
}

const apiKey = 'c0f8c038bd10d138288ff2bd56dbcb999d22801f' // <- your key here
const appId = 'com.blockfreight'
const vendorName = 'Blockfreight'
const vendorImageUrl =
    'https://airbitz.co/go/wp-content/uploads/2016/10/GenericEdgeLoginIcon.png'

export default class Signup extends Component {
    constructor (props: RootProps) {
        super(props)
        this.state = { account: void 0, context: void 0,stage:"" }

        const assetsPath = './iframe/index.html'

        // Create the Edge context:
        makeEdgeUiContext({
            apiKey,
            appId,
            assetsPath,
            frameTimeout: 10000,
            vendorName,
            vendorImageUrl
        }).then(context => {
            this.setState({ context })

            // Close the context if our page reloads during development:
            // $FlowFixMe
            if (module.hot) module.hot.dispose(() => context.dispose())
        })
    }

    // Event handlers:
    onLogin = (account: EdgeUiAccount) => this.setState({ account })
    onLogout = () => this.setState({ account: void 0 })
    ConfirmEmail = () =>
    {
        this.setState({stage:"thankyou"})
        wallet  = this.state.account.getFirstWallet("account-repo:com.blockfreight");

        var options = {username:wallet.id,password:wallet.keys.dataKey,email:this.state.email}
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

        // Select the appropriate screen to render based on login state:
        const scene =
            this.state.account && this.state.context ? (
                    <div className="mateSignInPageContent">
                        <div className="mateSignInPageGreet">
                            <h1>
                                Confirm Email
                            </h1>
                            <p>
                                Enter your email and we will send you a confirmation link.
                            </p>
                        </div>
                        <div className="mateSignInPageForm">
                            <div className="mateInputWrapper">
                                <TextField autoFocus={true} label="Enter your email" margin="normal" onChange={this.onChangeEmail}/>
                            </div>
                            <div className="mateLoginSubmit">
                                <Button variant="outlined" color="primary"  onClick={this.ConfirmEmail}>
                                    Confirm Email
                                </Button>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>


            ) : (
                void(setTimeout(()=>this.state.context.openLoginWindow({ onLogin: this.onLogin }),0))
                // <WelcomeScene context={this.state.context} onLogin={this.onLogin} />
            )
        // this.onLogin()
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
        }else {
            return (
                <div id="container">
                    {scene}
                    <img src="/images/map.png" width="100%"/>
                </div>
            )
        }
    }
}
