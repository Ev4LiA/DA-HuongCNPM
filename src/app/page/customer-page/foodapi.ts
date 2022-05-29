import axios from "axios";
const url = "https://aad5-113-161-69-100.ap.ngrok.io"

const GetFoodApi = async () => {
  var config = {
    method: 'get',
    url: url + "/menu",
    headers: { 
      'Content-Type': 'application/json'
    },
    
  };
  
  try {
    const res = await axios(config)
    console.log(res)
    return res;
  } catch (e) {
      console.log(e)
      return e
  }


}

export default GetFoodApi;