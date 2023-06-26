import Link from "next/link";

const CourseCard = ({ course}) => {
  return (
    <Link href={`/courses/${course.id}`} className="">
 <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden ">
      <img
        src={course.image}
        alt={course.title}
        className="object-cover w-full h-48"
      />
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h2>
        <p className="text-gray-500 text-sm mb-2">{course.description}</p>
        <div className="flex items-center mb-2">
          <span className="text-gray-500 text-sm mr-1">{course.rating}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <span className="text-gray-500 text-sm ml-1">
            ({course.numReviews} reviews)
          </span>
        </div>
        <p className="text-gray-500 text-sm">
          Instructor: {course.instructor}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <span className="text-gray-500 text-sm mr-1">
              {course.students} students
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
          {course.certificate && (
            <span className="text-green-500 text-sm">Certificate</span>
          )}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CourseCard;
