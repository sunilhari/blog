import React from "react";
import { Link } from "gatsby";
const Post = ({ title, slug, date, description, timeToRead }) => (
  <li className="w-full px-6 flex flex-col flex-grow flex-shrink">
    <Link to={slug} className="flex flex-wrap no-underline hover:no-underline">
      <div className="w-full font-bold text-xl text-gray-900 px-6 py-3">
        {title}
      </div>
      <p className="text-gray-800 font-serif text-base px-6 ">{description}</p>
      <div className="w-full font-bold  text-gray-500 px-6 py-3">{date}</div>
    </Link>
  </li>
);

export default Post;
