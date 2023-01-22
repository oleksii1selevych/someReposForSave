import { createStore } from 'vuex';

import seminar1Module from './modules/seminar1/index.js';

const store = createStore({
    modules:{
        seminar1:seminar1Module
    },
    state(){
        return {
            isRequestRunning:false,
            requestRunningTitle:'',
            error:null
        }
    },
    getters:{
        isRequestRunning: (state) => state.isRequestRunning,
        requestRunningTitle: (state) => state.requestRunningTitle,
        error:(state) => state.error
    },
    mutations:{
        setRequestRunningStatus: (state, payload) => state.isRequestRunning = payload.requestRunningStatus,
        setRequestRunningTitle: (state, payload) => state.requestRunningTitle = payload.requestRunningTitle,
        setError:(state, payload) => state.error = payload.error
    },
    actions:{
        changeRequestPerformanceStatus: (context, payload) => context.commit("setRequestRunningStatus", {...payload}),
        changeRequestRunningTitle: (context, payload) => context.commit("setRequestRunningTitle", {...payload}),
        changeErrorState:(context, payload) => context.commit("setError", {...payload}) 
    }
});

export default store;