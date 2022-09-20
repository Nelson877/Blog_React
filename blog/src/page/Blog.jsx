import React, { useState, useEffect } from "react";
import Chip from "../components/Chip";
import EmptyList from "../components/EmptyList";
import { blogList } from "../config/data";
import { Link, useParams } from "react-router-dom";
import "../page/Blog.css";
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  });

  return (
    <div className="blog">
      <Link className="blog-goBack" to="/">
         <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {
        blog ?( <div className="blog__wrap">
<header className="blog__header">
  <p className="blog__date">Published{blog.creatdAt}</p>
  <h1 className="blog__title">{blog.title}</h1>
  <div className="blog__subCategory">
    {blog.subCategory.map((category,index)=>(
    <div className="blog__subCategory__Two">
      <Chip key={index}  label={category}/>
      </div>
        ))}
  </div>
</header>
<img src={blog.cover} alt="image__cover" className="blog__imageCover" />
<p className="blog__desc">{blog.description}</p>
        </div>
        ):(
          <EmptyList/>
        )}
    </div>
  );
};

export default Blog;

// import React, { useState, useEffect } from "react";
// import Chip from "../components/Chip";
// import EmptyList from "../components/EmptyList";
// import { blogList } from "../config/data";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import "../page/Blog.css";

// const Blog = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     let blog = blogList.find((blog) => blog.id === parseInt(id));
//     if (blog) {
//       setBlog(blog);
//     }
//   }, []);

//   return (
//     <>
//       <Link className="blog-goBack" to="/">
//         <span> &#8592;</span> <span>Go Back</span>
//       </Link>
//       {blog ? (
//         <div className="blog-wrap">
//           <header>
//             <p className="blog-date">Published {blog.createdAt}</p>
//             <h1>{blog.title}</h1>
//             <div className="blog-subCategory">
//               {blog.subCategory.map((category, i) => (
//                 <div key={i}>
//                   <Chip label={category} />
//                 </div>
//               ))}
//             </div>
//           </header>
//           <img src={blog.cover} alt="cover" />
//           <p className="blog-desc">{blog.description}</p>
//         </div>
//       ) : (
//         <EmptyList />
//       )}
//     </>
//   );
// };

// export default Blog;
