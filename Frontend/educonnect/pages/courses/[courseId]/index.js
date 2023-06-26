import DisplayData from "@/components/displayData.component";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const CoursesPage = ({modulesData, courseData, textToSummarize,translatedData,summary}) => {
  const [selectedModuleId, setSelectedModuleId] = useState(1);

  const router = useRouter()
  const { push } = useRouter();
  let { courseId, moduleId } = router.query

  

  const handleModuleClick = (moduleId) => {
    setSelectedModuleId(moduleId);
  };

  const handleModuleClickPrev = (moduleId) => {
    moduleId = moduleId - 1;
    if (moduleId >= 1) {
      setSelectedModuleId(moduleId);
      push(`/courses/${courseId}?moduleId=${moduleId}`)
    }
  };

  const handleModuleClickNext = (moduleId) => {
    const totalModules = modulesData.length;
    const nextModuleId = moduleId + 1;

    if (nextModuleId <= totalModules) {
      setSelectedModuleId(nextModuleId);
      push(`/courses/${courseId}?moduleId=${nextModuleId}`)
    }
  };
  console.log("data", modulesData, courseData)

  return (
    <>
      {/* <h1>{data}</h1> */}
      <div className="h-screen z-0">
    <div className="pt-24 ">
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
    </div>
    <div className="sm:pt-0">
      {/* Sidebar */}
      <aside id="default-sidebar" className="fixed left-0 z-0 w-64 h-screen transition-transform -translate-x-full sm:top-20 sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium">
            
            <li>
              <div className="flex items-center p-2 text-2xl font-bold text-gray-900 rounded-lg">
                <span className="ml-3">{courseData?.course_name}</span>
              </div>
            </li>
            {modulesData.map((module) => (
              <li key={module.module_no}>
                <Link href={`/courses/${courseId}?moduleId=${module.module_no}`}>

                <div
                  onClick={() => handleModuleClick(module.id)}
                  className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg ${selectedModuleId === module.module_no ? 'bg-violet-500 text-white hover:bg-blue-500' : 'hover:bg-gray-100'}`}
                  >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Module {module.module_no}
                  </span>
                </div>
                  </Link>
              </li>
            ))}
            <li>
              
              <button type="button" onClick={()=>postData()} className="w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">Get Summary</button>
            
          </li>
            <li>
              
                <button type="button" onClick={()=>push('/courses')} className="w-full text-white bg-violet-500 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">Go Back</button>
              
            </li>
          </ul>
        </div>
      </aside>
  
      {/* Displaying Module Data here */}
      <div className="p-4 sm:ml-64 ">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg bg-gray-50">
               <DisplayData moduleId={moduleId} modulesData={modulesData} />

  
          <div className="flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                onClick={() => handleModuleClickPrev(selectedModuleId)}
                type="button"
                disabled={selectedModuleId === 1}
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              >
                Previous
              </button>
  
              <button
                onClick={() => handleModuleClickNext(selectedModuleId)}
                type="button"
                disabled={selectedModuleId === modulesData.length}
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default CoursesPage;


// export async function getServerSideProps(context) {
//   const { params, req, res } = context; 
  const endpoint = `https://${process.env.TRANSLATOR_TEXT_DOMAIN}.cognitiveservices.azure.com/translator/text/v3.0/translate?api-version=3.0&to=ta`;
//     const subscriptionKey = process.env.TRANSLATOR_TEXT_KEY;
//     const region = process.env.TRANSLATOR_TEXT_REGION;

    const headers = {
          "Ocp-Apim-Subscription-Key": subscriptionKey,
          "Ocp-Apim-Subscription-Region": region,
          "Content-Type": "application/json",
        };
        var responseData = []
      try {
        responseData = await axios.get(`http://localhost:3000/api/courses/${params.courseId}/`);
        // setCourseData(response.data);
        // setModulesData(response.data.modules);
      } catch (error) {
        console.error(error);
      }

        const translateText = async (text, headers, endpoint) => {
          const requestBody = [{ Text: text }];
        
          try {
            const response = await axios.post(endpoint, requestBody, { headers });
            return response.data[0].translations[0].text;
          } catch (error) {
            console.error(error);
            return text; // Return the original text in case of translation error
          }
        };
        
    let summary = "";
  
    try {
      const response = await axios.post(endpoint, data, { headers });
      console.log(response.data[0].translations[0].text);
      


//       // Process the translated text response here
//       return {
//         props: {
//           // data: JSON.stringify(response.data[0].translations[0].text),
          modulesData:responseData.data.modules,
          translatedData:translatedData,
          courseData:JSON.stringify(responseData.data),
          summary: summary,
//         }
//       }
//     } catch (error) {
//       console.error(error);
//      return {
        props: {
          data: "Error translating text"
        }
      }
    
       return{}
//       // Handle the error
//     }
// }