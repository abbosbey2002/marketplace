import React, { useState } from 'react'

function Articele() {

  const [next, setNext] = useState(0);

  let lst =3999;

  const Next = () =>{
    if(next <= 3999){
      setNext(next + 200);
    }else{
      setNext(0);
    }
  }

  const Last = () => {
    if(next >= 200){
      setNext(next - 200);
    }else{
      setNext(3999);
    }
  }
 
  return (
    <div className="blog-area pt-100 pb-70">
    <div className="container">
      <div className="section-title">
        <span className="top-title">Our Blog</span>
        <h2>Latest News &amp; Articles</h2>
      </div>
      <div className="blog-slider owl-carousel owl-theme owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              transform: `translate3d(-${next}px, 0px, 0px)`,
              transition: "all 1s ease 0s",
              width: 5264
            }}
          >
            <div
              className="owl-item cloned"
              style={{ width: 638, marginRight: 20 }}
            >
              <div className="single-blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/blog-1.webp" alt="blog" />
                  </a>
                </div>
                <div className="date">
                  <span>12 November 2022</span>
                </div>
                <div className="single-blog-content">
                  <ul className="p-0 m-0">
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/admin.svg" alt="admin" />
                      </div>
                      By<a href="author.html">Admin</a>
                    </li>
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/comment.svg" alt="comment" />
                      </div>
                      No Comment
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      Which Allows You To Pay Down Insurance Bills Agile
                      Frameworks To Provide
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: 638, marginRight: 20 }}
            >
              <div className="single-blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/blog-2.webp" alt="blog" />
                  </a>
                </div>
                <div className="date">
                  <span>15 November 2022</span>
                </div>
                <div className="single-blog-content">
                  <ul className="p-0 m-0">
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/admin.svg" alt="admin" />
                      </div>
                      By<a href="author.html">Admin</a>
                    </li>
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/comment.svg" alt="comment" />
                      </div>
                      No Comment
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      Insurance Covers Risk Of Fiar Absence Of Fier Insurance
                      Serving
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: 638, marginRight: 20 }}>
              <div className="single-blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/blog-1.webp" alt="blog" />
                  </a>
                </div>
                <div className="date">
                  <span>12 November 2022</span>
                </div>
                <div className="single-blog-content">
                  <ul className="p-0 m-0">
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/admin.svg" alt="admin" />
                      </div>
                      By<a href="author.html">Admin</a>
                    </li>
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/comment.svg" alt="comment" />
                      </div>
                      No Comment
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      Which Allows You To Pay Down Insurance Bills Agile
                      Frameworks To Provide
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: 638, marginRight: 20 }}>
              <div className="single-blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/blog-2.webp" alt="blog" />
                  </a>
                </div>
                <div className="date">
                  <span>15 November 2022</span>
                </div>
                <div className="single-blog-content">
                  <ul className="p-0 m-0">
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/admin.svg" alt="admin" />
                      </div>
                      By<a href="author.html">Admin</a>
                    </li>
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/comment.svg" alt="comment" />
                      </div>
                      No Comment
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      Insurance Covers Risk Of Fiar Absence Of Fier Insurance
                      Serving
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="owl-item active"
              style={{ width: 638, marginRight: 20 }}
            >
              <div className="single-blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/blog-1.webp" alt="blog" />
                  </a>
                </div>
                <div className="date">
                  <span>12 November 2022</span>
                </div>
                <div className="single-blog-content">
                  <ul className="p-0 m-0">
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/admin.svg" alt="admin" />
                      </div>
                      By<a href="author.html">Admin</a>
                    </li>
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/comment.svg" alt="comment" />
                      </div>
                      No Comment
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      Which Allows You To Pay Down Insurance Bills Agile
                      Frameworks To Provide
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="owl-item active"
              style={{ width: 638, marginRight: 20 }}
            >
              <div className="single-blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/blog-2.webp" alt="blog" />
                  </a>
                </div>
                <div className="date">
                  <span>15 November 2022</span>
                </div>
                <div className="single-blog-content">
                  <ul className="p-0 m-0">
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/admin.svg" alt="admin" />
                      </div>
                      By<a href="author.html">Admin</a>
                    </li>
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/comment.svg" alt="comment" />
                      </div>
                      No Comment
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      Insurance Covers Risk Of Fiar Absence Of Fier Insurance
                      Serving
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: 638, marginRight: 20 }}
            >
              <div className="single-blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/blog-1.webp" alt="blog" />
                  </a>
                </div>
                <div className="date">
                  <span>12 November 2022</span>
                </div>
                <div className="single-blog-content">
                  <ul className="p-0 m-0">
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/admin.svg" alt="admin" />
                      </div>
                      By<a href="author.html">Admin</a>
                    </li>
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/comment.svg" alt="comment" />
                      </div>
                      No Comment
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      Which Allows You To Pay Down Insurance Bills Agile
                      Frameworks To Provide
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="owl-item cloned"
              style={{ width: 638, marginRight: 20 }}
            >
              <div className="single-blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="assets/images/blog/blog-2.webp" alt="blog" />
                  </a>
                </div>
                <div className="date">
                  <span>15 November 2022</span>
                </div>
                <div className="single-blog-content">
                  <ul className="p-0 m-0">
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/admin.svg" alt="admin" />
                      </div>
                      By<a href="author.html">Admin</a>
                    </li>
                    <li className="list-inline">
                      <div className="admin">
                        <img src="assets/images/blog/comment.svg" alt="comment" />
                      </div>
                      No Comment
                    </li>
                  </ul>
                  <h3>
                    <a href="blog-details.html">
                      Insurance Covers Risk Of Fiar Absence Of Fier Insurance
                      Serving
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-nav">
          <button type="button" role="presentation" onClick={Last} className="owl-prev">
            <i className="bx bx-chevron-left" />
          </button>
          <button type="button" role="presentation" onClick={Next} className="owl-next">
            <i className="bx bx-chevron-right" />
          </button>
        </div>
        <div className="owl-dots disabled" />
      </div>
    </div>
  </div>
  
  )
}

export default Articele
