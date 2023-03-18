import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchBlogData } from "@store/slices/blog.slice";
import { AboutNumberType } from "@utils/types";
import { useEffect } from "react";

const renderNumbers = (nums: AboutNumberType[]) => {
  return nums.map(({ count, title }, index) => (
    <div className="mt-10 sm:mt-0" key={index}>
      <p className="text-h1 font-light leading-none">{count}</p>
      <p className="mt-2 text-h4 font-light leading-6">{title}</p>
    </div>
  ));
};

export default function CardOne() {
  const ABOUT_NUMBERS = useAppSelector((state) => state.blogData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogData());
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20 text-blue-500 bg-white-100">
      <div className="max-w-4xl mx-auto text-center">
        <h5 className="text-h5 font-light leading-9 sm:leading-10">
          Our numbers
        </h5>
        <h2 className="text-h2 font-light leading-11">
          Handshake infographic mass market crowdfunding iteration.
        </h2>
      </div>
      <div className="mt-10 text-center sm:max-w-6xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
        {renderNumbers(ABOUT_NUMBERS.blog.aboutNumbers)}
      </div>
    </section>
  );
}
