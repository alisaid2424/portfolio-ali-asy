import { useState } from 'react';

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleBtnToggleMode = () => {
    document.querySelector('html').classList.toggle('dark');
    setIsDarkMode((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between pt-5 sm:px-9">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="icon-menu btn-nav md:hidden"
      ></button>

      <div />

      <nav
        className="hidden rounded-full bg-bgHeader-light px-6 py-3 shadow-sm
       shadow-gray-500 dark:bg-bgHeader-dark md:block"
      >
        <ul className="flex gap-10">
          <li>
            <a href="#About" className="nav-link">
              {' '}
              About
            </a>
          </li>

          <li>
            <a href="#Projects" className="nav-link">
              Articles
            </a>
          </li>
          <li>
            <a href="#Projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" className="nav-link">
              Speaking
            </a>
          </li>
          <li>
            <a href="#Contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-nav" onClick={handleBtnToggleMode}>
        {isDarkMode ? (
          <span className="icon-sun text-yellow-500"> </span>
        ) : (
          <span className="icon-moon-o"> </span>
        )}
      </button>

      {showModal && (
        <div className="bg-[rgba(40, 40, 48, 0.91)] fixed inset-0 z-10 animate-popap backdrop-blur-sm">
          <ul className="modal mx-auto  mt-8 flex w-[75%] flex-col gap-3 rounded-2xl bg-secondary-light px-8 py-4 dark:bg-secondary-dark">
            <li className="ml-auto ">
              <button
                className="icon-close text-xl text-subtitle-light transition-all
                  duration-300 hover:rotate-180 hover:text-red-600 dark:text-subtitle-dark dark:hover:text-red-600"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li className="nav-link -mt-3 border-b-2 pb-5 dark:border-gray-700">
              <a href="#About">About</a>
            </li>
            <li className="nav-link border-b-2 pb-5 dark:border-gray-700">
              <a href="#Projects">Articles</a>
            </li>
            <li className="nav-link border-b-2 pb-5 dark:border-gray-700">
              <a href="#Projects">Projects</a>
            </li>
            <li className="nav-link border-b-2 pb-5 dark:border-gray-700">
              <a href="#Contact">Speaking</a>
            </li>
            <li className="nav-link pb-5">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
