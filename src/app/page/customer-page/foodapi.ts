import axios from "axios";
import BEurl from '../../../../url'



const GetFoodApi = async () => {
  var config = {
    method: 'get',
    url: BEurl + "/menu",
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