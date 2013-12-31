<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Interior.Master" Inherits="System.Web.Mvc.ViewPage<WorthyD.ViewModels.Portfolio.Index>" %>
<asp:Content ID="Content3" ContentPlaceHolderID="TitleContent" runat="server">
	Portfolio
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Portfolio</h2>
    <div id="portfolio">
       
		 <div class="portItem">
            <a href="http://unlikestuff.com" id="unlikeStuff" class="siteLogo"></a>
            <div class="portDesc">
                <h3><a href="http://unlikestuff.com">UnlikeStuff.com</a></h3>
                <p>Little project I built after getting click jacked into a Facebook like. </p>
                <span>.Net MVC, Annoyance, Rage</span>
            </div>
        </div>
        <div class="portItem">
            <a href="http://www.playnextlevel.com" id="pnlLogo" class="siteLogo"></a>
            <div class="portDesc">
                <h3>
                    <a href="http://www.playnextlevel.com">Play Next Level</a></h3>
                <p>This is a really great site that helps highschool football students get recruited to the next level. I was brought onto the
                    project shortly before it was taken out of beta in May 2010.<br />
                    <br />
                    Our company's blog post on this product can be found
                    <a href="http://www.rockfishblog.com/entries/2010/3/29/are_you_ready_for_t.aspx">here</a>. </p>
                <span>.Net MVC, SQL, jQuery</span>
            </div>
        </div>
        <div class="portItem">
            <a href="http://rockfishinteractive.com/casestudy/mywalmart.aspx" id="myWM" class="siteLogo"></a>
            <div class="portDesc">
                <h3>
                    <a target="_blank" href="http://rockfishinteractive.com/casestudy/mywalmart.aspx">MyWalmart.com</a></h3>
                <p>I was involved heavily in the development of this product for about a year and a half. This project lead to my interest in
                    front end development.
                    <br />
                    <br />
                    A case study on the product can be found
                    <a target="_blank" href="http://rockfishinteractive.com/casestudy/mywalmart.aspx">here</a>
                </p>
                <span>Asp.Net, Linq, jQuery</span>
            </div>
        </div>
        <div class="portItem">
            <a href="http://nwatroop107.com" id="troop107" class="siteLogo"></a>
            <div class="portDesc">
                <h3>
                    <a href="http://nwatroop107.com">NWA Troop 107</a></h3>
                <p>I'm currently the webmaster for my church's boyscout troop. I assist scouts in updating the website with events. We're currently
                    converting content from a different content management to Wordpress. </p>
                <span>Wordpress, PHP, MySQL</span>
            </div>
        </div>
        <div class="portItem">
            <a href="http://479paintball.com" id="pbLogo" class="siteLogo"></a>
            <div class="portDesc">
                <h3>
                    <a href="http://nwapaintball.proboards.com/">NWA Paintball</a>/<a href="http://479paintball.com">479Paintball</a></h3>
                <p>I was involved in creating an online community using proboards.com. The site was started in 2003 on Wild World Paintball's
                    website and ported over to its own site in 2004. The community grew to a maximum of about 500 users with 100 regularly active.
                    I lead a team of 3 other moderators to maintain the boards and horde away trolls. In 2007, the site security was compromised
                    and all content was lost. In an attempt to respark interest we moved to 469paintball.com using phpBB.<br />
                    <em>These sites have been inactive for a while.</em></p>
                <span>proboards.com, later phpBB</span>
            </div>
        </div>
    </div>
</asp:Content>
<%--<asp:Content ID="Content4" ContentPlaceHolderID="SideBarContent" runat="server">
    <% Html.RenderPartial("_RightColumnLinks"); %>
</asp:Content>--%>
<asp:Content ID="Content2" ContentPlaceHolderID="ExtraScript" runat="server">
</asp:Content>
