import Profile from "@components/Profile/Profile";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchBlogData } from "@store/slices/blog.slice";
import { PROFILE_DIRECTION, ProfileType } from "@utils/types";
import { useEffect } from "react";

const renderProfile = (
  profiles: ProfileType[],
  direction: PROFILE_DIRECTION
) => {
  return profiles.map((profile, index) => (
    <Profile profile={profile} key={index} direction={direction} />
  ));
};

export default function CardThree() {
  const PROFILE = useAppSelector((state) => state.blogData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogData());
  }, []);

  return (
    <section className="bg-white-100 mb-12">
      <div className="max-w-4xl mx-auto px-4 pb-6 pt-16 text-left">
        <h5 className="text-h5 font-light leading-9 text-gray-500">Our team</h5>
        <h2 className="text-h2 my-5 font-light leading-11">
          The people behind the work
        </h2>
        <h5 className="text-h5 font-light leading-9 text-gray-500">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </h5>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-2 text-left">
        <div className="flex flex-col items-center md:flex-row justify-between sm:grid-cols-3 sm:gap-8">
          {renderProfile(
            PROFILE.blog.profile.slice(0, 3),
            PROFILE_DIRECTION.vertical
          )}
        </div>
        <div className="flex flex-col md:flex-row justify-between sm:grid sm:grid-cols-2 sm:gap-8 pt-32">
          {renderProfile(
            PROFILE.blog.profile.slice(3, PROFILE.blog.profile.length),
            PROFILE_DIRECTION.horizontal
          )}
        </div>
      </div>
    </section>
  );
}
