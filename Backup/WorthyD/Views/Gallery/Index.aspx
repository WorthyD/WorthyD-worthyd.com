﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/interior.Master" Inherits="System.Web.Mvc.ViewPage<WorthyD.ViewModels.Gallery.Index>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Index
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Geekorie</h2>
    <p>I've always had a fairly large collection of nerd and video game shirts. I've been "collecting" video game shirts since 2003
        or 2004. Back then, you could only get them at Hot Topic. You can get them just about anywhere now. My original shirt is
        the "Don't make me go Zelda on you". I have more Zelda shirts than any other video game franchise. I have a lot more geek
        attire. You can read about them on my
        <a href="/geekblog">geek blog.</a>
        I normally wear a geek shirt on Thursdays and a video game on Friday. I try to blog about them that day. </p>
    <h4>Game Shirts</h4>
    <ul class="galleryItems">
        <li>
            <a href="content/images/geek/bounty2.jpg" title="Shirt from Game Stop for Preording Metroid Prime 2">
                <img src="content/images/geek/thumb_bounty2.jpg" width="100" height="75" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/momkart.jpg" title="Hot Topic Shirt.  My wife got me this one.">
                <img src="content/images/geek/thumb_shirt_momkart.jpg" width="100" height="72" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/schoolqor.jpg" title="Shirt.Woot.com shirt">
                <img src="content/images/geek/thumb_schoolqor.jpg" width="100" height="75" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/swordplay.jpg" title="Game Stop shirt for preordering Zelda: 4 Sword Adventure">
                <img src="content/images/geek/thumb_swordplay.jpg" width="100" height="79" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/zelda.jpg" title="Hot Topic shirt. My original VG shirt.">
                <img src="content/images/geek/thumb_zelda.jpg" width="100" height="69" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/teammario.jpg" title="New shirt from JCPenny">
                <img src="content/images/geek/thumb_teamMario.jpg" width="100" height="78" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/ZeldaGreen.jpg" title="JCPenny from the clearance rack for $5">
                <img src="content/images/geek/thumb_ZeldaGreen.jpg" width="100" height="100" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/zeldaworn.jpg" title="Hot Topic shirt. ">
                <img src="content/images/geek/thumb_zeldaworn.jpg" width="100" height="113" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/mm2.jpg" title="Another hot topic shirt. Mine is black. Probably my favorite">
                <img src="content/images/geek/mm2.jpg" width="100" height="116" alt="" />
            </a>
        </li>
        <%-- <li>
            <a href="content/images/geek/bounty.jpg" title="">
                <img src="content/images/geek/thumb_bounty.jpg" width="100" height="75" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/bounty.jpg" title="">
                <img src="content/images/geek/thumb_bounty.jpg" width="100" height="75" alt="" />
            </a>
        </li>--%>
    </ul>
    <h4>Nerd Shirts</h4>
    <ul class="galleryItems">
        <li>
            <a href="content/images/geek/admiral.jpg" title="Shirt.Woot.com. It's totally a trap.">
                <img src="content/images/geek/thumb_admiral.jpg" width="100" height="75" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/soulmates.jpg" title="Shirt.Woot.com. Only LOTR shirt I have">
                <img src="content/images/geek/thumb_soulmates.jpg" width="100" height="75" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/cookie.jpg" title="$6 random shirt from Shirt.Woot.com. It's call the thirstiest cookie, but I call it cookie monster because he looks like Frankenstein">
                <img src="content/images/geek/thumb_cookie.jpg" width="100" height="75" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/will-not-fix.jpg" title="ThinkGeek.com shirt. Love it. ">
                <img src="content/images/geek/thumb_will-not-fix.jpg" width="100" height="105" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/tron.jpg" title="$6 random shirt from ThinkGeek.com">
                <img src="content/images/geek/thumb_tron.jpg" width="100" height="100" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/scrap-metal.jpg" title="$6 random shirt from ThinkGeek.com">
                <img src="content/images/geek/thumb_scrapmetal.jpg" width="100" height="132" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/warranty.jpg" title="ThinkGeek.com Christmas present.">
                <img src="content/images/geek/thumb_warranty.jpg" width="100" height="130" alt="" />
            </a>
        </li>
        <li>
            <a href="content/images/geek/workshirt-geek.jpg" title="Very awesome ThinkGeek.com shirt.">
                <img src="content/images/geek/thumb_workshirt-geek.jpg" width="100" height="110" alt="" />
            </a>
        </li>
    </ul>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ExtraCSS" runat="server">
    <style>
       
    </style>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ExtraScript" runat="server">
    <script type="text/javascript" src="scripts/jquery/jquery.lightbox-0.5.min.js"></script>
    <script>
        $(function () {
            $('.galleryItems a').lightBox();
        });
    </script>
</asp:Content>