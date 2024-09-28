import Html from '../assets/Html.jpg';
import Css from '../assets/Css.png';
import Tailwind from '../assets/Tailwind.jpg';
import React from '../assets/React.webp';

function Technology() {
  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
            Technology <span className='text-indigo-700'>Use?</span>
          </h2>
          <p className="mt-4 max-w-md text-gray-500 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus?
          </p>
        </header>

        <div className="mt-8">
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { img: Html, title: "HTML" },
              { img: Css, title: "CSS" },
              { img: Tailwind, title: "Tailwind CSS" },
              { img: React, title: "React JS" }
            ].map((tech, index) => (
              <li key={index}>
                <a href="#" className="group block overflow-hidden">
                  <img
                    src={tech.img}
                    alt={tech.title}
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />
                  <div className="relative bg-white dark:bg-gray-800 pt-3">
                    <p className="mt-2 text-center">
                      <span className="sr-only">Regular Price</span>
                      <span className="tracking-wider text-gray-900 dark:text-gray-100 font-extrabold text-2xl">
                        {tech.title}
                      </span>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 dark:border-gray-700"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a href="#" className="block size-8 rounded border border-gray-100 dark:border-gray-700 text-center leading-8">
              1
            </a>
          </li>

          <li className="block size-8 rounded border-black bg-black text-center leading-8 text-white">2</li>

          <li>
            <a href="#" className="block size-8 rounded border border-gray-100 dark:border-gray-700 text-center leading-8">
              3
            </a>
          </li>

          <li>
            <a href="#" className="block size-8 rounded border border-gray-100 dark:border-gray-700 text-center leading-8">
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 dark:border-gray-700"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
      <div className="flex justify-center items-center h-20 border-gray-300">
        <div className="w-[80%] border-b border-gray-400 dark:border-gray-700"></div>
      </div>
    </section>
  );
}

export default Technology;
