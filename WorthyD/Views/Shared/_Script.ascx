<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<script src="<%= ResolveUrl("~/scripts/jquery/jquery-1.4.1.min.js")%>"></script>
<script src="<%= ResolveUrl("~/Scripts/js/global.min.js")%>" type="text/javascript"></script>
<script src="<%= ResolveUrl("~/Scripts/js/pages.min.js")%>" type="text/javascript"></script>
<script type="text/javascript">
	var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
	document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
	var googleTracker = "UA-3685134-9";

	try {
		var pageTracker = _gat._getTracker(googleTracker);
		pageTracker._trackPageview();
	} catch (err) { }
	
	function TrackGoogleLinkClick(link, category) {
		try {
			var pageTracker = _gat._getTracker(googleTracker);
			pageTracker._trackEvent(category, link.attr('title'));
			setTimeout('document.location = "' + link.attr('href') + '"', 100)
		} catch (err) { }
	}
</script>
