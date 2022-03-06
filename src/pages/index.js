import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"



export default ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>This is link to post</h1>
    {data.allBloggerPost.edges.map(( {node} ) => (
        <div>
          <Link to={node.slug}>

          <p>{node.title}</p>
          </Link>
          <img src={node.images[0].url} alt="" />
        </div>
      ))}
  </Layout>
)

export const pageQuery = graphql`
query {
  allBloggerPost {
    edges {
      node {
        title
        slug
        images {
          url
        }
      }
    }
  }
}`

