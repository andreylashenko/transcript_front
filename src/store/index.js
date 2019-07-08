import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    recordings: []
  },
  mutations:{
    setRecordings(state, payload) {
      state.recordings = payload;
    },
    addPhone(state, payload) {
      const contact = state.contacts.findIndex((el => el.id == payload.contactId))
      state.contacts[contact].phones.push(payload.phone)
    },
    setContacts(state, payload) {
      state.contacts = payload
    },
    editContact(state, payload) {
      const updatedContact = state.contacts.findIndex((el => el.id == payload.id));
      state.contacts[updatedContact].name = payload.name;
      state.contacts[updatedContact].phones = payload.phones;
    },
    deleteContact(state, payload) {
      state.contacts = this.state.contacts.filter(el => { return el.id != payload.id; });
    },
    createContact(state, payload) {
      if(state.contacts) {
        state.contacts.push(payload)
      } else {
        state.contacts = [payload]
      }
    }
  },
  actions: {
    recordList(context, payload) {

      Vue.http.get('http://localhost:8081/leadzvon/list')
          .then(response => {
            return response.json()
          })
          .then(recordings => {
            context.commit('setRecordings', recordings)
            return recordings
          })
    },
    savePhone(context, payload) {
      Vue.http.post('http://framework/contact/addPhone',
        payload
      ).then(response => {
        context.commit('addPhone', payload)
        return response
      })
    },
    updateContact(context, payload) {
      Vue.http.put('http://framework/contact/update',
        payload
      ).then(response => {
         return response.json()
      })
       .then(contacts => {
         context.commit('editContact', contacts["data"])
         return contacts
      })
    },
    loadContacts(context) {
      Vue.http.get('http://framework/contact/list')
        .then(response => {
          return response.json()
        })
        .then(contacts => {
          context.commit('setContacts', contacts["data"])
          return contacts
        })
    },
    deleteContact(context, payload) {
      Vue.http.delete('http://framework/contact/delete',
        payload
      ).then(response => {
        context.commit('deleteContact', payload.body)
        return response
      })
    },
    createContact(context, payload) {
      Vue.http.post('http://framework/contact/create',
        payload
      ).then(response => {
        return response.json()
      })
      .then(contacts => {
        context.commit('createContact', contacts["data"])
        return contacts
      })
    },
    findRecord(context, payload) {
      Vue.http.get('http://localhost:8081/leadzvon/'+payload)
          .then(response => {
            return response.json()
          })
          .then(recordings => {
            context.commit('setRecordings', recordings)
            return recordings
          })
    }
  },
  getters: {
    getContactList(state) {
      return state.contacts;
    },
    getRecordList(state) {
      return state.recordings;
    }
  }
})
