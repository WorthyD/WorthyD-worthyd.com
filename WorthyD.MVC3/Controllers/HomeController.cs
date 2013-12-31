using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WorthyD.MVC3.Controllers {
    public class HomeController : BaseController{
        //
        // GET: /Index/

        public ActionResult Index() {

            //Rfi.Net.Mail.Send("To", "From", "Subject", "Body");

            return View();
        }

        public ActionResult AboutMe() {
            return View();
        }

        public ActionResult Contact() {
            return View();
        }
        public ActionResult Gaming() { 
            return View();
        }
    }
}
