/* eslint-disable react/no-unescaped-entities */

import Beach from '../assets/Beach.jpeg'
import Student from '../assets/Student.jpeg'

function Intro() {
    return (
        <section className="bg-white dark:bg-gray-900 text-black dark:text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Hello, <span> I'm Jayvee Brian Ibale</span>
                        </h2>

                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                            eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                            quidem quam repellat.
                        </p>

                        <a
                            href="#"
                            className="mt-8 inline-block rounded bg-indigo-600 dark:bg-indigo-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 dark:hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Learn More About Me
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <img
                            alt="Student"
                            src={Student}
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />

                        <img
                            alt="Beach"
                            src={Beach}
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center h-20 border-gray-300 dark:border-gray-700">
                <div className="w-[80%] border-b border-gray-400 dark:border-gray-600"></div>
            </div>
        </section>
    );
}

export default Intro;
