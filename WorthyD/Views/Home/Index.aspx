<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<WorthyD.ViewModels.Home.Index>" %>

<%@ Import Namespace="WorthyD.Framework.Constants.Routing" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
WorthyD.com - Daniel Worthy -	Coder, Gamer, Geek, Scouter
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ExtraCSS" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
	<div id="homePageRotator">
		<div id="featured">
			<img src="content/images/rotator/rotator_03.jpg" title="WorthyD - Coder, Geek, and Scouter" />
			<img src="content/images/rotator/rotator1_03.jpg" title="The Life of a Geek - My Blog Celebrating Being a Complete Dork" />
			<img src="content/images/rotator/rotator2_03.jpg" title="WorthyD's Tech Blog - Coding, Cool Apps, and Quick Tips" />
			<img src="content/images/rotator/rotator3_03.jpg" title="I collect geek and video game shirts. Checkout the Geek Blog for them." />
		</div>
	</div>
	<div id="homePageContent">
		<%--<div class="homepageColumn">
			<h2>My Recent Tweets </h2>
			<div id="tidyTweetFeed">
				<div id="twitter_div_1021" class="ttWidget">
					<ul id="twitter_update_list_1021">
						<li>Loading Tweets...</li></ul>
					<a id="tidytweet-link" href="http://tidytweet.com" title="Twitter feed provided by TidyTweet.com">
						<script type="text/javascript">
							document.write("<img src='" + document.location.protocol + "//tidytweet.com/_resources/Images/Icons/PoweredBy.png' alt='Powered by TidyTweet.com' />")
						</script>
					</a>
				</div>
				<script type="text/javascript">
					document.write(unescape("%3Cscript src='" + document.location.protocol + "//worthyd.tidytweet.com/MyTweets.widget?img=true&count=5' type='text/javascript'%3E%3C/script%3E"));
				</script>
			</div>
		</div>--%>
		<div class="homepageColumn wide">
			<h2>The Blogs</h2>
			<h3>
				<a href="/techblog/">My Tech Blog</a></h3>
			<p>Check out some of my quick code tips, useful applications, and rants about dumb code stuff!</p>
			<h3>
				<a href="/geekblog/">The Geek Blog</a></h3>
			<p>The life style of a geek. Game Reviews, Geek Shirts, General Rants and other cool stuff from me!</p>
			<h3>
				<a href="http://www.lostintechnology.com">Lost In Technology</a></h3>
			<p>This is one of my good friend's blog. I'm experience in technology and I've found it VERY useful.</p>
		</div>
		<div class="homepageColumn">
			<%--<h3>
				<% =Html.ActionLink("My \"Resume\"",Actions.Resume.Index, Controllers.Resume)  %>
			</h3>
			<p>Check out my ghetto resume</p>
			<h3>
				<% =Html.ActionLink("My Portfolio", Actions.Portfolio.Index, Controllers.Portfolio) %>
			</h3>
			<p>Some of the cool stuff I've worked on.</p>--%>
			<div class="socialIcons">
				<a href="http://www.facebook.com/worthyd" title="facebook">
					<img src="content/images/icons/facebook.png" alt="Facebook" /></a>
				<a href="http://www.twitter.com/worthyd" title="twitter">
					<img src="content/images/icons/twitter.png" alt="twitter" /></a>
				<a href="http://www.linkedin.com/in/worthyd" title="linked in">
					<img src="content/images/icons/linkedin.png" alt="linkedIn" /></a>
				<a href="http://foursquare.com/user/worthyd" title="foursqaure">
					<img src="content/images/icons/foursquare.png" alt="FourSquare" /></a>
				<a href="http://friendfeed.com/worthyd" title="Friend Feed">
					<img src="content/images/icons/friendfeed.png" alt="Unknown" /></a>
				<a href="http://www.stumbleupon.com/stumbler/worthyd/" title="stumble upon">
					<img src="content/images/icons/stumbleupon.png" alt="stumble upon" /></a>
				<a href="http://www.youtube.com/captainworthy" title="youtube">
					<img src="content/images/icons/youtube.png" alt="youtube" /></a>
				<a href="http://www.last.fm/user/worthyd" title="lastfm">
					<img src="content/images/icons/lastfm.png" alt="last fm" /></a>
				<a href="http://www.bungie.net/account/profile.aspx?player=CaptainWorthy" title="Bungie ">
					<img src="content/images/icons/bungie.png" alt="XBOX Live" /></a>
			</div>
			
		</div>
	</div>
</asp:Content>
<asp:Content ID="blah" ContentPlaceHolderID="ExtraScript" runat="server">
	<script src="../../Scripts/Jquery/jquery.jcarousel.min.js" type="text/javascript"></script>
	<script src="../../Scripts/Jquery/jquery.orbit.min.js" type="text/javascript"></script>
	<script>

		$(window).load(function () {
			$('#featured').orbit({
				"animation": "horizontal-slide",
				"advanceSpeed": 6000,
				"restartClock": true,
				"restartClockTimer": 2000,
				"timer": true
			});
		});
		$(document).ready(function () {
			$('a', '.socialIcons').click(function () {
				var link = $(this);

				TrackGoogleLinkClick(link, "HPIcons")
				return false;
			});
		});
    </script>
</asp:Content>
