import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section nav-spacer">
          <div className="">
            <div className="text-center m-8">
              <h1 className="pt-16 pb-8 text-white">Photo Gallery</h1>
            </div>
            <BlogRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
