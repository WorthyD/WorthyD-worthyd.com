using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WorthyD.MVC4.Controllers {
    public class PresentationsController : Controller {
        //
        // GET: /Presentations/

        public ActionResult BasicBetterJS() {
            return View();
        }
        public ActionResult CutoutPresentation() {
            return View();
        }
        public ActionResult WindowsPhone8() {
            return View();
        }

    }
}
