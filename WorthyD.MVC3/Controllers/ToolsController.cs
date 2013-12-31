using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WorthyD.MVC3.Controllers {
    public class ToolsController : BaseController {
        //
        // GET: /Tools/

        public ActionResult Index() {
            return View();
        }
        public ActionResult HtmlEncode() {
            return View();
        }
        public ActionResult MobileDetect() {
            return View();
        }
        public ActionResult ToSlug() {
            return View();
        }
        public ActionResult UrlEncode() {
            return View();
        }


    }
}
