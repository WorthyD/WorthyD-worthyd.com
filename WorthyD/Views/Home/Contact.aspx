<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Interior.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Contact
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <%--<h2>Contact Me</h2>--%>
    <script type="text/javascript">        var host = (("https:" == document.location.protocol) ? "https://secure." : "http://"); document.write(unescape("%3Cscript src='" + host + "wufoo.com/scripts/embed/form.js' type='text/javascript'%3E%3C/script%3E"));</script>
    <script type="text/javascript">
        var z7x4a9 = new WufooForm();
        z7x4a9.initialize({
            'userName': 'worthyd',
            'formHash': 'z7x4a9',
            'autoResize': true,
            'height': '558'
        });
        z7x4a9.display();
    </script>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ExtraCSS" runat="server">
</asp:Content>

<asp:Content ID="Content5" ContentPlaceHolderID="ExtraScript" runat="server">
</asp:Content>
