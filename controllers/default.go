package controllers

import (
	"fmt"

	"github.com/astaxie/beego"
)

// MainController is the main application structure.
type MainController struct {
	beego.Controller
}

func (this *MainController) activeContent(view string) {

	this.Layout = "basic-layout.tpl"
	//this.Layout = "admin-layout.tpl"
	this.LayoutSections = make(map[string]string)
	this.LayoutSections["Header"] = "header.tpl"
	this.LayoutSections["Sidebar"] = "sidebar.tpl"
	this.LayoutSections["Footer"] = "footer.tpl"

	this.TplName = view + ".tpl"
	this.Data["domainname"] = "localhost:8080"
	//this.Data["domainname"] = "yourdomainname"

	sess := this.GetSession("bftx-public")
	if sess != nil {
		this.Data["InSession"] = 1 // for login bar in header.tpl
		m := sess.(map[string]interface{})
		this.Data["First"] = m["first"]
	}
}

func (this *MainController) Get() {
	//this.activeContent("public/index")
	this.activeContent("index")
}

func (this *MainController) About() {
	this.activeContent("about")
}

func (this *MainController) Photos() {
	this.activeContent("photos")

	//******** This page requires login
	//sess := this.GetSession("acme")
	sess := this.GetSession("bftx-public")
	if sess == nil {
		this.Redirect("/user/login/photos", 302)
		return
	}
	m := sess.(map[string]interface{})
	fmt.Println("username is", m["username"])
	fmt.Println("logged in at", m["timestamp"])
}

func (this *MainController) Notice() {
	this.activeContent("notice")

	flash := beego.ReadFromRequest(&this.Controller)
	if n, ok := flash.Data["notice"]; ok {
		this.Data["notice"] = n
	}
}

// Get URL catchall
/*
func (c *MainController) Get() {
	c.Data["Website"] = "blockfreight.com"
	c.Data["Email"] = "support@blockfreight.com"
	c.TplName = "public/index.tpl"
}
*/
