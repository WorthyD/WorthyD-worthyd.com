import React from "react"
import { Link } from "gatsby"

import "./index.scss"
import MainLayout from "../layouts/main"
import HomeHeader from "../components/home-header"

const IndexPage = () => (
  <MainLayout>
    <HomeHeader></HomeHeader>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby blog with Markdown pages.</p>
    <p>
      <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link>
      <br />
    </p> */}
  </MainLayout>
)

export default IndexPage
