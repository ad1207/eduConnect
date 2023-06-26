import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uuidv4 from 'uuidv4';
import svg from '../public/speaker.svg';
import Image from 'next/image';

const DisplayData = ({ moduleId, modulesData, sample }) => {
  const [speechSynthesizer, setSpeechSynthesizer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const selectedModule = modulesData.find((module) => module.id == moduleId);
  console.log('module data', modulesData, moduleId, sample);

  const synthesizeSpeech = (text) => {
    const sdk = require('microsoft-cognitiveservices-speech-sdk');
    const speechConfig = sdk.SpeechConfig.fromSubscription(
      'd7c19d75fd5046b38a6b1bd891e13dcb',
      'eastus'
    );
    const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
    

    const newSpeechSynthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
    setSpeechSynthesizer(newSpeechSynthesizer);
    setIsPlaying(true);

    newSpeechSynthesizer.speakTextAsync(
      text,
      (result) => {
        if (result) {
          newSpeechSynthesizer.close();
          setSpeechSynthesizer(null);
          setIsPlaying(false);
          return result.audioData;
        }
      },
      (error) => {
        console.log(error);
        newSpeechSynthesizer.close();
        setSpeechSynthesizer(null);
        setIsPlaying(false);
      }
    );
  };

  const handleSynthesizeSpeech = () => {
    if (selectedModule && selectedModule.notes) {
      synthesizeSpeech(selectedModule.notes);
    }
  };

  useEffect(() => {
    // Cleanup function to stop audio when unmounting the component
    return () => {
      if (speechSynthesizer) {
        speechSynthesizer.close();
        setSpeechSynthesizer(null);
      }
    };
  }, [speechSynthesizer]);

  if (!selectedModule) {
    return <div>No module selected</div>;
  }

  return (
    <>
      <section className=" bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg ">
            <div>
            {modulesData.length > 0 && (
                  <button
                  onClick={handleSynthesizeSpeech}
                  disabled={isPlaying}
                  className={`absolute right-12 p-2 flex items-center text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
                    isPlaying ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isPlaying ? 'Playing...' : 'Read Aloud'}
                  <Image src={svg} alt="Speaker Icon" className="w-5 h-5 ml-2" />
                </button>
                  
                )}
              <h3 className="text-2xl font-semibold">
                {selectedModule.module_name}
              </h3>
              <p className="py-4">{selectedModule.topics}</p>
              {/* <div className="video-container">
                {selectedModule.links ? (
                  <iframe
                    width="560"
                    height="315"
                    src={selectedModule.links}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : null}
              </div> */}
              {/* displaying content */}
              <div className="">
                {selectedModule.notes ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedModule.notes,
                    }}
                  ></div>
                ) : null}
                  </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio (divided by width) */
          height: 0;
          overflow: hidden;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          .video-container {
            padding-bottom: 75%; /* Adjust the aspect ratio for mobile devices */
          }
        }
      `}</style>
    </>
  );
};

export default DisplayData;


export async function getServerSideProps() {
  // console.log("Server side props")
  // var endpoint_var = process.env.TRANSLATOR_TEXT_ENDPOINT;
  // console.log("ENV", process.env.TRANSLATOR_TEXT_ENDPOINT)
  // if (!process.env.TRANSLATOR_TEXT_ENDPOINT) {
  //     throw new Error('Please set/export the following environment variable: ' + endpoint_var);
  // }
  // var endpoint = process.env[endpoint_var];
  
  // /* If you encounter any issues with the base_url or path, make sure that you are
  // using the latest endpoint: https://docs.microsoft.com/azure/cognitive-services/translator/reference/v3-0-languages */
  //     let options = {
  //         method: 'GET',
  //         baseUrl: endpoint,
  //         url: 'languages',
  //         qs: {
  //           'api-version': '3.0',
  //         },
  //         headers: {
  //           'Content-type': 'application/json',
  //           'X-ClientTraceId': uuidv4().toString()
  //         },
  //         json: true,
  //     };
  
  //     let response = await request(options);
  //     console.log(JSON.stringify(response, null, 4));
  //     return response;

  return {
    props: {
      sample:"Hello"
  }
}
}