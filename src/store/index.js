import {createStore} from "vuex";
import todos from "./modules/Todo";
import token from './modules/Token'
export default createStore({
    modules:{
        todos,
        token
    }
})