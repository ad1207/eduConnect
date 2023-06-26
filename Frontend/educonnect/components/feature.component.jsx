import Lottie from "lottie-react";
import animation2 from "./animation1.json";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Course Centralization.",
    description:
      "Experience the convenience of having all your course-related resources in one centralized location.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Lectures Archive",
    description:
      "Never miss a lecture again with StudySphere's recorded lectures archive. Gain the flexibility to revisit and review past lectures at your convenience. ",
    icon: LockClosedIcon,
  },
  {
    name: "Lecture Notes Repository",
    description:
      "Access a vast repository of comprehensive lecture notes for each of your courses. StudySphere enables you to easily browse, search, and download notes provided by fellow students. ",
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
    <div className="bg-gradient-to-tr from-white to-orange-100 dark:bg-orange-900 overflow-hidden bg-white py-5 sm:py-32 px-4">
      <div className="grid max-w-screen-xl place-content-center mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Lottie animationData={animation2} loop={true} />
        </div>
        <div className="place-self-center lg:col-span-6 lg:pl-12">
          <div className="lg:max-w-lx">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              StudySphere
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Find Everything at One Place
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 lg:pl-0">
              Discover the power of consolidation as StudySphere becomes your
              ultimate academic companion. Uncover a seamless platform that
              brings together an array of resources and tools tailored to your
              specific courses, empowering you to navigate your academic path
              with ease and efficiency.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="sm: relative pl-9">
                  <dt className="inline font-semibold text-gray-900 lg:pl-4">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
