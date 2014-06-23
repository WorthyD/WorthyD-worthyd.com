using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Caching;
using System.Web.Hosting;

namespace System.Web.Mvc {
    public static class VersionedTag {
        public static string Tag(string rootRelativePath) {
            if (HttpRuntime.Cache[rootRelativePath] == null) {
                string absolute = HostingEnvironment.MapPath(rootRelativePath);
                //string absolute = rootRelativePath;

                DateTime date = File.GetLastWriteTime(absolute);
                int index = rootRelativePath.LastIndexOf('/');

                string result = rootRelativePath.Insert(index, "/v-" + date.Ticks);
                HttpRuntime.Cache.Insert(rootRelativePath, result, new CacheDependency(absolute));
            }

            return HttpRuntime.Cache[rootRelativePath] as string;
        }


        public static string VerstionURL(this UrlHelper url, string rootRelativePath) {
            if (HttpRuntime.Cache[rootRelativePath] == null) {
                string absolute = HostingEnvironment.MapPath(rootRelativePath);
                //string absolute = rootRelativePath;

                DateTime date = File.GetLastWriteTime(absolute);
                int index = rootRelativePath.LastIndexOf('/');

                string result = rootRelativePath.Insert(index, "/v-" + date.Ticks);
                HttpRuntime.Cache.Insert(rootRelativePath, result, new CacheDependency(absolute));
            }

            return url.Content(HttpRuntime.Cache[rootRelativePath] as string);
        }
    }
    
}