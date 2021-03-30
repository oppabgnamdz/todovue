import {createStore} from "vuex";
import todos from "./modules/Todo";
import Token from './modules/Token'
export default createStore({
    modules:{
        todos,
        Token
    }
})