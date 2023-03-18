import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchBlogData } from "@store/slices/blog.slice";
import { BlogType } from "@utils/types";
import { useEffect } from "react";

const renderBlogs = (blogs: BlogType[]) => {
  return blogs.map(({ title, titleHighlight, description }, index) => (
    <div
      key={index}
      className="flex flex-col text-left md:flex-row justify-between sm:grid-cols-2 sm:gap-0"
    >
      <div className="my-8 md:w-1/2 lg:w-1/2">
        <h2 className="text-h2 font-light leading-normal">
          {title} <span className="text-green-500">{titleHighlight}</span>
        </h2>
      </div>
      <div className="my-8 md:w-1/2 lg:w-1/2">
        <h5 className="text-h5 font-light leading-9">{description}</h5>
      </div>
    </div>
  ));
};

export default function CardFour() {
  const BLOGS = useAppSelector((state) => state.blogData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogData());
  }, []);

  return (
    <section className="bg-blue-500">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 lg:py-20 text-white-500 text-center">
        <h5 className="text-h5 font-light leading-9">Our Blog</h5>
        <h2 className="text-h2 my-5 font-light leading-11">
          Value proposition accelerator product management venture
        </h2>
        <hr className="border-white-500 my-16" />
        {renderBlogs(BLOGS.blog.blogs)}
      </div>
    </section>
  );
}
