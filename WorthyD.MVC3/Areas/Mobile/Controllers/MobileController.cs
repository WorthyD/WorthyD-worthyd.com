using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WorthyD.MVC3.Areas.Mobile.Controllers {
	public class MobileController : Controller {
		//
		// GET: /Mobile/Home/

		public ActionResult Index() {
			Framework.MobileRedirectUtility.KillViewSiteCookie();
			return View();
		}

		public ActionResult Tweets() {
			return View();
		}

		public ActionResult Portfolio() {
			return View();
		}

		public ActionResult Experience() {
			return View();
		}

		public ActionResult AboutMobile() {
			return View();
		}

		public ActionResult AboutMe() {
			return View();
		}

	}
}
