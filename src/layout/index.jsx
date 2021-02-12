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
      <div className="page-wrap">

  <header class="page-header">
          <Header></Header>
</header>
<nav class="page-nav">
    Nav
  </nav>
  <main class="page-main">
          {children}
          </main>
          <aside class="page-sidebar">
    Aside
  </aside>
  <footer class="page-footer">
          <Footer></Footer>

  </footer>
        </div>
    </div>
  );
}
