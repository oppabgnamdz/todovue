import axios from "axios";

const SignIn = async (username, password) => {
  const response = await axios.post(
    "https://todo-mvc-api-typeorm.herokuapp.com/auth/login",
    {
      username,
      password,
    }
  );
  return response
};
export default SignIn;
