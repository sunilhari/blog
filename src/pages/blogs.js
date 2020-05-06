import React, { useContext, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Post from "../components/PostLink";
import PageContext from "../context/PageContext";

const Blogs = props => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  const { isOpen, toggleMenu } = useContext(PageContext);
  useEffect(() => {
    isOpen && toggleMenu();
  }, []);
  return (
    <Layout
      pathname={props.location.pathname}
      title={siteTitle}
      seoTitle={"My Writings"}
      pageHeading="All Posts"
    >
      <div className="flex flex-wrap justify-between pt-12 -mx-6">
        <ol>
          {posts.map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug;
            const categories = node.frontmatter.categories
              ? node.frontmatter.categories.split(",")
              : [];
            const slug = node.fields.slug;
            const timeToRead = node.timeToRead;
            const date = node.frontmatter.date;
            const description = node.frontmatter.description || node.excerpt;
            return (
              <Post
                key={node.fields.slug}
                date={date}
                title={title}
                slug={slug}
                description={description}
                timeToRead={timeToRead}
                categories={categories}
              />
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};
export default Blogs;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            categories
          }
          timeToRead
        }
      }
    }
  }
`;
