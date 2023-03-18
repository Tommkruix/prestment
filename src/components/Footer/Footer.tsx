import { LogoIcon } from "@assets/icons";
import { LIST_MENUS } from "@store/slices/blog.data";
import { FooterListType } from "@utils/types";

const renderList = (lists: FooterListType[]) => {
  return (
    <ul>
      {lists.map(({ title, rightLabel }, index) => (
        <li key={index} className="mb-6 transition-colors duration-200">
          <a href="#/">{title}</a>
          {rightLabel && (
            <span className="bg-green-500 text-span text-blue-500 rounded-full ml-2 font-semibold py-2 px-3">
              {rightLabel}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

function Footer() {
  return (
    <footer className="bg-white-100 pt-4 pb-8 xl:pt-8">
      <div className="max-w-screen-lg px-4 mx-auto text-gray-500 xl:max-w-screen-xl sm:px-6 md:px-8">
        <ul className="flex flex-wrap justify-center pb-8 text-h5 font-light">
          <li className="w-screen my-8 md:w-2/5 lg:w-2/5">
            <div className="text-center lg:text-left md:text-left">
              <LogoIcon className="inline-block md:display-block lg:display-block" />
              <h6 className="text-h6 font-light mt-4">
                Social media validation business model <br /> canvas graphical
                user interface launch <br /> party creative facebook iPad
                twitter.
              </h6>
            </div>
          </li>
          <li className="w-screen my-8 md:w-1/5 lg:w-1/5">
            <div className="text-center lg:text-left md:text-left">
              <h2 className="mb-6 text-black-500 font-semibold">Landings</h2>
              {renderList(LIST_MENUS.landings)}
            </div>
          </li>
          <li className="w-screen my-8 md:w-1/5 lg:w-1/5">
            <div className="text-center lg:text-left md:text-left">
              <h2 className="mb-6 text-black-500 font-semibold">Companys</h2>
              {renderList(LIST_MENUS.company)}
            </div>
          </li>
          <li className="w-screen my-8 md:w-1/5 lg:w-1/5">
            <div className="text-center lg:text-left md:text-left">
              <h2 className="mb-6 text-black-500 font-semibold">Resources</h2>
              {renderList(LIST_MENUS.resources)}
            </div>
          </li>
        </ul>
        <div className="text-left text-center lg:text-left md:text-left pt-2 font-light">
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
