import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout style={{ color: `teal` }}>
    <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </Layout>
)
