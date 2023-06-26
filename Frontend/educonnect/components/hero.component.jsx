import Lottie from "lottie-react";
import animation1 from "./animation.json";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white to-orange-100 ">
      <div className="grid max-w-screen-xl px-4 pt-16 mx-auto lg:gap-8 xl:gap-0 lg:pt-32 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black ">
            Welcome to StudySphere!
          </h1>
          <p className="max-w-2xl mb-6 leading-8 text-gray-600 lg:mb-8 md:text-lg lg:text-xl ">
            Welcome to StudySphere, where knowledge knows no bounds. Dive into a
            world of limitless learning possibilities, where students explore,
            and elevate their academic journey. Embark on a transformative
            experience, where education and innovation intersect, guiding you
            towards academic excellence and personal growth.
          </p>
          <Link
            href="/courses"
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-200 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Explore Courses
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Lottie animationData={animation1} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
