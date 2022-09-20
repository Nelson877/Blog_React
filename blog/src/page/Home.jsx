// import React, { useState } from "react";
// import "../page/Home.css";
// import Header from "../components/Header";
// import Search from "../components/SearchBar";
// import BlogList from "../components/BlogList";
// import { blogList } from "../config/data";
// import EmptyList from "../components/EmptyList";
// // import Chip from '../components/Chip'

// const Home = () => {
//   const [blogs, setBlogs] = useState(blogList);
//   const [searchKey, setSearchKey] = useState("");

//   // Search submit
//   const handleSearchSubmit = (event) => {
//     event.preventDefaut();
//     handleSearchResults();
//   };

//   //Clear search and show all blogs
//   const handleClearSearch = () => {
//     setBlogs(blogList);
//     setSearchKey("");
//   };

//   // Search for blogs my category
//   const handleSearchResults = () => {
//     const allBlogs = blogList;
//     const filterdBlogs = allBlogs.filter((blog) =>
//       blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
//     );

//     setBlogs(filterdBlogs);
//   };

//   return (
//     <div className="home">
//       {/* Page Header */}
//       <Header />

//       {/* Search Bar */}
//       <Search
//         value={searchKey}
//         clearSearch={handleClearSearch}
//         formSubmit={handleSearchSubmit}
//         handleSearchkey={(e) => setSearchKey(e.target.value)}
//       />
//       {/* Blog List & Empty List */}

//       {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
//       {/* <EmptyList /> */}
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import "../page/Home.css";
import Header from "../components/Header";
import Search from "../components/SearchBar";
import BlogList from "../components/BlogList";
import { blogList } from "../config/data";
import EmptyList from "../components/EmptyList";
// import Chip from '../components/Chip'

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <Search
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ?<EmptyList />: <BlogList blogs={blogs}/> }
    </div>
  );
};

export default Home;

