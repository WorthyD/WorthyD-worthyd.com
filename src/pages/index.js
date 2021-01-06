import React from "react"
import { Link } from "gatsby"

import "./index.scss"
import MainLayout from "../layouts/main"
import HomeHeader from "../components/home-header"
import HomeBody from "../components/home-body"

const IndexPage = () => (
  <MainLayout>
    <HomeHeader></HomeHeader>
    <HomeBody></HomeBody>
  </MainLayout>
)

export default IndexPage
