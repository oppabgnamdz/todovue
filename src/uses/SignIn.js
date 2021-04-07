import axios from "axios";
import { URL, ROUTER_BASE } from "../constants";

const SignIn = async (username, password) => {
  const response = await axios.post(URL + ROUTER_BASE.LOGIN, {
    username,
    password,
  });
  
  return response;
}

export default SignIn;
