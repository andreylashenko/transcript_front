import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recordings: [],
    recordsCount : 0,
    todayRecordsCount : 0,
    totalDuration: 0
  },
  mutations:{
    setRecordings(state, payload) {
      state.recordings = payload;
    },
    setRecordsCount(state, payload) {
      state.recordsCount = payload;
    },
    setTodayRecordsCount(state, payload) {
      state.todayRecordsCount = payload;
    },
    setTotalDuration(state, payload) {
      state.totalDuration = payload;
    }
  },
  actions: {
    recordList(context, payload) {
      Vue.http.post('http://localhost:8081/leadzvon/list', payload)
          .then(response => {
            return response.json()
          })
          .then(recordings => {
            context.commit('setRecordings', recordings)
            return recordings
          })
    },
    recordsCount(context, payload) {
      Vue.http.get('http://localhost:8081/metric/recordsCount')
          .then(response => {
            return response.json()
          })
          .then(recordsCount => {
            context.commit('setRecordsCount', recordsCount)
            return recordsCount
          })
    },
    todayRecordsCount(context, payload) {
      Vue.http.get('http://localhost:8081/metric/todayRecordsCount')
          .then(response => {
            return response.json()
          })
          .then(todayRecordsCount => {
            context.commit('setTodayRecordsCount', todayRecordsCount)
            return todayRecordsCount
          })
    },
    totalDuration(context, payload) {
      Vue.http.get('http://localhost:8081/metric/totalDuration')
          .then(response => {
            return response.json()
          })
          .then(totalDuration => {
            context.commit('setTotalDuration', totalDuration)
            return totalDuration
          })
    },
    findRecord(context, payload) {
      Vue.http.post('http://localhost:8081/leadzvon/list',
          payload
      ).then(response => {
        return response.json()
      })
      .then(recordings => {
        context.commit('setRecordings', recordings)
        return recordings
      })
    }
  },
  getters: {
    getRecordList(state) {
      return state.recordings;
    },
    getRecordsCount(state) {
      return state.recordsCount;
    },
    getTodayRecordsCount(state) {
      return state.todayRecordsCount;
    },
    getTotalDuration(state) {
      return state.totalDuration;
    }
  }
})
