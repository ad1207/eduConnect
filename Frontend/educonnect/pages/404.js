import NavBar from "../components/NavBar.component";

import Lottie from "lottie-react";
import animationfourofour from "../components/animation2.json";
import Link from "next/link";

const FourOFour = () => {
  return (
    <>
      <section className="bg-white">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center">
      <div className="lg:mt-0 lg:col-span-5 lg:flex log: mt-4">
        <Lottie animationData={animationfourofour} loop={true} />
      </div>
      <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
        Something's missing.
      </p>
      <p className="mb-4 text-lg font-light text-gray-500">
        Sorry, we can't find that page. You'll find lots to explore on the home page.
      </p>
      <Link
        href="/"
        className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
      >
        Back to Homepage
      </Link>
    </div>
  </div>
</section>

    </>
  );
};

export default FourOFour;
