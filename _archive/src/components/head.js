import React from "react"
import { Helmet } from "react-helmet"

import "../styles/_base.scss"

export const Head = () => {

  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Daniel Worthy - North West Arkansas Web Developer, Carpenter and Geek"
      />
      <meta
        name="keywords"
        content="Northwest Arkansas Web Developer, NWA Dev, Northwest Arkansas Carpenter, Daniel Worthy, WorthyD, Tech Blog, Geek Blog, Carpentry Blog"
      />

      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.1/js/all.js"
      ></script>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}
