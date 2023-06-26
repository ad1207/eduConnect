const DisplayData = ({ moduleId, modulesData }) => {
  const selectedModule = modulesData.find((module) => module.module_id == moduleId);
  console.log("module data", modulesData, moduleId);

  if (!selectedModule) {
    return <div>No module selected</div>;
  }

  return (
    <>
      <section className=" bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg ">
            <div>
              <h3 className="text-2xl font-semibold">
                {selectedModule.title}
              </h3>
              <p className="py-4">{selectedModule.description}</p>
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
                {selectedModule.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedModule.content,
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
