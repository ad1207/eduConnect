const DisplayData = ({ moduleId, modulesData }) => {
  const selectedModule = modulesData.find((module) => module.id === moduleId);

  if (!selectedModule) {
    return <div>No module selected</div>;
  }

  return (
    <>
      <section className="dark:bg-gray-900 bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <div>
              <h3 className="text-2xl font-semibold">
                {selectedModule.module_name}
              </h3>
              <p className="py-4">{selectedModule.topics}</p>
              <div className="video-container">
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
