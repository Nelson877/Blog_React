import React from "react";
import "../components/BlogItem.css";
import Chip from "./Chip";
import {Link} from 'react-router-dom'

const BlogItem = ({ blog:{
  id,
  title,
  category,
  description,
  authorName,
  authorAvatar,
  createdAt,
  cover
} }) => {
  return (
    <div className=" ">
      <img src={cover} alt="image_Cover" className="blogitem__imae" />
    <Chip label={category} />
    <h3 className="blogitem__title">{title}</h3>
    <p className="blogitem__desc">{description}</p>
    <footer className="blogitem__footer">
      <div className="blogitem__author">
        <img src={authorAvatar} alt="authorImage" className="blogitem__authorImage" />
     <div>
     <h6 className="blogitem__authorname">{authorName}</h6>
   <p className="blogitem__create">{createdAt}</p>
     </div>
      </div>
      <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      
    </footer>
    
    </div>
  );
};

export default BlogItem;
