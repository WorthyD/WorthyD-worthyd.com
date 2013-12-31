using System.Web.Mvc;

namespace WorthyD.MVC3.Areas.Mobile {
	public class MobileAreaRegistration : AreaRegistration {
		public override string AreaName {
			get {
				return "Mobile";
			}
		}

		public override void RegisterArea(AreaRegistrationContext context) {
			context.MapRoute(
				"Mobile_default",
				"Mobile/{action}/{id}",
				new { controller ="Mobile",  action = "Index", id = UrlParameter.Optional }
			);
		}
	}
}
