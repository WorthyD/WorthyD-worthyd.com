using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections.Specialized;

namespace WorthyD.MVC3.Framework {
	public class MobileRedirectUtility {

		public const string Full_SITE_COOKIE = "WorthyDViewFull";

		public static bool IsMobile(string userAgent) {
			List<string> agents = new List<string>() { "iphone", "android", "blackberry", "opera mobi", "windows phone" }; 

			//if (Site.IPadMobileRedirect) agents.Add("ipad");

			foreach (var i in agents) {
				if (userAgent.Contains(i))
					return true;
			}
			return false;
		}


		public static bool AllowMobileViewNonMobile(NameValueCollection queryString, HttpCookieCollection cookies) {
			return ForceFrontEndByQuery(queryString) || HasViewFullSiteCookie(cookies);
		}

		private static bool ForceFrontEndByQuery(NameValueCollection queryString) {
			if (!string.IsNullOrEmpty(queryString["viewfull"])) {
				EnableViewSiteFullCookie();
				return true;
			}
			return false;
		}

		private static bool HasViewFullSiteCookie(HttpCookieCollection cookies) {
			return cookies[Full_SITE_COOKIE] != null;
		}

		public static void EnableViewSiteFullCookie() {
			HttpCookie cookie = new HttpCookie(Full_SITE_COOKIE);
			cookie.Values["viewfull"] = "true";
			cookie.Expires = DateTime.Now.AddDays(7);
			HttpContext.Current.Response.Cookies.Add(cookie);

		}

		public static void KillViewSiteCookie() {
			HttpCookie cookie = new HttpCookie(Full_SITE_COOKIE);
			cookie.Expires = DateTime.Today.AddDays(-1d);
			//HttpContext.Current.Response.Cookies.Remove(AuthCookieName);
			HttpContext.Current.Response.Cookies.Add(cookie);
		}


	}
}