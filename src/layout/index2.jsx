import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";

import "../styles/_base.scss"

import "./index.scss";
import { Footer } from "../components/footer"

import Header from "../components/header";


export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
        <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.1/js/all.js"
      ></script>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
      </Helmet>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
