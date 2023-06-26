"use client"
import React, { useEffect, useState } from "react";
import DisplayData from "./displayData.component";
import axios from "axios";
import { useRouter } from 'next/router'
import Link from "next/link";
import { redirect, useParams } from "next/navigation";


const dummyModuleData = [
  {
    module_id: 1,
    title: "Module 1",
    description: "This is module 1",
    content: "Artificial intelligence (AI) is a branch of computer science that focuses on creating intelligent machines capable of performing tasks that would typically require human intelligence. AI systems are designed to learn, reason, and apply knowledge to solve problems, make decisions, and improve their performance over time. With advancements in machine learning, deep learning, and natural language processing, AI has found applications in various fields, including healthcare, finance, transportation, and more. AI algorithms can analyze large datasets, identify patterns, and make predictions or recommendations based on the data. These algorithms can be trained to recognize images, process natural language, play games, drive autonomous vehicles, and even assist in medical diagnosis and drug discovery. As AI continues to evolve, researchers and developers are exploring new possibilities and addressing ethical considerations to ensure its responsible and beneficial use in society.",
  },
  {
    module_id: 2,
    title: "Module 2",
    description: "This is module 2",
    content: "In this module, we delve deeper into the concepts and techniques of artificial intelligence. We explore various AI models and algorithms, including neural networks, decision trees, genetic algorithms, and reinforcement learning. Neural networks are at the core of deep learning, a subset of AI that focuses on training models with multiple layers to extract hierarchical representations of data. We discuss the different types of neural networks, such as feedforward neural networks, convolutional neural networks (CNNs), and recurrent neural networks (RNNs), and their applications in image recognition, natural language processing, and sequence generation. Decision trees are another popular AI technique used for classification and regression tasks, providing interpretable models that make decisions based on input features. Genetic algorithms draw inspiration from the process of natural selection to optimize solutions to complex problems. Reinforcement learning involves training an agent to make sequential decisions in an environment, learning through trial and error and receiving rewards or penalties based on its actions. We explore key concepts, algorithms, and applications of these AI techniques, giving you a comprehensive understanding of their inner workings and practical use cases.",
  },
  {
    module_id: 3,
    title: "Module 3",
    description: "This is module 3",
    content: "As we progress to module 3, we focus on advanced topics and emerging trends in artificial intelligence. We discuss the challenges and opportunities associated with AI, including ethical considerations, bias in AI systems, transparency, and interpretability. The responsible development and deployment of AI systems are essential to ensure fairness, accountability, and transparency. We explore cutting-edge research in AI, such as generative adversarial networks (GANs) for image synthesis, transfer learning for leveraging pre-trained models, and explainable AI for understanding model decisions. We also dive into specific applications of AI, such as natural language processing for sentiment analysis and language translation, computer vision for object detection and image segmentation, and robotics for autonomous navigation and manipulation. Additionally, we touch upon the social and economic implications of AI, including its impact on jobs, privacy, and security. By the end of this module, you will have a comprehensive understanding of advanced AI concepts, emerging trends, and their real-world applications, enabling you to contribute to the exciting field of artificial intelligence.",
  },
];



const ModuleBar = ({moduleData}) => {
  const [courseData,setCourseData]=useState(null);
  const [modulesData,setModulesData]=useState(moduleData);
  const [selectedModuleId, setSelectedModuleId] = useState(1);
  const router = useRouter()
  // const params = useParams()
  const { push } = useRouter();


  let { courseId, moduleId } = router.query

  console.log(courseId)
  // const { courseId } = useParams();
  // const fetchCourseData = async () => {
    
  //   try {
  //     const response = await axios.get(`http://localhost:3000/api/courses/${courseId}/`);
  //     console.log(response.data);
  //     setCourseData(response.data);
  //     setModulesData(response.data.modules);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchCourseData();
  // }, [courseId]);

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

  return (
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
                <Link href={`/courses/${courseId}?moduleId=${module.id}`}>

                <div
                  onClick={() => handleModuleClick(module.id)}
                  className={`cursor-pointer flex items-center p-2 text-gray-900 rounded-lg ${selectedModuleId === module.id ? 'bg-violet-500 text-white hover:bg-blue-500' : 'hover:bg-gray-100'}`}
                  >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Module {module.id}
                  </span>
                </div>
                  </Link>
              </li>
            ))}
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
  
  );
};

export default ModuleBar;
