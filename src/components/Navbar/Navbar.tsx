import { LogoIcon } from "@assets/icons";
import Button from "@components/Button/Button";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchBlogData } from "@store/slices/blog.slice";
import { BROWSER_MODE, NavMenuType } from "@utils/types";
import { useEffect, useState } from "react";

const renderMenus = (menus: NavMenuType[], mode: BROWSER_MODE) => {
  return menus.map((menu, index) => (
    <a
      href="#/"
      key={index}
      className={`font-semibold text-h6 text-blue-500 leading-6 ${
        mode === BROWSER_MODE.mobile && "-mx-3 block rounded-lg py-2 px-3"
      }`}
    >
      {menu}
    </a>
  ));
};

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const MENUS = useAppSelector((state) => state.blogData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogData());
  }, []);

  return (
    <>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 mx-auto max-w-7xl"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#/" className="-m-1.5 p-1.5">
            <span className="sr-only">Boldo</span>
            <LogoIcon className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:flex-1 lg:justify-end">
          {renderMenus(MENUS.blog.menus, BROWSER_MODE.desktop)}

          <Button title="Log In" className="-my-2" />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-white-500" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#/" className="-m-1.5 p-1.5">
              <span className="sr-only">Boldo</span>
              <LogoIcon className="h-8 w-auto" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {renderMenus(MENUS.blog.menus, BROWSER_MODE.mobile)}
              </div>
              <div className="py-6">
                <Button title="Log In" />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

export default Navbar;
