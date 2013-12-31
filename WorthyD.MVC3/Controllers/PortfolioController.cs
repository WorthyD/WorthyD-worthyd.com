using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WorthyD.MVC3.Controllers {
    public class PortfolioController : BaseController{
        //
        // GET: /Portfolio/

        public ActionResult Index() {
            return RedirectToAction("Index", "Home");
            //return View();
        }

        //public ActionResult PreviewForRFI() {
        //    return View("Index");
        //}

        public ActionResult NESController() {
            return View();
        }

    }
}
