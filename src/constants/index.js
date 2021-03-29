const url = "https://todo-mvc-api-typeorm.herokuapp.com/api/todos";
const auth =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE1MTk5ZDBiLWE2NTQtNGFlZS1iYWRhLWUyZTI4MTM4NTcyYSIsImlhdCI6MTYxNjY1NDMzNiwiZXhwIjoxNjE3MjU5MTM2fQ.S8akmG2NcE8hVeiXEo548i-aofp91gA5vVH7la4sq_A";

const BACKGROUND_COLOR = {
  BG_COLOR_DELETE: "#cc434a",
  BG_COLOR_CONFIRM: "black",
  BG_COLOR_EDIT: "#51a452",
  BG_COLOR_ADD: "#2e7df4",
  BG_COLOR_CANCEL: "purple",
};
const BUTTON_LABEL = {
  DELETE: "DELETE",
  CONFIRM: "CONFIRM",
  EDIT: "EDIT",
  ADD: "ADD",
  CANCEL: "CANCEL",
};
export { url, auth, BUTTON_LABEL, BACKGROUND_COLOR };
