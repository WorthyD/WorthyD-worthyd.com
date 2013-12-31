using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WorthyD.Controllers {
	public class BaseController : Controller {
		//
		// GET: /Base/

		public bool IsMobile() {
			if ((!string.IsNullOrEmpty(Request.UserAgent) && AgentIsMobile(Request.UserAgent.ToLower()))) {
				return true;
			}
			return false;
		}

		private bool AgentIsMobile(string userAgent) {
			List<string> agents = new List<string>() { "iphone", "android", "blackberry", "opera mobi", "windows phone" };

		///	if (Site.IPadMobileRedirect) agents.Add("ipad");
			foreach (var i in agents) {
				if (userAgent.Contains(i))
					return true;
			}
			return false;

		}

		public ActionResult MultiView(string view, string mobileView, object model) {
			if (!IsMobile()) {
				return View(view, model);
			} else {
				return View(mobileView, model);
			}


		}

		public ActionResult PartialMultiView(string view, string mobileView, object model) {
			if (!IsMobile()) {
				return PartialView(view, model);
			} else {
				return PartialView(mobileView, model);
			}
		}
	}
}
