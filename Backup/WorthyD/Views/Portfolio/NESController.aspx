<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Interior.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    NESController
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <style>
        /*#projectContainer div, #projectContainer li { border: 1px solid black; }*/
        /*
        Primary Colors:
        grey:74798c;
        red: ca070d
        */
        
        #controllerBody { width: 600px; height: 265px;  background:#74798c; position:relative;}
        #controlsContainer { height: 200px; width: 565px;  position:absolute; top:42px;  left:17px;  background:#000;}
        /*D-Pad*/
        #dPadContainer { width: 175px; float: left; }
        #dPadBorder { margin: 50px auto 0 auto; width: 125px; height: 125px; background:#fff }
        #dPad { backgroung:#000;}
        
        
        /*centerControls*/
        #centerControls { width: 170px; float: left; }
        #centerControls li { height: 30px; margin: 6px 0;  background:#74798c;}
        #centerControls li:first-child { margin-top: 0px; }
        #centerControls li:last-child { margin-bottom: 0px; }
        #centerControls li.mainButtons { height: 64px; background:#fff}
        .ssBox .narrowButtons li {background:#000}
        
        #rightControls { float: left; width: 214px; }
        #rightControls #nintendoLogo{margin:35px; height:20px;}
        #rightControls #anbButtons {margin-left:35px;}
        #rightControls li { display: inline-block; width: 75px; }
        #rightControls li .buttonBox{width:52px; height:52px; background:#fff; padding:10px; border-radius:25px;}
        #rightControls li .buttonBox .button{ width:52px; height:52px;  background:#ca070d;}
        #rightControls li .btnText{float:right; height:12px;width:12px;}
        </style>
    blah
    <div id="projectContainer">
        <div id="controllerBody">
            <div id="controlsContainer">
                <div id="dPadContainer">
                    <div id="dPadBorder">
                        <div id="dPad"></div>
                    </div>
                </div>
                <div id="centerControls">
                    <ul>
                        <li></li>
                        <li></li>
                        <li>Select Start</li>
                        <li class="mainButtons">
                            <div class="ssBox">
                                <ul class="narrowButtons">
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </li>
                        <li></li>
                    </ul>
                </div>
                <div id="rightControls">
                    <div id="nintendoLogo"></div>
                    <div id="anbButtons">
                        <ul>
                            <li>
                                <div class="buttonBox">
                                    <div class="button"></div>
                                </div>
                                <div id="Abtn" class="btnText"></div>
                            </li>
                            <li>
                                <div class="buttonBox">
                                    <div class="button"></div>
                                </div>
                                <div id="Bbtn" class="btnText"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ExtraCSS" runat="server">
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="SideBarContent" runat="server">
    About this project
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="ExtraScript" runat="server">
</asp:Content>
