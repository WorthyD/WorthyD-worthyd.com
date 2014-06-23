using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace WorthyD.MVC4 {
    public class RouteConfig {
        public static void RegisterRoutes(RouteCollection routes) {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Tool",
                url: "tools-{action}/{id}",
                defaults: new { controller = "Tools", action = "Index", id = UrlParameter.Optional }
            );
             routes.MapRoute(
                name: "Presentations",
                url: "presentations/{action}",
                defaults: new { controller = "Presentations", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Default",
                url: "{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}