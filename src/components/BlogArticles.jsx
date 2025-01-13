import { BlogItem } from "./BlogItem";
import { posts } from "../constant/posts";
const BlogArticles = () => {
  return (
    <article className="wrapper px-5 py-[2.813rem] md:space-y-10 space-y-8">
      {posts.map((post, index) => (
        <BlogItem
          image={post.image}
          title={post.title}
          subtitle={post.subtitle}
          key={`${post.id}-${index}`}
        />
      ))}

      {/* <!-- Paid Courses1 --> */}
      <section className="flex md:flex-row flex-col gap-6 items-center py-5">
        <div className="md:w-[606.6px] w-full">
          <img
            src="https://courses.webdevsimplified.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoiY3JieDNyem5odnB5dXJvaWZsaWNmemVqbjA2MCIsImRvbWFpbiI6ImNvdXJzZXMud2ViZGV2c2ltcGxpZmllZC5jb20ifQ.9iXDQAi5wnCxFZOv5kHNZziOlBY6iJaVf9dkDXJZIQQ"
            alt="JavaScript Simplified"
          />
        </div>
        <div className="flex-1 space-y-3">
          <h6 className="text-primary text-lg">$60</h6>
          <h2 className="text-dark-100 text-[1.688rem] font-bold">
            TypeScript Simplified
          </h2>
          <p className="font-openSans text-lg text-dark-100 font-light">
            Instantly increase your earning potential and learn to build
            scalable projects in just 5 hours
          </p>
          <button className="btn">View course</button>
        </div>
      </section>
      {/* <!-- Paid Courses2 --> */}
      <section className="flex md:flex-row flex-col gap-6 items-center py-5">
        <div className="md:w-[606.6px] w-full">
          <img
            src="https://courses.webdevsimplified.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoiNnZ4czBteHc0ZGJ1OGVzNGZvZnBudDF5cWo0eSIsImRvbWFpbiI6ImNvdXJzZXMud2ViZGV2c2ltcGxpZmllZC5jb20ifQ.uMPswt7qU39N_gM6kOFQbF65IGIfppZVa7JqlGgSxnI"
            alt="Learn CSS Today"
          />
        </div>
        <div className="flex-1 space-y-3">
          <h6 className="text-primary text-lg">$60</h6>
          <h2 className="text-dark-100 text-[1.688rem] font-bold">
            Learn CSS Today
          </h2>
          <p className="font-openSans text-lg text-dark-100 font-light">
            Learn modern CSS features and advanced CSS concepts in less than a
            day with this highly focused project-based CSS course
          </p>
          <button className="btn">View course</button>
        </div>
      </section>
      {/* <!-- Paid Courses3 --> */}
      <section className="flex md:flex-row flex-col gap-6 items-center py-5">
        <div className="md:w-[606.6px] w-full">
          <img
            src="https://courses.webdevsimplified.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoiY3JieDNyem5odnB5dXJvaWZsaWNmemVqbjA2MCIsImRvbWFpbiI6ImNvdXJzZXMud2ViZGV2c2ltcGxpZmllZC5jb20ifQ.9iXDQAi5wnCxFZOv5kHNZziOlBY6iJaVf9dkDXJZIQQ"
            alt="JavaScript Simplified"
          />
        </div>
        <div className="flex-1 space-y-3">
          <h6 className="text-primary text-lg">$60</h6>
          <h2 className="text-dark-100 text-[1.688rem] font-bold">
            TypeScript Simplified
          </h2>
          <p className="font-openSans text-lg text-dark-100 font-light">
            Instantly increase your earning potential and learn to build
            scalable projects in just 5 hours
          </p>
          <button className="btn">View course</button>
        </div>
      </section>
    </article>
  );
};

export default BlogArticles;
