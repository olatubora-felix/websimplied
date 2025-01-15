import { BlogItem } from "./BlogItem";
import { posts } from "../constant/posts";
import { PaidCourses } from "./courses/PaidCourses";
const BlogArticles = () => {
  const paidCourses = [
    {
      title: "JavaScript Simplified",
      price: 200,
      image:
        "https://courses.webdevsimplified.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoiY3JieDNyem5odnB5dXJvaWZsaWNmemVqbjA2MCIsImRvbWFpbiI6ImNvdXJzZXMud2ViZGV2c2ltcGxpZmllZC5jb20ifQ.9iXDQAi5wnCxFZOv5kHNZziOlBY6iJaVf9dkDXJZIQQ",
      subTitle:
        "Instantly increase your earning potential and learn to build scalable projects in just 5 hours",
      id: 1,
    },
    {
      title: "Learn CSS Today",
      price: 450,
      image:
        "https://courses.webdevsimplified.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoiNnZ4czBteHc0ZGJ1OGVzNGZvZnBudDF5cWo0eSIsImRvbWFpbiI6ImNvdXJzZXMud2ViZGV2c2ltcGxpZmllZC5jb20ifQ.uMPswt7qU39N_gM6kOFQbF65IGIfppZVa7JqlGgSxnI",
      subTitle:
        "Learn modern CSS features and advanced CSS concepts in less than a day with this highly focused project-based CSS course",
      id: 2,
    },
    {
      title: "TypeScript Simplified",
      price: 780,
      image:
        "https://courses.webdevsimplified.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoiY3JieDNyem5odnB5dXJvaWZsaWNmemVqbjA2MCIsImRvbWFpbiI6ImNvdXJzZXMud2ViZGV2c2ltcGxpZmllZC5jb20ifQ.9iXDQAi5wnCxFZOv5kHNZziOlBY6iJaVf9dkDXJZIQQ",
      subTitle:
        "Instantly increase your earning potential and learn to build scalable projects in just 5 hours",
      id: 3,
    },
  ];
  return (
    <article className="wrapper px-5 py-[2.813rem] md:space-y-10 space-y-8">
      {posts.map((post, index) => (
        <BlogItem post={post} key={`${post.id}-${index}`} />
      ))}

      {paidCourses.map((course, i) => (
        <PaidCourses {...course} key={`${course.id}-${i}`} />
      ))}
    </article>
  );
};

export default BlogArticles;
