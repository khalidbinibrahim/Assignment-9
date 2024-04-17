import { Helmet } from "react-helmet-async";

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury | Blog</title>
            </Helmet>
            <div className="mb-24">
                <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl mb-4">Blog</h2>
                <p className="font-poppins font-normal text-[#878787] text-center">A blog, short for weblog, is a frequently updated web page used for personal commentary or <br /> business content. Blogs are often interactive and include sections at the bottom of individual blog posts where readers can leave comments.</p>
            </div>
        </div>
    );
};

export default Blog;