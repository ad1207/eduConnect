import React, { useState, useEffect } from "react";
// import Loader from "../components/loader.component";
import { redirect } from 'next/navigation';

import axios from "axios";
import CourseCard from "@/components/courseCard.component";
import useDebounce from "@/hooks/use-debounce";
import { useRouter } from "next/router";


export default function SearchforCourses({query}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [filterdata, setfilterData] = useState([]);
  const { push } = useRouter();


//   submit Handler
    const submitHandler = (e) => {
        e.preventDefault();
        const filteredCourses = courseData.filter((course) =>
        course.course_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
        setfilterData(filteredCourses.slice(0,6));
        setSearchQuery("");

    };



  const coursedata = [
    {
        id: 1,
        course_name: "Introduction to Computer Science",
        course_code: "BCSE120L",
        description: "This course is an introduction to the intellectual enterprises of computer science and the art of programming.",
        image: "https://plus.unsplash.com/premium_photo-1683631776585-e1d224424ec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
    {
        id: 2,
        course_name: "Introduction to Computer Science",
        course_code: "BCSE120L",
        description: "This course is an introduction to the intellectual enterprises of computer science and the art of programming.",
        image: "https://plus.unsplash.com/premium_photo-1683631776585-e1d224424ec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
    {
        id: 3,
        course_name: "Introduction to Computer Science",
        course_code: "BCSE120L",
        description: "This course is an introduction to the intellectual enterprises of computer science and the art of programming.",
        image: "https://plus.unsplash.com/premium_photo-1683631776585-e1d224424ec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
    {
        id: 4,
        course_name: "Introduction to Computer Science",
        course_code: "BCSE120L",
        description: "This course is an introduction to the intellectual enterprises of computer science and the art of programming.",
        image: "https://plus.unsplash.com/premium_photo-1683631776585-e1d224424ec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
  ]


  const fetchData = async () => {
    const endpoint = `/api/courses`;
    try {
      const response = await fetch(endpoint, {
        method: "GET",
      });
      const data = await response.json();
      setCourseData(data.data);
      const firstSixCourses = data.data.slice(0, 6);
      setfilterData(firstSixCourses);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
      <div className="bg-white">

        <div className="relative px-6 pt-1 isolate lg:px-8">
          <div
            className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-0"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="max-w-4xl py-32 mx-auto sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Looking for Lectures, Notes or Don't Know Where to Start?
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Search for your Course Name or Course Code below in the search
                box to find lectures, and notes; and get started right now!
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <form className="flex items-center" onSubmit={submitHandler}>
                  <label form="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      value={query}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search courses..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </form>
              </div>
              <div className="flex justify-center px-5 py-5">
                <div className="grid gap-4 sm:grid-cols-3 ">
                  {filterdata?.map((course) => (
                    <CourseCard course={course} key={course.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
