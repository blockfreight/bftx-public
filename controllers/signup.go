package controllers

import (
	"github.com/astaxie/beego"
)

// SignupController is the Signup application structure.
type SignupController struct {
	beego.Controller
}

// Get URL catchall
func (c *SignupController) Get() {
	c.Layout = "public/signup_layout.html"
	c.TplName = "public/signup.tpl"
}
