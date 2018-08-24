import React,  { Component }  from 'react';
import { Meteor } from 'meteor/meteor';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Alert } from '/imports/ui/helpers/alerts.js';
import NotFoundPage from '/imports/ui/pages/notFound/notFound.js';
import LoadableWrapper from '/imports/helpers/react-loadable/LoadableWrapper.js';
//import LoadableInvestors from '/imports/helpers/react-loadable/LoadableWrapper.js';
// import { slide as Menu } from 'react-burger-menu'

const LoadableHomePage = LoadableWrapper({
  loader: () => import('/imports/ui/pages/home/home.js'),
  modules: ['/imports/ui/pages/home/home.js'],
});
const LoadableAccountPage = LoadableWrapper({
  loader: () => import('/imports/ui/pages/accounts/accounts.js'),
  modules: ['/imports/ui/pages/accounts/accounts.js'],
});

if (Meteor.isClient) {
  //import 'react-s-alert/dist/s-alert-default.css';
}




//const SiteLayout = () => (
export default class SiteLayout extends Component {
    LoginButtons = (id,hide)=>
    {
        if(!hide){
            if(id){
                return(<div>
                    <a id="login_button" href="/dashboard">Dashboard</a>
                    <span id="label_between_buttons">   </span>
                    <a id="register_button" href="/signout">Logout</a>
                </div>)
            }else {
                return (<div>
                    <a id="login_button" href="/login">Sign in</a>
                    <span id="label_between_buttons"> or </span>
                    <a id="register_button" href="/signup">Create account</a>
                </div>)
            }
        }
    }
render(){
   //     alert(Meteor.userId())
    let id
    let hide;
    try{
         id = Meteor.userId();
         hide =false;
    }catch(e)
    {
         id = null
        hide =true;
    }
    return(
  <div className="site-container">
    <Helmet>
      <title>Blockfreight</title>
    </Helmet>
    
      <header id="main-header" data-height-onload={151} data-height-loaded="true" data-fixed-height-onload={150}
              style={{top: 0}}>
          {/*
          <div id="et-top-buttons">
              <div className="et_search_outer">
                  <div className="container et_search_form_container">
                      <form role="search" method="get" className="et-search-form" action="/">
                          <input type="search" className="et-search-field" placeholder="Search …" defaultValue name="s"
                                 title="Search for:"/>
                      </form>
                      <span className="et_close_search_field"/>
                  </div>
              </div>
              {this.LoginButtons(id,hide)}
          </div>
        */}
          <div className="container clearfix et_menu_container">
                {/*
                <div className="logo_container">
                  <span className="logo_helper"/>
                  <a href="/">
                      <img src="/images/blockfreight_logo_grey.svg" alt="Blockfreight, Inc. [BFT:XCPC]" id="logo"/>
                  </a>
                </div>
              */}
              <div id="et-top-navigation" data-height={182} data-fixed-height={182} style={{paddingLeft: 426}}>
                  {/*
                  <nav id="top-menu-nav">
                      <ul id="top-menu" className="nav">
                          <li id="menu-item-6630" className=""><a href="#">Connect</a>
                              <ul className="sub-menu">
                                  <li id="menu-item-6535"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item"><a
                                      href="/investors/">Investors</a></li>
                                  <li id="menu-item-6537"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item"><a
                                      href="/team/">Team</a></li>
                                  <li id="menu-item-6536"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item"><a
                                      href="/news/">Latest News</a></li>
                                  <li id="menu-item-6534"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item"><a
                                      href="/careers/">Careers</a></li>
                                  <li id="menu-item-6606"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item"><a
                                      href="/press/">Press</a></li>
                              </ul>
                          </li>
                          <li id="menu-item-6631" className=""><a href="#">The Platform</a>
                              <ul className="sub-menu">
                                  <li id="menu-item-6636"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6636">
                                      <a href="/developers/">Developers</a></li>
                                  <li id="menu-item-6644"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6644">
                                      <a href="/protocol/">Protocol</a></li>
                                  <li id="menu-item-6642"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6642">
                                      <a href="https://github.com/blockfreight">GitHub</a></li>
                                  <li id="menu-item-6648"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6648">
                                      <a href="/wallets/">Wallets</a></li>
                              </ul>
                          </li>
                          <li id="menu-item-6632" className=""><a href="#">Services</a>
                              <ul className="sub-menu">
                                  <li id="menu-item-6645"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6645">
                                      <a href="/research/">Research</a></li>
                                  <li id="menu-item-6637"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6637">
                                      <a href="/development/">Development</a></li>
                                  <li id="menu-item-6639"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6639">
                                      <a href="/engineering/">Engineering</a></li>
                                  <li id="menu-item-6647"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6647">
                                      <a href="/training/">Training</a></li>
                                  <li id="menu-item-6646"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6646">
                                      <a href="/support/">Support</a></li>
                              </ul>
                          </li>
                          <li id="menu-item-6633" className=""><a href="#">Resources</a>
                              <ul className="sub-menu">
                                  <li id="menu-item-6634"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6634">
                                      <a href="/articles/">Articles</a></li>
                                  <li id="menu-item-6643"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6643">
                                      <a href="/partners/">Partners</a></li>
                                  <li id="menu-item-6638"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6638">
                                      <a href="/downloads/">Downloads</a></li>
                                  <li id="menu-item-6641"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6641">
                                      <a href="/discussions/">Discussion</a></li>
                                  <li id="menu-item-6635"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6635">
                                      <a href="/contact/">Contact Us</a></li>
                                  <li id="menu-item-6640"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6640">
                                      <a href="/faq/">FAQ</a></li>
                              </ul>
                          </li>
                      </ul>
                  </nav>
                  */}
                  {/*<div id="et_mobile_nav_menu">*/}
                      {/*<div className="mobile_nav closed">*/}
                          {/*<span className="select_page">Select Page</span>*/}
                          {/*<span className="mobile_menu_bar mobile_menu_bar_toggle"/>*/}
                          {/*<ul id="mobile_menu" className="et_mobile_menu">*/}
                              {/*<li id="menu-item-6630" className=""><a href="#">Connect</a>*/}
                                  {/*<ul className="sub-menu">*/}
                                      {/*<li id="menu-item-6535"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6535">*/}
                                          {/*<a href="/investors/">Investors</a></li>*/}
                                      {/*<li id="menu-item-6537"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6537">*/}
                                          {/*<a href="/team/">Team</a></li>*/}
                                      {/*<li id="menu-item-6536"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6536">*/}
                                          {/*<a href="/news/">Latest News</a></li>*/}
                                      {/*<li id="menu-item-6534"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6534">*/}
                                          {/*<a href="/careers/">Careers</a></li>*/}
                                      {/*<li id="menu-item-6606"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6606">*/}
                                          {/*<a href="/press/">Press</a></li>*/}
                                  {/*</ul>*/}
                              {/*</li>*/}
                              {/*<li id="menu-item-6631"*/}
                                  {/*className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6631">*/}
                                  {/*<a href="#">The Platform</a>*/}
                                  {/*<ul className="sub-menu">*/}
                                      {/*<li id="menu-item-6636"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6636">*/}
                                          {/*<a href="/developers/">Developers</a></li>*/}
                                      {/*<li id="menu-item-6644"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6644">*/}
                                          {/*<a href="/protocol/">Protocol</a></li>*/}
                                      {/*<li id="menu-item-6642"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6642">*/}
                                          {/*<a href="/github/">GitHub</a></li>*/}
                                      {/*<li id="menu-item-6648"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6648">*/}
                                          {/*<a href="/wallets/">Wallets</a></li>*/}
                                  {/*</ul>*/}
                              {/*</li>*/}
                              {/*<li id="menu-item-6632"*/}
                                  {/*className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6632">*/}
                                  {/*<a href="#">Services</a>*/}
                                  {/*<ul className="sub-menu">*/}
                                      {/*<li id="menu-item-6645"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6645">*/}
                                          {/*<a href="/research/">Research</a></li>*/}
                                      {/*<li id="menu-item-6637"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6637">*/}
                                          {/*<a href="/development/">Development</a></li>*/}
                                      {/*<li id="menu-item-6639"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6639">*/}
                                          {/*<a href="/engineering/">Engineering</a></li>*/}
                                      {/*<li id="menu-item-6647"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6647">*/}
                                          {/*<a href="/training/">Training</a></li>*/}
                                      {/*<li id="menu-item-6646"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6646">*/}
                                          {/*<a href="/support/">Support</a></li>*/}
                                  {/*</ul>*/}
                              {/*</li>*/}
                              {/*<li id="menu-item-6633"*/}
                                  {/*className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6633">*/}
                                  {/*<a href="#">Resources</a>*/}
                                  {/*<ul className="sub-menu">*/}
                                      {/*<li id="menu-item-6634"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6634">*/}
                                          {/*<a href="/articles/">Articles</a></li>*/}
                                      {/*<li id="menu-item-6643"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6643">*/}
                                          {/*<a href="/partners/">Partners</a></li>*/}
                                      {/*<li id="menu-item-6638"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6638">*/}
                                          {/*<a href="/downloads/">Downloads</a></li>*/}
                                      {/*<li id="menu-item-6641"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6641">*/}
                                          {/*<a href="/discussions/">Discussion</a></li>*/}
                                      {/*<li id="menu-item-6635"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6635">*/}
                                          {/*<a href="/contact/">Contact Us</a></li>*/}
                                      {/*<li id="menu-item-6640"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6640">*/}
                                          {/*<a href="/faq/">FAQ</a></li>*/}
                                  {/*</ul>*/}
                              {/*</li>*/}
                          {/*</ul>*/}
                      {/*</div>*/}
                  {/*</div><div id="et_mobile_nav_menu">*/}
                      {/*<div className="mobile_nav closed">*/}
                          {/*<span className="select_page">Select Page</span>*/}
                          {/*<span className="mobile_menu_bar mobile_menu_bar_toggle"/>*/}
                          {/*<ul id="mobile_menu" className="et_mobile_menu">*/}
                              {/*<li id="menu-item-6630" className=""><a href="#">Connect</a>*/}
                                  {/*<ul className="sub-menu">*/}
                                      {/*<li id="menu-item-6535"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6535">*/}
                                          {/*<a href="/investors/">Investors</a></li>*/}
                                      {/*<li id="menu-item-6537"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6537">*/}
                                          {/*<a href="/team/">Team</a></li>*/}
                                      {/*<li id="menu-item-6536"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6536">*/}
                                          {/*<a href="/news/">Latest News</a></li>*/}
                                      {/*<li id="menu-item-6534"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6534">*/}
                                          {/*<a href="/careers/">Careers</a></li>*/}
                                      {/*<li id="menu-item-6606"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6606">*/}
                                          {/*<a href="/press/">Press</a></li>*/}
                                  {/*</ul>*/}
                              {/*</li>*/}
                              {/*<li id="menu-item-6631"*/}
                                  {/*className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6631">*/}
                                  {/*<a href="#">The Platform</a>*/}
                                  {/*<ul className="sub-menu">*/}
                                      {/*<li id="menu-item-6636"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6636">*/}
                                          {/*<a href="/developers/">Developers</a></li>*/}
                                      {/*<li id="menu-item-6644"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6644">*/}
                                          {/*<a href="/protocol/">Protocol</a></li>*/}
                                      {/*<li id="menu-item-6642"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6642">*/}
                                          {/*<a href="/github/">GitHub</a></li>*/}
                                      {/*<li id="menu-item-6648"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6648">*/}
                                          {/*<a href="/wallets/">Wallets</a></li>*/}
                                  {/*</ul>*/}
                              {/*</li>*/}
                              {/*<li id="menu-item-6632"*/}
                                  {/*className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6632">*/}
                                  {/*<a href="#">Services</a>*/}
                                  {/*<ul className="sub-menu">*/}
                                      {/*<li id="menu-item-6645"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6645">*/}
                                          {/*<a href="/research/">Research</a></li>*/}
                                      {/*<li id="menu-item-6637"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6637">*/}
                                          {/*<a href="/development/">Development</a></li>*/}
                                      {/*<li id="menu-item-6639"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6639">*/}
                                          {/*<a href="/engineering/">Engineering</a></li>*/}
                                      {/*<li id="menu-item-6647"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6647">*/}
                                          {/*<a href="/training/">Training</a></li>*/}
                                      {/*<li id="menu-item-6646"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6646">*/}
                                          {/*<a href="/support/">Support</a></li>*/}
                                  {/*</ul>*/}
                              {/*</li>*/}
                              {/*<li id="menu-item-6633"*/}
                                  {/*className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6633">*/}
                                  {/*<a href="#">Resources</a>*/}
                                  {/*<ul className="sub-menu">*/}
                                      {/*<li id="menu-item-6634"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6634">*/}
                                          {/*<a href="/articles/">Articles</a></li>*/}
                                      {/*<li id="menu-item-6643"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6643">*/}
                                          {/*<a href="/partners/">Partners</a></li>*/}
                                      {/*<li id="menu-item-6638"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6638">*/}
                                          {/*<a href="/downloads/">Downloads</a></li>*/}
                                      {/*<li id="menu-item-6641"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6641">*/}
                                          {/*<a href="/discussions/">Discussion</a></li>*/}
                                      {/*<li id="menu-item-6635"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6635">*/}
                                          {/*<a href="/contact/">Contact Us</a></li>*/}
                                      {/*<li id="menu-item-6640"*/}
                                          {/*className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6640">*/}
                                          {/*<a href="/faq/">FAQ</a></li>*/}
                                  {/*</ul>*/}
                              {/*</li>*/}
                          {/*</ul>*/}
                      {/*</div>*/}
                  {/*</div>*/}
              </div>
              {/* #et-top-navigation */}
      {/* Top menu */}
      {/* [responsive_menu_pro] */}
      </div> {/* .container */}
      </header>
    
    <div className="header-container" />
    <div className="row body-container container">
        {/*<img src="https://i0.wp.com/blockfreight.com/wp-content/uploads/2017/04/shutterstock_564555790-e1512618174487.jpg?zoom=1.7999999523162842&amp;w=1080&amp;ssl=1" alt="" width="843" height="473" src-orig="https://i0.wp.com/blockfreight.com/wp-content/uploads/2017/04/shutterstock_564555790-e1512618174487.jpg?w=1080&amp;ssl=1" scale="1.7999999523162842"/>*/}
        <br/>
        <Switch>
            <Route exact path="/" component={LoadableHomePage} />
            <Route path="/accounts" component={LoadableAccountPage} />
            {/*<Route exact path="/test" component={LoadableTestPage} />*/}
            {/*<Route exact path="/investors" component={LoadableInvestors} />*/}
            {/*<Route exact path="/team" component={LoadableTeam} />*/}
            {/*<Route exact path="/careers" component={LoadableTeam} />*/}
            <Route exact path="/articles" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/articles.jsx'),
                modules: ['/imports/ui/pages/articles.jsx'],
            })} />
            <Route exact path="/careers" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/careers.jsx'),
                modules: ['/imports/ui/pages/careers.jsx'],
            })} />
            <Route exact path="/contactus" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/contactus.jsx'),
                modules: ['/imports/ui/pages/contactus.jsx'],
            })} />
            <Route exact path="/developers" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/developers.jsx'),
                modules: ['/imports/ui/pages/developers.jsx'],
            })} />
            <Route exact path="/development" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/development.jsx'),
                modules: ['/imports/ui/pages/development.jsx'],
            })} />
            <Route exact path="/discussions" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/discussions.jsx'),
                modules: ['/imports/ui/pages/discussions.jsx'],
            })} />
            <Route exact path="/downloads" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/downloads.jsx'),
                modules: ['/imports/ui/pages/downloads.jsx'],
            })} />
            <Route exact path="/engineering" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/engineering.jsx'),
                modules: ['/imports/ui/pages/engineering.jsx'],
            })} />
            <Route exact path="/faq" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/faq.jsx'),
                modules: ['/imports/ui/pages/faq.jsx'],
            })} />
            <Route exact path="/investors" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/investors.jsx'),
                modules: ['/imports/ui/pages/investors.jsx'],
            })} />
            <Route exact path="/news" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/news.jsx'),
                modules: ['/imports/ui/pages/news.jsx'],
            })} />
            <Route exact path="/partners" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/partners.jsx'),
                modules: ['/imports/ui/pages/partners.jsx'],
            })} />
            <Route exact path="/press" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/press.jsx'),
                modules: ['/imports/ui/pages/press.jsx'],
            })} />
            <Route exact path="/protocol" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/protocol.jsx'),
                modules: ['/imports/ui/pages/protocol.jsx'],
            })} />
            <Route exact path="/research" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/research.jsx'),
                modules: ['/imports/ui/pages/research.jsx'],
            })} />
            <Route exact path="/support" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/support.jsx'),
                modules: ['/imports/ui/pages/support.jsx'],
            })} />
            <Route exact path="/team" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/team.jsx'),
                modules: ['/imports/ui/pages/team.jsx'],
            })} />
            <Route exact path="/template" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/template.jsx'),
                modules: ['/imports/ui/pages/template.jsx'],
            })} />
            <Route exact path="/training" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/training.jsx'),
                modules: ['/imports/ui/pages/training.jsx'],
            })} />
            <Route exact path="/wallets" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/wallets.jsx'),
                modules: ['/imports/ui/pages/wallets.jsx'],
            })} />

            <Route exact path="/login" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/login.jsx'),
                modules: ['/imports/ui/pages/login.jsx'],
            })} />
            <Route exact path="/signup/" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/signup.jsx'),
                modules: ['/imports/ui/pages/signup.jsx'],
            })} />
            <Route  path="/verify-email/:token" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/verifyEmail.jsx'),
                modules: ['/imports/ui/pages/verifyEmail.jsx'],
            })} />
            <Route exact path="/dashboard" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/dashboard.jsx'),
                modules: ['/imports/ui/pages/dashboard.jsx'],
            })} />
            <Route exact path="/signout" component={LoadableWrapper({
                loader: () => import('/imports/ui/pages/signout.jsx'),
                modules: ['/imports/ui/pages/signout.jsx'],
            })} />
            <Route component={NotFoundPage} />
      </Switch>
    </div>
      <footer id="main-footer">
          <div className="container">
              <div id="footer-widgets" className="clearfix">
                  <div className="footer-widget" style={{height:1}}>
                      <div id="nav_menu-2" className="fwidget et_pb_widget widget_nav_menu">
                          {'\u00A0'}
                      </div>
                  </div>
                  <div className="footer-widget">
                      <div id="nav_menu-2" className="fwidget et_pb_widget widget_nav_menu"><h4
                          className="title">Connect</h4>
                          <div className="menu-connect-container">
                              <ul id="menu-connect" className="menu">
                                  <li id="menu-item-316"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-316">
                                      <a href="/investors/">Investors</a></li>
                                  <li id="menu-item-5939"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5939">
                                      <a href="/news/">Latest News</a></li>
                                  <li id="menu-item-294"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-294">
                                      <a href="/team/">Team</a></li>
                                  <li id="menu-item-297"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-297">
                                      <a href="/careers/">Careers</a></li>
                                  <li id="menu-item-296"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-296">
                                      <a href="https://docs.google.com/presentation/d/1W4zHm_psnCqZwSEzmN2TmRMHqNARh-P5S0w_YDPohTY/pub?start=false&loop=false&delayms=3000">Press</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      {/* end .fwidget */}</div>
                  {/* end .footer-widget */}
                  <div className="footer-widget">
                      <div id="nav_menu-4" className="fwidget et_pb_widget widget_nav_menu"><h4 className="title">The
                          Platform</h4>
                          <div className="menu-the-platform-container">
                              <ul id="menu-the-platform" className="menu">
                                  <li id="menu-item-299"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-299">
                                      <a href="/developers">Developers</a></li>
                                  <li id="menu-item-300"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-300">
                                      <a href="/protocol">Protocol</a></li>
                                  <li id="menu-item-298"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-298">
                                      <a href="https://github.com/blockfreight">GitHub</a></li>
                                  <li id="menu-item-301"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-301">
                                      <a href="/wallets">Wallets</a></li>
                              </ul>
                          </div>
                      </div>
                      {/* end .fwidget */}</div>
                  {/* end .footer-widget */}
                  <div className="footer-widget">
                      <div id="nav_menu-5" className="fwidget et_pb_widget widget_nav_menu"><h4
                          className="title">Services</h4>
                          <div className="menu-services-container">
                              <ul id="menu-services" className="menu">
                                  <li id="menu-item-302"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-302">
                                      <a href="/research">Research</a></li>
                                  <li id="menu-item-303"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-303">
                                      <a href="/development">Development</a></li>
                                  <li id="menu-item-304"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-304">
                                      <a href="/engineering">Engineering</a></li>
                                  <li id="menu-item-305"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-305">
                                      <a href="/training">Training</a></li>
                                  <li id="menu-item-306"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-306">
                                      <a href="/support">Support</a></li>
                              </ul>
                          </div>
                      </div>
                      {/* end .fwidget */}</div>
                  {/* end .footer-widget */}
                  <div className="footer-widget last">
                      <div id="nav_menu-6" className="fwidget et_pb_widget widget_nav_menu"><h4
                          className="title">Resources</h4>
                          <div className="menu-resources-container">
                              <ul id="menu-resources" className="menu">
                                  <li id="menu-item-307"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-307">
                                      <a href="/articles">Articles</a></li>
                                  <li id="menu-item-308"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-308">
                                      <a href="/partners">Partners</a></li>
                                  <li id="menu-item-309"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-309">
                                      <a href="/downloads">Downloads</a></li>
                                  <li id="menu-item-5528"
                                      className="menu-item menu-item-type-post_type_archive menu-item-object-forum menu-item-5528">
                                      <a href="/discussions/">Discussions</a></li>
                                  <li id="menu-item-314"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-314">
                                      <a href="/contact">Contact Us</a></li>
                                  <li id="menu-item-315"
                                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-315">
                                      <a href="/faq">FAQ</a></li>
                              </ul>
                          </div>
                      </div>
                      {/* end .fwidget */}</div>
                  {/* end .footer-widget */}    </div>
              {/* #footer-widgets */}
          </div>
          {/* .container */}

          <div id="footer-top-2">
              <div className="container clearfix">

                  <ul className="bf-footer-links">
                      <li className="bf-footer-link">
                          <a href="/status" title="Network Status"> STATUS |</a>
                      </li>
                      <li className="bf-footer-link">
                          <a href="/api" title="Application Programming Interface"> API |</a>
                      </li>
                      <li className="bf-footer-link">
                          <a href="/shop" title="Purchase Blockfreight™ products and services"> SHOP |</a>
                      </li>
                      <li className="bf-footer-link">
                          <a href="/about-us" title="About Blockfreight™"> ABOUT US</a>
                      </li>
                  </ul>
                  <p id="footer-info-2">
                      <a href="/terms-of-use-agreement" title="Terms of Service"> TERMS OF USE |</a>
                      <a href="/privacy-policy" title="Privacy Policy"> PRIVACY POLICY |</a>
                      <a href="/security" title="Security Policy"> SECURITY</a>
                  </p>
                  <p id="footer-info">
                  </p>
              </div> {/* .container */}
          </div> {/* #footer-bottom-2 */}
          {/* Copyright | Social */}
          <div id="footer-bottom">
              <div className="container clearfix">
                  <ul className="et-social-icons">
                      <li className="et-social-icon">
                          <a href="http://twitter.com/blockfreight" className="icon">
                              <i className="fa fa-twitter" />
                          </a>
                      </li>
                      <li className="et-social-icon">
                          <a href="https://github.com/blockfreight" className="icon">
                              <i className="fa fa-github" />
                          </a>
                      </li>
                      <li className="et-social-icon">
                          <a href="https://www.facebook.com/blockfreight/" className="icon">
                              <i className="fa fa-facebook" />
                          </a>
                      </li>
                      <li className="et-social-icon">
                          <a href="https://www.linkedin.com/company/blockfreight/" className="icon">
                              <i className="fa fa-linkedin" />
                          </a>
                      </li>
                      <li className="et-social-icon">
                          <a href="https://medium.com/blockfreight-bft-xcp" className="icon">
                              <i className="fa fa-medium" />
                          </a>
                      </li>
                      <li className="et-social-icon">
                          <a href="https://angel.co/blockfreight" className="icon">
                              <i className="fa fa-angellist" />
                          </a>
                      </li>
                  </ul>
                  {/*End JCNM*/}					<p id="footer-info">
                  2017-2018 © ™ Blockfreight, Inc. | <a href="https://bitcoincash.org"><img src="/images/A_Bitcoin_Company.svg" alt="A Bitcoin Company" id="logo" data-actual-width={114} data-actual-height={13} scale={0} /></a> | made with ♥ in <a href="https://sfgov.org" title="digital | strategy | agency">San Francisco, CA.</a>					</p>
              </div> {/* .container */}
          </div> {/* #footer-bottom */}
      </footer>

  </div>
);

}
}
// export default SiteLayout;
//
// (function($) {
//     function setup_collapsible_submenus() {
//         $( "<div class='sub-menu-toggle'></div>" ).insertBefore( "#main-header #mobile_menu.et_mobile_menu .menu-item-has-children > a" );
//         $( "#main-header #mobile_menu.et_mobile_menu .sub-menu-toggle" ).click(function () {
//             $(this).toggleClass("popped");
//         });
//     }
//     $(document).ready(function() {
//         setup_collapsible_submenus();
//     });
//     $(window).load(function() {
//         setup_collapsible_submenus();
//     });
// })
//
