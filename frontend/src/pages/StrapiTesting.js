import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StrapiTesting = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from Strapi API
    const fetchBlog=async()=>{
try{
   const response=await axios.get('http://localhost:1337/api/blogs');
 setBlogs(response.data.data);
}
catch(error){
  console.error('Error fetching blogs from Strapi:', error);
}
    }
    fetchBlog();
   
      
     
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h2>{blog.name}</h2>
            <p>{blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StrapiTesting;
