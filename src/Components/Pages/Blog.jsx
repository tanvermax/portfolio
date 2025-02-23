import React from "react";

const Blog = () => {

  const blogData = [
    {
      id: 1,
      title: "Where Passion and Purpose Collide",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      image: "https://zyan.vercel.app/images/blog/5.jpg",
      date: "10 JUNE",
      author: "admin",
      comments: 5,
    },
    {
      id: 2,
      title: "Where Passion and Purpose Collide",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      image: "https://zyan.vercel.app/images/blog/4.jpg",
      date: "10 JUNE",
      author: "admin",
      comments: 5,
    },
    {
      id: 3,
      title: "Where Passion and Purpose Collide",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      image: "https://zyan.vercel.app/images/blog/6.jpg",
      date: "10 JUNE",
      author: "admin",
      comments: 5,
    },
  ];
  return (
    <div className="relative top-20 left-10  px-16 pr-20">

    
      <h3 className="text-green-400 text-center font-semibold">ALL BLOG</h3>
      <h2 className="text-[10px] md:text-4xl font-bold text-center mt-2">
        Rafting Unique Experiences <br /> Inspiring Connections
      </h2>

      {/* Blog Cards */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-12 mt-5 md:max-w-6xl md:w-full w-[230px] pr-10 md:pr-0 mx-auto">
        {blogData.map((blog) => (
          <div key={blog.id} className="bg-gray-900 p-4 rounded-lg shadow-lg">
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full md:h-64 h-28   object-cover rounded-md"
              />
              <span className="absolute top-3 right-3 bg-green-500 text-black px-3 py-1 md:text-sm text-[8px]  font-bold rounded-md">
                {blog.date}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 flex items-center gap-2  md:text-sm text-[8px] ">
                <span>🟢 By {blog.author}</span> | <span>💬 Comments ({blog.comments})</span>
              </p>
              <h3 className="md:text-xl text-[8px]  font-bold mt-2">{blog.title}</h3>
              <p className="text-gray-400 mt-2 md:text-sm text-[8px] ">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
