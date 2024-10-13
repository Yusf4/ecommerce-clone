import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StrapiTesting = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from Strapi API
    axios.get('http://localhost:1337/blog')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs from Strapi:', error);
      });
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StrapiTesting;
