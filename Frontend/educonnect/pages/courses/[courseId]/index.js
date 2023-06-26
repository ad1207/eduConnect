import ModuleBar from "@/components/sidebar.component";
import axios from "axios";

const CoursesPage = ({data}) => {
  return (
    <>
      <h1>{data}</h1>
      <ModuleBar />
    </>
  );
};

export default CoursesPage;


// export async function getServerSideProps(context) {
//   const endpoint = `https://${process.env.TRANSLATOR_TEXT_DOMAIN}.cognitiveservices.azure.com/translator/text/v3.0/translate?api-version=3.0&to=ta`;
//     const subscriptionKey = process.env.TRANSLATOR_TEXT_KEY;
//     const region = process.env.TRANSLATOR_TEXT_REGION;

//     const headers = {
//           "Ocp-Apim-Subscription-Key": subscriptionKey,
//           "Ocp-Apim-Subscription-Region": region,
//           "Content-Type": "application/json",
//         };

//     const data = [{ Text: "Hello, what is your name?" }];
  
//     try {
//       const response = await axios.post(endpoint, data, { headers });
//       console.log(response.data[0].translations[0].text);
      


//       // Process the translated text response here
//       return {
//         props: {
//           data: JSON.stringify(response.data[0].translations[0].text)
//         }
//       }
//     } catch (error) {
//       console.error(error);
//       return{}
//       // Handle the error
//     }
// }