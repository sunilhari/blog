import React, { useEffect, useContext } from "react";
import { Link, graphql } from "gatsby";
import { Layout, RenderMDX } from "../components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PageContext from "../context/PageContext";

function Navigate({ type, classNames }) {
  if (type) {
    const { fields, frontmatter } = type;
    return (
      <Link
        className={` ${classNames} inline-block no-underline shadow-none hover:text-black hover:underline py-2`}
        to={fields.slug}
      >
        {frontmatter.title}
      </Link>
    );
  }
  return null;
}

function BlogHeader({ slug, title, categories, date }) {
  return (
    <>
      <Link to={slug}>
        <h1 className="font-bold font-sans break-words text-gray-900 pb-2 text-3xl md:text-4xl text-center">
          {title}
        </h1>
      </Link>
      <p className="pb-2 text-center">
        {categories.split(",").map((category, index) => (
          <label
            key={index}
            className="bg-blue-900 text-white text-sm font-bold mr-2  p-1"
          >
            #{category}
          </label>
        ))}
      </p>
      <p className="text-sm md:text-base font-normal text-gray-600 text-right">
        Published on {date}
      </p>
    </>
  );
}

function Template(props) {
  const post = props.data.mdx;
  const { previous, next, slug } = props.pageContext;
  const { title, date, categories = [] } = post.frontmatter;
  const { isOpen, toggleMenu } = useContext(PageContext);
  useEffect(() => {
    isOpen && toggleMenu();
  }, []);
  return (
    <RenderMDX>
      <Layout pathname={slug} title={title} seoTitle={title} pageHeading={""}>
        <div className="font-serif markdown">
          <BlogHeader
            slug={slug}
            title={title}
            categories={categories}
            date={date}
          />
          <MDXRenderer>{post.body}</MDXRenderer>
          <Navigate type={previous} classNames="float-left" />
          <Navigate type={next} classNames="float-right" />
        </div>
      </Layout>
    </RenderMDX>
  );
}

export default Template;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
      }
      timeToRead
    }
  }
`;
