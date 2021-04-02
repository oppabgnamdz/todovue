import {createStore} from "vuex";
import todos from "./modules/Todo";
import token from './modules/Token'
import createPersistedState from "vuex-persistedstate";
export default createStore({
    modules:{
        todos,
        token
    },
    plugins: [createPersistedState()],
})