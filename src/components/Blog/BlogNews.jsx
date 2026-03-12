import React from "react";
const blogData = [
  {
    id: 1,
    image: "assets/img/blog/blog_sm_1.jpg",
    title: "Performance Upgrades and Customization",
    description:
      "Discover how our qualified technicians use the latest tools and technology to enhance your vehicle's performance and handling.",
    link: "services-single.html",
  },
  {
    id: 2,
    image: "assets/img/blog/blog_sm_2.jpg",
    title: "From Garage to Glory: Transform Your Vehicle's Health",
    description:
      "Learn about the importance of regular maintenance and how Pioneer's periodic services keep your car running at peak condition.",
    link: "services-single.html",
  },
  {
    id: 3,
    image: "assets/img/blog/blog_sm_3.jpg",
    title: "The Roadmap to Reliability Essential Car Care Tips",
    description:
      "Expert advice on tyre care, wheel alignment, and essential checks to ensure road safety and extend your vehicle's lifespan.",
    link: "services-single.html",
  },
  {
    id: 4,
    image: "assets/img/blog/blog_sm_4.jpg",
    title: "From Garage to Glory: Transform Your Vehicle's Health",
    description:
      "Pioneer's multi-branch network across the UAE ensures quality automotive care is always within your reach, wherever you are.",
    link: "services-single.html",
  },
];
const BlogNews = () => {
  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="d-flex justify-content-center">
        <div className="sticky-content style-two container">
          <div className="content style_2">
            <div className="service">
              {blogData.map((blog) => (
                <div
                  key={blog.id}
                  className="service-card type-two"
                  data-aos="fade-left"
                >
                  <a href={blog.link} className="card-img">
                    <img src={blog.image} className="ak-bg" alt={blog.title} />
                  </a>
                  <div className="card-info">
                    <a href={blog.link} className="card-title">
                      {blog.title}
                    </a>
                    <p className="card-desp">{blog.description}</p>
                    <a href={blog.link} className="more-btn">
                      VIEW MORE
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar style-two width-none">
            <div className="services-content">
              <div className="ak-section-heading ak-style-1">
                <div
                  className="background-text"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  News
                </div>
                <h2 className="ak-section-title">Blog / News</h2>
                <p className="ak-section-subtitle">
                  Stay updated with the latest automotive tips, <br />
                  maintenance guides, and Pioneer Car Service <br />
                  Center news from across the UAE.
                </p>
              </div>
              <div className="ak-height-50 ak-height-lg-10"></div>
              <a href="" className="more-btn">
                View All Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogNews;
