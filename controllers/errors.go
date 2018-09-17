package controllers

import (
	"github.com/astaxie/beego"
)

// ErrorController handles stad HTML errors
type ErrorController struct {
	beego.Controller
}

// Error404 handles HTML missing (404) errors
func (c *ErrorController) Error404() {
	c.Data["Website"] = "blockfreight.com"
	c.Data["Email"] = "support@blockfreight.com"
	c.Data["content"] = "page not found"
	c.TplName = "errors/404.tpl"
}

// func (c *ErrorController) Error500() {
//     c.Data["content"] = "server error"
//     c.TplName = "500.tpl"
// }

// func (c *ErrorController) ErrorDb() {
//     c.Data["content"] = "database is now down"
//     c.TplName = "dberror.tpl"
// }
