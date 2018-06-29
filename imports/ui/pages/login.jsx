
import type { EdgeUiAccount, EdgeUiContext } from 'edge-login-ui-web'
import { makeEdgeUiContext } from 'edge-login-ui-web'
import React, { Component } from 'react'
import { render } from 'react-dom'
//
import { AccountScene } from './scenes/AccountScene.js'
import { WelcomeScene } from './scenes/WelcomeScene.js'
import {Meteor} from "meteor/meteor";

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

export default class Login extends Component {
    constructor (props: RootProps) {
        super(props)
        this.state = { account: void 0, context: void 0 }

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

    render () {
        if(Meteor.userId())
        {
            this.props.history.push("/dashboard");
            return(<div></div>);
        }else {
            if(this.state.account && this.state.context){
            wallet  = this.state.account.getFirstWallet("account-repo:com.blockfreight");

            Meteor.loginWithPassword(wallet.id,wallet.keys.dataKey, (e)=>{
                console.log("loginWithPassword")
                if (e) {
                    //resolve(false)
                    alert("call support")
                } else {
                    this.props.history.push("/dashboard");
                }})
            }
        }


        // Select the appropriate screen to render based on login state:
        const scene =
            this.state.account && this.state.context ? (
                <AccountScene
                    context={this.state.context}
                    account={this.state.account}
                    onLogout={this.onLogout}
                />
            ) : (
                void(setTimeout(()=>this.state.context.openLoginWindow({ onLogin: this.onLogin }),100))
                // <WelcomeScene context={this.state.context} onLogin={this.onLogin} />
            )
        // this.onLogin()
        return (
            <div id="container">
                {scene}
                <img src="/images/hub.png" width="100%"/>
            </div>
        )
    }
//     render() {
//         return (
//             <div className="container">
// hi
//             </div>
//         );
//     }
}
