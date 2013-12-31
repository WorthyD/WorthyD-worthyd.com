<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Interior.Master" Inherits="System.Web.Mvc.ViewPage<WorthyD.ViewModels.Resume.Index>" %>

<%@ Import Namespace="WorthyD.Framework.Constants.Routing" %>
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Resume
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
	<h2>My "Resume"</h2>
	<p>I'm currently a web developer for
		<a href="http://www.rockfishinteractive.com">Rockfish Interactive</a>
		and a volunteer web master for
		<a href="http://www.nwatroop107.com">NWA BSA Troop 107</a>. </p>
	<p>I have an extreme passion for web development that spawned from a desire to make video games when I was younger. I have a
		thirst for knowledge and I'm always up to learning something new. I'm practically jack of all trades when it comes to .Net
		web development, but my primary interest is in front end development (HTML, CSS, and Javascript).
		<%--I'm currently experimenting
        to learn PHP and MySql. I'm thinking about messing with XNA studio in the future and see if I have any skill in game development.--%></p>
	<p>I've been involved building a site that has over a million users and been apart of a team that built sites that were capable
		of handling over a million hits a day, according to load testing. I've come to really enjoy front end optimization. I've
		frequently used image sprites and automated Javascript and CSS compression to cut down on http requests and page size.  I'm always brushing up on <a href="http://developer.yahoo.com/yslow/help/">YSlow Rules</a> and <a href="http://code.google.com/speed/page-speed/docs/rules_intro.html">Google Page Speed Rules</a>. </p>
	<div id="resumePage">
		<!--        Todo:Graph of interest.-->
		<h4>I have experience in the following languages/platforms</h4>
		<ul class="multiCol twoCol">
			<li>VB</li>
			<li>C#</li>
			<li>.Net</li>
			<li>MVC</li>
			<li>AJAX</li>
			<li>Javascript</li>
			<li>jQuery</li>
			<li>SQL</li>
			<li>LINQ</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>PSD to HTML</li>
			<li>Flash</li>
			<li>Flex</li>
			<li>AS3</li>
		</ul>
		<h4>Currently Learning/Studying</h4>
		<ul class="multiCol twoCol">
			<li>PHP</li>
			<li>MySQL</li>
			<li>Wordpress</li>
			<li>Silverlight</li>
			<li>XNA Studio</li>
			<%--<li>Django</li>
            <li>Typography</li>--%>
			<li>SEO</li>
			<li>Usability</li>
		</ul>
		<h4>Business Apps I have experience with</h4>
		<ul class="multiCol threeCol">
			<li>VS 2008 & 2010</li>
			<li>IIS 7.5</li>
			<li>VSS</li>
			<li>SVN</li>
			<li>Mercurial</li>
			<li>Photoshop</li>
			<li>Dreamweaver</li>
			<li>SQL Server 2008</li>
			<li>Office 2010</li>
		</ul>
		<h4 class="collapse">My Work Ethic</h4>
		<p>I have a strong work ethic that I learned from my Father, earning Eagle in Boy Scouts, and highschool band. You must get
			the job done properly no matter how long it takes and how many times you band your head on your desk. Never build something
			you aren't proud of. Perfect practice makes perfect. </p>
		<%--<h4>Hobby HTML</h4>
        <p>I really enjoy coding HTML and CSS. It's like playing with LEGOs for me. However, without instructions (a design) I just
            build crazy functional pieces that doesn't look pretty. </p>--%>
		<%--<p>I have a lot of experience developing social style websites that include larege numbers of users. - Supplier Hub, MyWalmart,
            & Playnextlevel.com </p>--%>
		<h4 class="collapse">Previous Work Experience</h4>
		<ul>
			<li>
				<h5>Harps</h5>
			</li>
			<ul>
				<li>Started in 2004 as a stocker and finished in late in 2007 as a manager trainee</li>
				<li>Positions Held: Stocker, Checker, Closing Manager, Frozen/Dairy Manager, Receiving Manager and Store Manager Trainee.</li>
				<li>As a manager trainee I completed about 75% of the training required. Trainees were frequently sent to setup new stores and
					delayed further training</li>
				<li>
				Left to pursue a career in Web Development. </ul>
			<li>
				<h5>B&E Paintball Supplies</h5>
			</li>
			<ul>
				<li>Served as the Assistant Manager, Lead Gun Technician, and Head Referee (for tournament series) from 2003 until 2007.
				</li>
				<li>Assistant Manager: I assisted customers find suitable equipment, fielded questions for newer players, give advice for customers,
					place orders and take over Manager duties when manager wasn't present.</li>
				<li>Lead Gun Technician: Perform repairs, general maintenance, repair estimates, and diagnostics on Paintball Markers(guns).</li>
				<li>Head Referee: Approx 5 tournaments a year. Perform the duties of a head referee which include: Explanation of game rules
					and regulations to players and inforce them. Keep score and handle any disputes or arguments.</li>
			</ul>
		</ul>
		<h4 class="collapse">Academic Achievements</h4>
		<ul>
			<li>
				<h5>College</h5>
				<ul>
					<li>Alpha Phi Omega Service Fraternity</li>
					<li>University of Arkansas Paintball Team - <em>Founding Member & Team Captain for Fall 05</em></li>
				</ul>
			</li>
			<li>
				<h5>Highschool</h5>
				<ul>
					<li>National Honor Society</li>
					<li>Technology Honor Society</li>
					<li>All-Region Band</li>
				</ul>
			</li>
			<li>National Honor Society</li>
			<li>Technology Honor Society</li>
			<li>Band All Region</li>
		</ul>
		<h4 class="collapse">Scouting Achievements</h4>
		<ul>
			<li>Earned "God and Me" with Bears in 1992/1993 from First United Methodist Church</li>
			<li>Eared Arrow of Light with Pack 425 and crossed over to Troop 107 in 1995</li>
			<li>Joined The Order of the Arrow in 1998</li>
			<li>Became member of "Brotherhood" in OA in 2000</li>
			<li>Eared Eagle Rank with Troop 107 in 2001</li>
			<li>Became Assistant Scoutmaster to Troop 107 March 2008</li>
			<li>Became a fully trained Scoutmaster in March 2009</li>
		</ul>
	</div>
</asp:Content>
<%--<asp:Content ID="Content8" ContentPlaceHolderID="SideBarContent" runat="server">
    <% Html.RenderPartial("_RightColumnLinks"); %>
</asp:Content>--%>
<asp:Content ID="Content3" ContentPlaceHolderID="ExtraCSS" runat="server">
	<style>
		
	</style>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ExtraScript" runat="server">
	<script>
		$(function () {
			var hide = '- Hide';
			var show = '+ Show';
			$('<a/>', {
				'class': 'expander',
				text: show,
				click: function () {
					var hyp = $(this);
					hyp.parent('h4').next('ul, p').slideToggle('slow', function () {
						var l = $(this);
						if (l.is(':visible')) {
							hyp.text(hide);
						} else {
							hyp.text(show);
						}
					});
				}
			}
        ).hover(function () { $(this).css('cursor', 'pointer') }).appendTo('.collapse');
		});
		//$("<div/>", {
		//  "class": "test",
		//  text: "Click me!",
		//  click: function(){
		//    $(this).toggleClass("test");
		//}
		///}).appendTo("body");

	</script>
</asp:Content>
