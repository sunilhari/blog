import React from "react";
import { Link } from "gatsby";
const Post = ({ title, slug, date, description, timeToRead, categories }) => (
  <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg p-3">
      <Link
        to={slug}
        className="flex flex-wrap no-underline hover:no-underline"
      >
        <div className="w-full font-bold text-xl text-gray-900 px-6 py-6">
          {title}
        </div>
        <p className="text-gray-800 font-serif text-base px-6 mb-5">
          {description}
        </p>
      </Link>
    </div>
    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
      <div className="flex items-center justify-between">
        <p className="text-gray-600 text-xs md:text-sm">
          {timeToRead} MIN READ
        </p>
        <p className="text-gray-600 text-xs md:text-sm">{date} </p>
      </div>
    </div>
  </div>
);

export default Post;
