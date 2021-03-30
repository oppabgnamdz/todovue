import {createStore} from "vuex";
import todos from "./modules/Todo";
export default createStore({
    modules:{
        todos
    }
})