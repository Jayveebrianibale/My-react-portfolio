import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '../components/DarkmodeContext';
import Logo from "../assets/D.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-10" alt="" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">Jeibii</span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-transparent">
            <li>
              <a href="#home" className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#hobbies" className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent">Hobbies</a>
            </li>
            <li>
              <a href="#skills" className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent">Skills</a>
            </li>
            <li>
              <a href="#technology" className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent">Technology</a>
            </li>
            <li>
              <a href="#contacts" className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent">Contacts</a>
            </li>
            <li>
              <button
                onClick={toggleDarkMode}
                className="flex items-center mt-1 py-2 px-3 md:p-0 text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              >
                {isDarkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
                <span className="ml-2">{isDarkMode}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
