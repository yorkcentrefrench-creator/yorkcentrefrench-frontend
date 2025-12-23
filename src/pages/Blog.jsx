import React from "react";

const Blog = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-36">
      <div className="container mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Blog
        </h1>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`https://frenchforpr.com/wp-content/uploads/2025/11/NCLC-levels-explained-300x169.png`}
                alt={`Blog Post ${item}`}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                  Blog Post Title {item}
                </h2>

                <p className="text-gray-500 text-sm mb-3">
                  Published on: 2024-01-{item < 10 ? `0${item}` : item}
                </p>

                <p className="text-red-700 mb-5 leading-relaxed">
                  This is a brief description of blog post {item}. It provides
                  an overview of the content and entices readers to learn more.
                </p>

                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
