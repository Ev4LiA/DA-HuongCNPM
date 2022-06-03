import axios from "axios";
import BEurl from '../../../url'

const url = BEurl;

const SendCartApi = async (cart) => {

  const data = {
    food: cart
  }
  console.log(data)
  var config = {
    method: 'post',
    url: url + "/createorder",
    headers: { 
      'Content-Type': 'application/json'
    },
    data:data
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

export default SendCartApi;