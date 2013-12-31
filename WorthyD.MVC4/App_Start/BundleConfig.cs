using System.Web;
using System.Web.Optimization;

namespace WorthyD.MVC4 {
    public class BundleConfig {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles) {

            //bundles.UseCdn = true;   //enable CDN support

            //add link to jquery on the CDN
            //var jqueryCdnPath = "http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.2.min.js";

            //bundles.Add(new ScriptBundle("~/script/js/jquery",
            //            jqueryCdnPath).Include(
            //            "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/script/js/views")
                .IncludeDirectory("~/scripts/libs", "*.js", true)
                .IncludeDirectory("~/scripts/views","*.js",true));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new StyleBundle("~/Content/styles").Include(
                "~/Content/styles/reset.css",
                "~/Content/styles/site.css",
                "~/Content/styles/views.home.css",
                "~/Content/styles/tablet.landscape.css",
                "~/Content/styles/tablet.portrait.css",
                "~/Content/styles/mobile.main.css",
                "~/Content/styles/mobile.portrait.css"
                ));

            
            

        }
    }
}