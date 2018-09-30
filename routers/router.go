package routers

import (
	"bftx-public/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.ErrorController(&controllers.ErrorController{})
	beego.Router("/", &controllers.MainController{})
	//beego.Router("/signup", &controllers.SignupController{})
	beego.Router("/config", &controllers.AdminController{})

	beego.Router("/about", &controllers.MainController{}, "get:About")
	beego.Router("/photos", &controllers.MainController{}, "get:Photos")
	beego.Router("/user/login/:back", &controllers.MainController{}, "get,post:Login")
	beego.Router("/user/logout", &controllers.MainController{}, "get:Logout")
	beego.Router("/user/register", &controllers.MainController{}, "get,post:Register")
	beego.Router("/user/profile", &controllers.MainController{}, "get,post:Profile")
	beego.Router("/user/verify/:uuid([a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12})", &controllers.MainController{}, "get:Verify")
	beego.Router("/user/remove", &controllers.MainController{}, "get,post:Remove")
	beego.Router("/user/forgot", &controllers.MainController{}, "get,post:Forgot")
	beego.Router("/user/reset/:uuid([a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12})", &controllers.MainController{}, "get,post:Reset")
	beego.Router("/notice", &controllers.MainController{}, "get:Notice")
	beego.Router("/appadmin/index/:parms", &controllers.AdminController{}, "get,post:Index")
	beego.Router("/appadmin/add/:parms", &controllers.AdminController{}, "get,post:Add")
	beego.Router("/appadmin/update/:username", &controllers.AdminController{}, "get,post:Update")
}
