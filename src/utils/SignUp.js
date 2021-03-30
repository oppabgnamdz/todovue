import axios from "axios";

const SignUp = async (username, password) => {
  const response = await axios.post(
    "https://todo-mvc-api-typeorm.herokuapp.com/auth/register",
    {
      username,
      password,
    }
  );
  return response
};
export default SignUp;
