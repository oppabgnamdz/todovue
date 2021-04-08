import axios from "axios";
import { URL, ROUTER_BASE } from "../constants";

const SignUp = async (username, password) => {
  const response = await axios.post(URL + ROUTER_BASE.REGISTER, {
    username,
    password,
  });
  
  return response;
}

export default SignUp;
