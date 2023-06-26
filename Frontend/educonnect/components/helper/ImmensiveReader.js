import axios from "axios";

const convertTextToSpeech = async (text) => {
  const endpoint = process.env.TEXT_TO_SPEECH_ENDPOINT;
  const subscriptionKey = process.env.TEXT_TO_SPEECH_SUBSCRIPTION_KEY;

  try {
    const response = await axios.post(
      endpoint,
      {
        text: text,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": subscriptionKey,
        },
        responseType: "arraybuffer", // Corrected value
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error converting text to speech:", error);
    return null;
  }
};

export default convertTextToSpeech;