<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<%@ Import Namespace="WorthyD.Framework.Constants.Routing" %>
<ul>
	<li>
		<% =Html.ActionLink("Home", Actions.Home.Index, Controllers.Home)%>
	</li>
	<li>
		<% =Html.ActionLink("Portfolio", Actions.Portfolio.Index, Controllers.Portfolio)%></li>
	<li>
		<% =Html.ActionLink("Resume", Actions.Resume.Index, Controllers.Resume)%></li>
	<%--    <li>
        <% =Html.ActionLink("Geekerie", Actions.Gallery.Index, Controllers.Gallery)%></li>
	--%>
	<li>
		<a href="/TechBlog">Tech Blog</a></li>
	<li>
		<a href="/GeekBlog">Geek Blog</a></li>
	<li>
		<% =Html.ActionLink("About Me", Actions.Home.AboutMe, Controllers.Home)%>
	</li>
	<li>
		<% =Html.ActionLink("Contact", Actions.Home.Contact, Controllers.Home)%>
	</li>
</ul>
