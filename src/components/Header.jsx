const Header = () => {
  return (
    <header className="px-5 py-[1.563rem] bg-white sticky top-0 z-20">
      <nav className="wrapper flex justify-between items-center">
        <div className="flex items-center gap-12">
          <a href="">
            <img
              src="https://courses.webdevsimplified.com/content-assets/public/eyJhbGciOiJIUzI1NiJ9.eyJvYmplY3Rfa2V5IjoiY2IxbHg1eHJ4YXNvMnlocGl3cjg3cnUyamlteCIsImRvbWFpbiI6ImNvdXJzZXMud2ViZGV2c2ltcGxpZmllZC5jb20ifQ.sih852orbsVSqbH_Ks85JUnpFSN_KbXaS39KKMM_WhM"
              alt="Logo"
              width="52"
            />
          </a>
          <menu className="md:flex hidden items-center gap-4">
            <li>
              <a href="#" className="text-dark text-base font-inter">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-base">
                Yoube
              </a>
            </li>
          </menu>
        </div>
        <div className="relative">
          <button className="btn md:block hidden">Login</button>
          <img
            src="./image/menuIcon.svg"
            alt="Menu Icon"
            className="md:hidden block"
            id="menuBar"
          />

          <menu
            className="space-y-2 shadow-lg bg-white rounded-md absolute top-10 right-0 w-40 hidden"
            id="menu"
          >
            <li className="px-3 py-1">
              <a href="#" className="text-dark text-base font-inter">
                Blog
              </a>
            </li>
            <li className="px-3 py-1">
              <a href="#" className="text-dark text-base">
                Yoube
              </a>
            </li>
            <li className="border-t border-gray-200 px-3 py-1">
              <a href="#" className="text-dark text-base">
                Login
              </a>
            </li>
          </menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
