import React from "react"
import { Link } from "gatsby"

import "./index.scss"
import MainLayout from "../layouts/main"
import ResumeComponent from '../components/resume';

const ResumePage = () => <MainLayout>
    <ResumeComponent></ResumeComponent>
</MainLayout>

export default ResumePage
