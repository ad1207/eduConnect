import Link from "next/link";

const CourseCard = ({ course}) => {
  return (
    <Link href={`/courses/${course.id}`} className="">
 <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden ">
      <img
        src={course.image}
        alt={course.course_name}
        className="object-cover w-full h-48"
      />
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{course.course_name}</h2>
        <p className="text-gray-500 text-sm mb-2">
          {course.course_code}
        </p>
        <p className="text-gray-500 text-sm mb-2">{course.description}</p>
      </div>
    </div>
    </Link>
  );
};

export default CourseCard;
