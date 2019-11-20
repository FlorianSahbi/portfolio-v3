import React from "react"
import SEO from "../components/seo"
import Header from '../components/header'
import CurrentJob from '../components/currentJob'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Hobbies from '../components/hobbies'
import Article from '../components/article'

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" description="hi i am Florian Sahbi" lang="EN" />
      {/* <Header /> */}
      {/* <CurrentJob date={currentJob} /> */}
      <Projects />
      <Skills />
      <Hobbies />
      {/* <Article /> */}
    </>
  )
}

export default IndexPage
