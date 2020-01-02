import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout style={{ color: `purple`, margin: `3rem auto`, maxWidth: 600 }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!" />

    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)
