import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
// import { TagTabs } from './TagTabs'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <div className="flex flex-wrap">{/* <TagTabs /> */}</div>
        <div className="flex flex-wrap">
          {posts &&
            posts.map(({ node: post }) => (
              <div className="w-1/2" key={post.id}>
                {/* <Link
                    className="text-2xl no-underline text-black mb-1"
                    to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>

                  <p className="text-sm mb-4">{post.frontmatter.date}</p>

                  <p className="leading-normal mb-4">{post.excerpt}</p>
                  <Link className="btn btn-blue" to={post.fields.slug}>
                    Keep Reading →
                  </Link> */}
                <img
                  src={post.frontmatter.imageUrl}
                  alt=""
                  width="200px"
                  height=""
                  className="w-full h-full"
                />
              </div>
            ))}
        </div>
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                imageUrl
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
