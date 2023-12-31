import DisplayData from "@/components/displayData.component";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CoursesPage = ({modulesData, courseData, textToSummarize,translatedData,summary}) => {
  const [selectedModuleId, setSelectedModuleId] = useState(1);
  const [languages, setLanguages] = useState([["english","en"],["hindi","hi"],["marathi","mr"], ["tamil","ta"]]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [summary11, setSummary11] = useState("");

  // useEffect(() => {
  //   fetchSupportedLanguages();ta
  // }, []);

  // const fetchSupportedLanguages = async () => {
  //   const endpoint = "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0";
  //   const response = await axios.get(endpoint);
  //   setLanguages(response.data.translation);
  // };



  const router = useRouter()
  const { push } = useRouter();
  let { courseId, moduleId } = router.query

  const postData = async () => {
    try {
      const response = await axios.post('https://api.oneai.com/api/v0/pipeline', {
        input: textToSummarize,
        steps: [
          {
            skill: "summarize"
          }
        ]
      }, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': '55337929-844a-4b93-b4d7-5c167878d16a'
        }
      });

      console.log(response.data.output[0].text);
      console.log("Text" , textToSummarize)

      var summary1 = response.data.output[0].text;
      setSummary11(summary1);
  
    } catch (error) {
      console.error(error);
    }
  }

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
  const handleLanguageChange = async (event) => {
    const selectedCode = event.target.value;
    setSelectedLanguage(selectedCode);


      push(`/courses/${courseId}?moduleId=${moduleId}&language=${selectedCode}`)
    
  };
  const handleModuleClickNext = (moduleId) => {
    const totalModules = modulesData.length;
    const nextModuleId = moduleId + 1;

    if (nextModuleId <= totalModules) {
      setSelectedModuleId(nextModuleId);
      push(`/courses/${courseId}?moduleId=${nextModuleId}`)
    }
  };
  // console.log("data", modulesData, courseData)

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

              <li key={module.id}>
                <Link href={`/courses/${courseId}?moduleId=${module.id}&language=${selectedLanguage}`}>

                <div
                  onClick={() => handleModuleClick(module.id)}
                  className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg ${moduleId === module.module_no ? 'bg-violet-500 text-white hover:bg-blue-500' : 'hover:bg-gray-100'}`}
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
        <div>
      <select  onChange={handleLanguageChange} value={selectedLanguage}>
        <option value="">Select a language</option>
        {languages.map((lang) => (
          <option key={lang[1]} value={lang[1]}>
            {lang[0]}
          </option>
        ))}
      </select>
      {/* {selectedLanguage && (
        <div>
          <p>Selected Language: {selectedLanguage.name}</p>
          <p>Language Code: {selectedLanguage.code}</p>
        </div>
      )} */}
    </div>
               <DisplayData moduleId={moduleId} modulesData={modulesData} />
          {summary11 && <p>Summary</p>}
          <p>{summary11}</p>
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


export async function getServerSideProps(context) {
  const { params, req, res } = context; 
  const endpoint = `https://${process.env.TRANSLATOR_TEXT_DOMAIN}.cognitiveservices.azure.com/translator/text/v3.0/translate?api-version=3.0&to=${context.query.language}`;
    const subscriptionKey = process.env.TRANSLATOR_TEXT_KEY;
    const region = process.env.TRANSLATOR_TEXT_REGION;

    const headers = {
          "Ocp-Apim-Subscription-Key": subscriptionKey,
          "Ocp-Apim-Subscription-Region": region,
          "Content-Type": "application/json",
        };
        var responseData = []
        var text = ""
      try {
        responseData = await axios.get(`http://localhost:3000/api/courses/${params.courseId}/`);
        // setCourseData(response.data);
        // setModulesData(response.data.modules);
        // sort responseData according to module no
        responseData.data.modules.sort((a, b) => a.module_no - b.module_no);
        let text = ""
        responseData.data.modules.forEach((module) => {
          text += module.notes;
        });
        // console.log("responseData",responseData.data.modules);

      } catch (error) {
        console.error(error);
      }
        const data = [{ Text: "Hello, what is your name?" }];
        
        // console.log("Module data",responseData.data.modules);

        try {
          // const translatedData = await Promise.all(
          //   data.map(async (item) => {
            //   const translatedNotes = await axios.post(endpoint, [{Text : item.notes}], { headers });
            //   const translatedModuleName = await axios.post(endpoint, [{Text : item.module_name}], { headers });
            //   const translatedTopics = await axios.post(endpoint, [{Text:item.topics}], { headers });
      
            //   return {
            //     ...item,
            //     notes: translatedNotes.data[0].translations[0].text,
            //     module_name: translatedModuleName.data[0].translations[0].text,
            //     topics: translatedTopics.data[0].translations[0].text,
            //   };
            translatedData = await axios.post(endpoint, [{Text : "Hello there"}], { headers })
            // })
          
          // );
      
          // console.log(translatedData);
          // Process the translated data here
        } catch (error) {
          console.error("error in translate");
          // Handle the error
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
        
  
    try {

      const translatedData = await Promise.all(
        responseData.data.modules.map(async (item) => {
          const translatedModuleName = await translateText(item.module_name, headers, endpoint);
          const translatedTopics = await translateText(item.topics, headers, endpoint);
          const translatedNotes = await translateText(item.notes, headers, endpoint);
  
          return {
            ...item,
            notes: translatedNotes,
            module_name: translatedModuleName,
            topics: translatedTopics,
          };
        })
      );
  
      // console.log(JSON.stringify(translatedData));
      
      let textToSummarize = ""
      responseData.data.modules.forEach((module) => {
        textToSummarize += module.notes;
      })
      // Process the translated text response here
      return {
        props: {
          // data: JSON.stringify(response.data[0].translations[0].text),
          modulesData: translatedData,
          courseData:JSON.stringify(responseData.data),
          textToSummarize: JSON.stringify(responseData.data)  
        }
      }
    } catch (error) {
      console.error(error);
      return {
        props: {
          data: "Error translating text"
        }
      }
    
      // Handle the error
    }
}