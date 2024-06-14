import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import "../pages/BlogStyle.css"

function Blog() {
  return (
    <>
    <Header></Header>
   
    <header>
        <h1>Our Blog</h1>
    </header>
    <main><div style={{marginTop:"50px"}}>
        <section class="blog-post">
            <h2>Latest Trends in Hospital Management</h2>
            <p class="date">Posted on June 1, 2024 by Admin</p>
            <p>Hospital management is evolving rapidly with the advent of new technologies. In this post, we explore the latest trends and how they are transforming the healthcare industry...</p>
            <a href="post1.html" class="read-more">Read more</a>
        </section>
        <section class="blog-post">
            <h2>How Our App Improves Patient Care</h2>
            <p class="date">Posted on May 20, 2024 by Admin</p>
            <p>Our hospital management app is designed to enhance patient care through efficient and streamlined processes. Discover the key features that make our app a valuable tool for healthcare providers...</p>
            <a href="post2.html" class="read-more">Read more</a>
        </section>
        <section class="blog-post">
            <h2>Top Tips for Hospital Administrators</h2>
            <p class="date">Posted on May 10, 2024 by Admin</p>
            <p>Running a hospital efficiently requires a blend of strategic planning and practical know-how. Here are some top tips for hospital administrators to ensure smooth operations and excellent patient care...</p>
            <a href="post3.html" class="read-more">Read more</a>
        </section>
        </div>
    </main>
    <Footer></Footer>
    <footer>
        <p>&copy; 2024 Hospital Management App. All rights reserved.</p>
    </footer>


    </>
  )
}

export default Blog
